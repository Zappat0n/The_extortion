import Phaser from 'phaser';
import gameOptions from '../config/game_options';

class playGame extends Phaser.Scene {
  constructor() {
    super('PlayGame');
  }

  create() { }

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
