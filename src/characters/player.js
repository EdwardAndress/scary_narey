export class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key, config.frame);


    this.scene.sys.displayList.add(this);
    this.scene.sys.updateList.add(this);
    this.scene.sys.arcadePhysics.world.enableBody(this);
    this.body.setCollideWorldBounds(true);

    this.createWalkAnimation(config.anim);
    this.anims.play('walk');

  }

  createWalkAnimation(animConfig) {
    let frameNames = this.scene.anims.generateFrameNames(this.texture.key,
                                                        { start: 0,
                                                          end: animConfig.lastFrame,
                                                          zeroPad: 3,
                                                          prefix: animConfig.framePrefix,
                                                          suffix:'.png' });

    this.scene.anims.create({ key: 'walk',
                              frames: frameNames,
                              frameRate: 10,
                              repeat: -1 });
  }

  update(keys) {

    // The logic here needs some straightforward work to stop the walking anim
    // while in mid-air

    if (keys.up.isDown && this.body.touching.down)
    {
        this.body.setVelocityY(-300);
        this.anims.pause();
    }

    if (keys.left.isDown)
    {
        this.body.setVelocityX(-100);
        this.setFlipX(true);
        this.anims.resume();

    }
    else if (keys.right.isDown)
    {
        this.body.setVelocityX(100);
        this.setFlipX(false);
        this.anims.resume();

    }
    else if (this.body.touching.down)
    {
        this.body.setVelocityX(0);
        this.anims.pause();
    }

  }

}
