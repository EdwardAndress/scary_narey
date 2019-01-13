import { Weapon } from '../weapons/weapon'

export class Player {

  constructor(config) {

    this.scene = config.scene;

    this.sprite = new Phaser.GameObjects.Sprite(config.scene,
                                                config.x,
                                                config.y,
                                                config.key,
                                                config.frame);

    this.weapon = new Weapon(this);
    this.scene.sys.displayList.add(this.sprite);
    this.scene.sys.updateList.add(this.sprite);
    this.scene.sys.arcadePhysics.world.enableBody(this.sprite);
    this.sprite.body.setCollideWorldBounds(true);
    this.createWalkAnimation(config.anim);
    this.sprite.anims.play('walk');
    // If this becomes two player, this might be better in scene
    // this.scene.cameras.main.startFollow(this.sprite);
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

  walkLeft() {
    this.sprite.body.setVelocityX(-100);
    this.sprite.setFlipX(true);
    this.sprite.anims.resume();
  }

  walkRight() {
    this.sprite.body.setVelocityX(100);
    this.sprite.setFlipX(false);
    this.sprite.anims.resume();
  }

  standStill() {
    this.sprite.body.setVelocityX(0);
    this.sprite.anims.pause();
  }

  jump() {
    this.sprite.body.setVelocityY(-300);
    this.sprite.anims.pause();
  }

  update(keys) {

    if (keys.space.isDown) { this.weapon.bullets.fire(); }

    if (keys.up.isDown && this.sprite.body.blocked.down) { this.jump(); }

    if (keys.left.isDown) {
        this.weapon.aimLeft();
        this.walkLeft();
    } else if (keys.right.isDown) {
        this.weapon.aimRight();
        this.walkRight();
    } else if (this.sprite.body.blocked.down) {
        this.standStill();
    }
  }
}
