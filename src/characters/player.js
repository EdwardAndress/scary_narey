export class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key, config.frame);


    config.scene.sys.displayList.add(this);

    // ATM this seems to have no effect but was part of the solution I was
    // given on Discord
    config.scene.sys.updateList.add(this);

    config.scene.sys.arcadePhysics.world.enableBody(this);

    this.body.setCollideWorldBounds(true);

    // console.log(this.anims);

    this.facing = 'right';

  }

  update(keys) {

    if (keys.up.isDown && this.body.touching.down)
    {
        this.body.setVelocityY(-300);
    }

    if (keys.left.isDown)
    {
        this.body.setVelocityX(-100);
        this.setFlipX(true);

    }
    else if (keys.right.isDown)
    {
        this.body.setVelocityX(100);
        this.setFlipX(false);

    }
    else if (this.body.touching.down)
    {
        this.body.setVelocityX(0);
    }

  }

}
