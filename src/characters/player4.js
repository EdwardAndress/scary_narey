export class Player {

  constructor(config) {

    this.scene = config.scene;

    this.sprite = new Phaser.GameObjects.Sprite(config.scene,
                                                config.x,
                                                config.y,
                                                config.key,
                                                config.frame);

    this.scene.sys.displayList.add(this.sprite);
    this.scene.sys.updateList.add(this.sprite);
    this.scene.sys.arcadePhysics.world.enableBody(this.sprite);
    this.sprite.body.setCollideWorldBounds(true);

  }

  update(keys) {
    if (keys.up.isDown && this.sprite.body.blocked.down)
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
    else if (this.sprite.body.blocked.down)
    {
        this.sprite.body.setVelocityX(0);
        this.sprite.anims.pause();
    }
  }
}
