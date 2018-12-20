export class Player {
  constructor(config) {
    // super(config.scene, config.x, config.y, config.key, config.frame);

    this.scene = config.scene;

    this.sprite = this.scene.physics.add.sprite(config.scene,
                                                config.x,
                                                config.y,
                                                config.key,
                                                config.frame);

    this.scene.sys.displayList.add(this.sprite);
    // this.scene.sys.updateList.add(this);
    // this.scene.sys.arcadePhysics.world.enableBody(this);

    // Consider removing this if walls retained
    // this.sprite.body.setCollideWorldBounds(true);

    this.createWalkAnimation(config.anim);
    this.sprite.anims.play('walk');

  }

  createWalkAnimation(animConfig) {

    let frameNames = this.scene.anims.generateFrameNames(this.sprite.texture.key,
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

    if (keys.up.isDown && this.body.blocked.down)
    {
        this.sprite.body.setVelocityY(-300);
        this.sprite.anims.pause();
    }

    if (keys.left.isDown)
    {
        this.sprite.body.setVelocityX(-100);
        this.sprite.setFlipX(true);
        this.sprite.anims.resume();

    }
    else if (keys.right.isDown)
    {
        this.sprite.body.setVelocityX(100);
        this.sprite.setFlipX(false);
        this.sprite.anims.resume();

    }
    else if (this.body.blocked.down)
    {
        this.sprite.body.setVelocityX(0);
        this.sprite.anims.pause();
    }

  }

}
