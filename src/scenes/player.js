import { Weapon } from './weapon.js'

export class Player {

  constructor(scene) {
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(500, 300, 'cokecan');
    this.sprite.setCollideWorldBounds(true);
    this.weapon = new Weapon(scene, this);
  }

  jump() {
    this.sprite.setVelocityY(-300);
  }

  walk_left() {
    this.weapon.setBulletSpeed(-600);
    this.sprite.setVelocityX(-100);
  }

  walk_right() {
    this.weapon.setBulletSpeed(600);
    this.sprite.setVelocityX(100);
  }
}
