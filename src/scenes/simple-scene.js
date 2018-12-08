import { addPlayerWithWeapon } from './player.js'

export class SimpleScene extends Phaser.Scene {

  constructor() {
    super({
      key: 'level1',
      physics: {
        arcade: {
          debug: true,
          gravity: { y: 300}
        }
      }
    });
  }

  preload() {
    this.load.scenePlugin('WeaponPlugin', '../../assets/phaser3-weapon-plugin/dist/WeaponPlugin.js', 'weaponPlugin', 'weapons');
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('cokecan', 'assets/cokecan.png');
    this.load.image('ground', 'assets/ground.png');
  }

  create() {

    this.cursors = this.input.keyboard.createCursorKeys();
    this.player = addPlayerWithWeapon(this);

    var platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(1).refreshBody();
    this.physics.add.collider(this.player, platforms);
  }

  update() {

    if (this.cursors.up.isDown && this.player.body.touching.down)
    {
        this.player.jump();
    }

    if (this.cursors.left.isDown)
    {
        this.player.move_left();
    }
    else if (this.cursors.right.isDown)
    {
        this.player.move_right();
    }
    else if (this.player.body.touching.down)
    {
        this.player.setVelocityX(0);
    }

    if (this.cursors.space.isDown) {
      this.player.weapon.fire();
    }

  }
}
