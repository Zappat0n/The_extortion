import Phaser from 'phaser';
import gameOptions from '../config/game_options';
import requests from '../api/requestManager';
import { sortScores, createForm } from './helpers';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('gameScene');
  }

  addTile(x, y) {
    const tile = this.platforms.getFirstDead();
    tile.x = x;
    tile.y = y;
    tile.active = true;
    tile.visible = true;
    this.physics.add.existing(tile);
    tile.body.setVelocityY(gameOptions.SCROLL_SPEED);
    tile.body.setImmovable(true);
    tile.body.allowGravity = false;

    if (this.started) {
      this.createCoin(x, y);
    }
  }

  addPlatform(y) {
    if (typeof (y) === 'undefined') {
      y = -gameOptions.TILE_HEIGHT;
    }
    const tilesNeeded = Math.ceil(gameOptions.WORLD_WIDTH / gameOptions.TILE_WIDTH);
    const hole = Math.floor(Math.random() * (tilesNeeded - 3)) + 1;
    const hole2 = Math.floor(Math.random() * (tilesNeeded - 3)) + 1;
    const hole3 = Math.floor(Math.random() * (tilesNeeded - 3)) + 1;
    const holes = [hole, hole + 1, hole + 2, hole + 3, hole2, hole2 + 1,
      hole2 + 2, hole2 + 3, hole3, hole3 + 1, hole3 + 2, hole3 + 3];
    for (let i = 0; i < tilesNeeded; i += 1) {
      if (!holes.includes(i)) {
        this.addTile(i * gameOptions.TILE_WIDTH, y);
      }
    }
    if (this.started) {
      this.createRock();
      this.addPoints(10);
    }
  }

  createPlayer() {
    this.player = this.physics.add.sprite(gameOptions.WORLD_WIDTH / 2,
      gameOptions.WORLD_HEIGHT - (gameOptions.SPACING * 2 + (3 * gameOptions.TILE_HEIGHT)), 'player');
    this.player.setGravityY(gameOptions.PLAYER_GRAVITY);
    this.player.body.setCollideWorldBounds(true);
    this.player.setBounce(0.1);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.playerJumps = 0;
    this.input.on('pointerdown', this.jump, this);
  }

  createPlatforms() {
    this.platforms = this.add.group();
    this.platforms.enableBody = true;
    this.platforms.createMultiple({
      key: 'platform',
      quantity: 2500,
      active: false,
    });
    const bottom = gameOptions.WORLD_HEIGHT - gameOptions.TILE_HEIGHT;
    const top = gameOptions.TILE_HEIGHT - 40;
    for (let y = bottom; y > top - gameOptions.TILE_HEIGHT; y -= gameOptions.SPACING) {
      this.addPlatform(y);
    }
  }

  createCoin(x, y) {
    if (Phaser.Math.Between(1, 100) <= gameOptions.COIN_PERCENT) {
      if (this.coinPool.getLength()) {
        const coin = this.coinPool.getFirst();
        coin.x = x;
        coin.y = y - 45;
        coin.alpha = 1;
        coin.active = true;
        coin.visible = true;
        this.coinPool.remove(coin);
      } else {
        const coin = this.physics.add.sprite(x, y, 'coin');
        coin.setCollideWorldBounds(true);
        coin.setGravityY(gameOptions.PLAYER_GRAVITY);
        coin.anims.play('rotate');
        this.coinGroup.add(coin);
      }
    }
  }

  createRock() {
    const x = Phaser.Math.Between(0, gameOptions.WORLD_WIDTH);
    if (this.rockPool.getLength()) {
      const rock = this.rockPool.getFirst();
      rock.x = x;
      rock.y = 24;
      rock.alpha = 1;
      rock.active = true;
      rock.visible = true;
      this.rockPool.remove(rock);
    } else {
      const rock = this.physics.add.sprite(x, 24, 'rock');
      rock.setBounce(1);
      rock.setCollideWorldBounds(true);
      rock.setGravityY(gameOptions.PLAYER_GRAVITY);
      rock.setVelocityX(Phaser.Math.Between(-60, 60), 20);
      this.rockGroup.add(rock);
    }
  }

  addPoints(points) {
    this.score += points;
    this.scoreText.setText(`Score: ${this.score}`);
  }

  collectCoin(player, coin) {
    if (this.started) {
      this.addPoints(10);
    }

    this.tweens.add({
      targets: coin,
      y: coin.y - 100,
      alpha: 0,
      duration: 800,
      ease: 'Cubic.easeOut',
      callbackScope: this,
      onComplete() {
        this.coinGroup.killAndHide(coin);
        this.coinGroup.remove(coin);
      },
    });
  }

  createCoins() {
    this.coinGroup = this.add.group({
      removeCallback(coin) { coin.scene.coinPool.add(coin); },
    });
    this.coinPool = this.add.group({
      removeCallback(coin) { coin.scene.coinGroup.add(coin); },
    });
  }

  createRocks() {
    this.rockGroup = this.add.group({
      removeCallback(rock) { rock.scene.rockPool.add(rock); },
    });
    this.rockPool = this.add.group({
      removeCallback(rock) { rock.scene.rockGroup.add(rock); },
    });
  }

  playRound() {
    if (this.evenRound) {
      this.addPlatform();
      this.evenRound = false;
    } else {
      this.createRock();
      this.evenRound = true;
    }
  }

  create() {
    this.started = false;
    this.evenRound = false;
    this.score = 0;
    this.dead = false;

    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      fontFamily: 'Fredericka the Great, cursive',
      fontSize: '36px',
      fill: '#000000',
      color: '#ffd700',
      strokeThickness: 2,
    });

    this.createCoins();
    this.createRocks();
    this.createPlayer();
    this.createPlatforms();


    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.coinGroup, this.platforms);
    this.physics.add.collider(this.rockGroup, this.platforms);
    this.physics.add.overlap(this.player, this.coinGroup, this.collectCoin, null, this);
    this.physics.add.collider(this.player, this.rockGroup, this.gameOver, null, this);

    this.started = true;
    this.timer = this.time.addEvent({
      delay: 1000, callback: this.playRound, callbackScope: this, loop: true,
    });
  }

  jump() {
    if ((!this.dying) && (this.player.body.touching.down
      || (this.playerJumps > 0 && this.playerJumps < gameOptions.JUMPS))) {
      if (this.player.body.touching.down) {
        this.playerJumps = 0;
      }
      this.player.setVelocityY(gameOptions.JUMP_FORCE * -1);
      this.playerJumps += 1;
    }
  }

  gotoTitleScene() {
    this.scene.start('titleScene');
  }

  checkScore(data) {
    const leaderboard = sortScores(data.result);
    if (leaderboard.slice(0, 8).every((item) => item.score > this.score)) {
      this.input.on('pointerdown', this.gotoTitleScene, this);
      return;
    }
    createForm(this).create();
  }

  gameOver() {
    this.dead = true;
    this.physics.pause();
    this.timer.paused = true;
    this.player.anims.play('turn');
    this.player.setTint(0xff0000);
    this.add.text(gameOptions.WORLD_WIDTH / 2 - 200, 300, 'GAME OVER', {
      fontFamily: 'Fredericka the Great, cursive',
      fontSize: '96px',
      color: '#ffd700',
      fill: '#000000',
      strokeThickness: 5,
    });
    requests.getScores().then((data) => this.checkScore(data));
  }

  update() {
    if (this.dead) {
      return;
    }

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-gameOptions.PLAYER_SPEED);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(gameOptions.PLAYER_SPEED);
      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }


    if (this.player.body.position.y >= gameOptions.WORLD_HEIGHT - this.player.body.height) {
      this.gameOver();
    }


    this.rockGroup.getChildren().forEach((rock) => {
      if (rock.y >= gameOptions.WORLD_HEIGHT - rock.height) {
        this.rockGroup.killAndHide(rock);
        this.rockGroup.remove(rock);
      }
    }, this);

    this.coinGroup.getChildren().forEach((coin) => {
      if (coin.y >= gameOptions.WORLD_HEIGHT - coin.height) {
        this.coinGroup.killAndHide(coin);
        this.coinGroup.remove(coin);
      }
    }, this);
  }
}