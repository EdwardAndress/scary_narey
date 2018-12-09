export class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);

    //This is used in https://github.com/nkholski/phaser3-es6-webpack/blob/master/src/sprites/Mario.js
    //but doesn't seem to be needed
    // config.scene.physics.world.enable(this);

    config.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);
  }

  update(keys) {

    if (keys.up.isDown && this.body.touching.down)
    {
        this.body.setVelocityY(-300);
    }

    if (keys.left.isDown)
    {
        this.body.setVelocityX(-100);
    }
    else if (keys.right.isDown)
    {
        this.body.setVelocityX(100);
    }
    else if (this.body.touching.down)
    {
        this.body.setVelocityX(0);
    }

  }

}
