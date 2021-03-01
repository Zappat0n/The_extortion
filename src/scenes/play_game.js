import Phaser from 'phaser';
import gameOptions from '../config/game_options';

class playGame extends Phaser.Scene {
  constructor() {
    super('PlayGame');
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
  }

  createPlayer() {
    // Add the player to the game by creating a new sprite
    this.player = this.physics.add.sprite(gameOptions.WORLD_WIDTH / 2, gameOptions.WORLD_HEIGHT - (gameOptions.SPACING * 2 + (3 * gameOptions.TILE_HEIGHT)), 'player');
    this.player.setGravityY(gameOptions.PLAYER_GRAVITY);
    this.player.body.setCollideWorldBounds(true);
    this.player.setBounce(0.1);
    this.physics.add.collider(this.player, this.platforms);
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

  create() {
    this.createPlatforms();
    this.createPlayer();
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

  gameOver() {
    this.scene.start('PlayGame');
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
  }
}

export default playGame;
