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

    this.weapon = this.weapons.add(30, 'bullet');
    this.weapon.debugPhysics = true;
    this.weapon.bulletKillType = WeaponPlugin.consts.KILL_WORLD_BOUNDS;
    this.weapon.bulletLifespan = 500
    this.weapon.fireRate = 100;
    this.weapon.bulletSpeed = 600;

    this.cursors = this.input.keyboard.createCursorKeys();

    this.player = this.physics.add.sprite(500, 300, 'cokecan');
    this.player.facing = 'right'
    this.player.setCollideWorldBounds(true);

    this.weapon.trackSprite(this.player, 0, 0, true);
    var platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(1).refreshBody();
    this.physics.add.collider(this.player, platforms);
  }

  update() {

    if (this.cursors.up.isDown && this.player.body.touching.down)
    {
        this.player.setVelocityY(-300);
    }

    if (this.cursors.left.isDown)
    {
        this.weapon.bulletSpeed = -600;
        this.player.setVelocityX(-100);
    }
    else if (this.cursors.right.isDown)
    {
        this.weapon.bulletSpeed = 600;
        this.player.setVelocityX(100);
    }
    else if (this.player.body.touching.down)
    {
        this.player.setVelocityX(0);
    }

    if (this.cursors.space.isDown) {
      this.weapon.fire();
    }

  }
}
