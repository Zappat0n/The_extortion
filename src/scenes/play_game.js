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
    tile.body.setVelocityY(110);
    tile.body.setImmovable(true);
    tile.checkWorldBounds = true;
    tile.outOfBoundsKill = true;
  }

  addPlatform(y) {
    if (typeof (y) === 'undefined') {
      y = -gameOptions.TILE_HEIGHT;
    }
    const tilesNeeded = Math.ceil(gameOptions.WORLD_WIDTH / gameOptions.TILE_WIDTH);
    const hole = Math.floor(Math.random() * (tilesNeeded - 3)) + 1;
    for (let i = 0; i < tilesNeeded; i += 1) {
      if (i < hole || i > hole + 3) {
        this.addTile(i * gameOptions.TILE_WIDTH, y);
      }
    }
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
    this.timer = this.time.addEvent({
      delay: 1500, callback: this.addPlatform, callbackScope: this, loop: true,
    });
  }

  jump() {
    if ((!this.dying) && (this.player.body.touching.down
      || (this.playerJumps > 0 && this.playerJumps < gameOptions.jumps))) {
      if (this.player.body.touching.down) {
        this.playerJumps = 0;
      }
      this.player.setVelocityY(gameOptions.jumpForce * -1);
      this.playerJumps += 1;

      // stops animation
      this.player.anims.stop();
    }
  }

  update() { }
}

export default playGame;
