export class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    console.log('Player constructor running');
  }

  update(keys) {

  }


}
