import Phaser from 'phaser';
import gameOptions from '../config/game_options';

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

    this.createCoin(x, y);
  }

  addPlatform(y) {
    if (typeof (y) === 'undefined') {
      y = -gameOptions.TILE_HEIGHT;
    }
    const tilesNeeded = Math.ceil(gameOptions.WORLD_WIDTH / gameOptions.TILE_WIDTH);
    const hole = Math.floor(Math.random() * (tilesNeeded - 3)) + 1;
    const hole2 = Math.floor(Math.random() * (tilesNeeded - 3)) + 1;
    const holes = [hole, hole + 1, hole + 2, hole + 3, hole2, hole2 + 1, hole2 + 2, hole2 + 3];
    for (let i = 0; i < tilesNeeded; i += 1) {
      if (!holes.includes(i)) {
        this.addTile(i * gameOptions.TILE_WIDTH, y);
      }
    }
    if (this.player) {
      this.createRock();
    }
  }

  createPlayer() {
    this.player = this.physics.add.sprite(gameOptions.WORLD_WIDTH / 2, gameOptions.WORLD_HEIGHT - (gameOptions.SPACING * 2 + (3 * gameOptions.TILE_HEIGHT)), 'player');
    this.player.setGravityY(gameOptions.PLAYER_GRAVITY);
    this.player.body.setCollideWorldBounds(true);
    this.player.setBounce(0.1);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.playerJumps = 0;
    this.dying = false;
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
        const coin = this.physics.add.sprite(x, y - 45, 'coin');
        coin.setImmovable(true);
        coin.setVelocityY(gameOptions.SCROLL_SPEED);
        coin.anims.play('rotate');
        coin.setDepth(2);
        this.coinGroup.add(coin);
      }
    }
  }

  createRock() {
    const x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
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
      rock.setVelocity(Phaser.Math.Between(-200, 200), 20);
      this.rockGroup.add(rock);
      this.physics.add.collider(rock, this.platforms);
    }
  }

  collectCoin(player, coin) {
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

  create() {
    this.createCoins();
    this.createRocks();
    this.createPlayer();
    this.createPlatforms();

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.overlap(this.player, this.coinGroup, this.collectCoin, null, this);
    this.physics.add.collider(this.player, this.rockGroup, this.gameOver, null, this);

    this.timer = this.time.addEvent({
      delay: 3500, callback: this.addPlatform, callbackScope: this, loop: true,
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

  gameOver() {
    this.physics.pause();
    this.player.setTint(0xff0000);
    this.add.text(gameOptions.WORLD_WIDTH / 2 - 200, gameOptions.WORLD_HEIGHT / 2, 'GAME OVER', {
      fontFamily: 'Fredericka the Great, cursive',
      fontSize: '96px',
      color: '#ffd700',
      fill: '#000000',
      strokeThickness: 5,
    });
    this.input.on('pointerdown', this.gotoTitleScene, this);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-180);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(180);
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
      if (coin.y < -coin.displayWidth / 2) {
        this.coinGroup.killAndHide(coin);
        this.coinGroup.remove(coin);
      }
    }, this);
  }
}
