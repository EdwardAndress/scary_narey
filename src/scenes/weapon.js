export class Weapon {

  constructor(scene, player) {
    this.bullets = scene.weapons.add(30, 'bullet');
    this.bullets.debugPhysics = true;
    this.bullets.bulletKillType = WeaponPlugin.consts.KILL_WORLD_BOUNDS;
    this.bullets.bulletLifespan = 500
    this.bullets.fireRate = 100;
    this.bullets.bulletSpeed = 600;
    this.bullets.fireAngle = 0;
    this.bullets.trackSprite(player.sprite);
  }

  setBulletSpeed(int) {
    this.bullets.bulletSpeed = int;
  }
}
