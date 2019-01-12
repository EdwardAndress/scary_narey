import { addWeapon } from './weapon.js'

export class Player {

  constructor(scene) {
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(500, 300, 'cokecan');
    this.sprite.setCollideWorldBounds(true);
    this.weapon = addWeapon(scene);
    this.weapon.trackSprite(this.sprite, 0, 0, true);
  }

  jump() {
    this.sprite.setVelocityY(-300);
  }

  walk_left() {
    this.weapon.bulletSpeed = -600;
    this.sprite.setVelocityX(-100);
  }

  walk_right() {
    this.weapon.bulletSpeed = 600;
    this.sprite.setVelocityX(100);
  }
}
