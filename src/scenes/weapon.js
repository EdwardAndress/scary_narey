export function addWeapon(scene) {
  var newWeapon = scene.weapons.add(30, 'bullet');
  newWeapon.debugPhysics = true;
  newWeapon.bulletKillType = WeaponPlugin.consts.KILL_WORLD_BOUNDS;
  newWeapon.bulletLifespan = 500
  newWeapon.fireRate = 100;
  newWeapon.bulletSpeed = 600;

  return(newWeapon);
}
