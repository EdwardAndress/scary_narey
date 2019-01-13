import WeaponPlugin from 'phaser3-weapon-plugin';

export class Weapon {

  constructor(player) {
    this.bullets = player.scene.weapons.add(30, 'bullet');
    this.bullets.debugPhysics = true;
    this.bullets.bulletKillType = WeaponPlugin.consts.KILL_WORLD_BOUNDS;
    this.bullets.bulletLifespan = 500
    this.bullets.fireRate = 100;
    this.bullets.bulletSpeed = 600;
    this.bullets.fireAngle = 0;
    this.bullets.trackSprite(player.sprite);
    this.bullets.trackOffset.y = -10;
  }

  aimLeft() {
    this.bullets.trackOffset.x = -20;
    this.bullets.bulletSpeed = -600;
  }

  aimRight() {
    this.bullets.trackOffset.x = 20;
    this.bullets.bulletSpeed = 600;
  }
}
