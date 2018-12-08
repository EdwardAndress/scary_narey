import { addWeapon } from './weapon.js'

export function addPlayerWithWeapon(scene) {
  var newPlayer = scene.physics.add.sprite(500, 300, 'cokecan');
  newPlayer.setCollideWorldBounds(true);
  newPlayer.weapon = addWeapon(scene);
  newPlayer.weapon.trackSprite(newPlayer, 0, 0, true);

  newPlayer.jump = function() {
    this.setVelocityY(-300);
  }

  newPlayer.move_left = function() {
    this.weapon.bulletSpeed = -600;
    this.setVelocityX(-100);
  }

  newPlayer.move_right = function() {
    this.weapon.bulletSpeed = 600;
    this.setVelocityX(100);
  }

  return(newPlayer);
}
