import { Plugin as WeaponPlugin } from 'phaser3-weapon-plugin';
import { Player } from '../characters/player';

export class SimpleScene extends Phaser.Scene {



  constructor() {

    super({
      key: 'level1',
      physics: {
        arcade: {
          debug: true,
          gravity: { y: 300}
        }
      },
      // Pretty sure this isn't right and the config ref to the plugins should
      // be applied to Game. See:
      // https://github.com/photonstorm/phaser3-examples/blob/master/public/src/plugins/scene%20plugin%20test%202.js
      // plugins: {
      //   scene: [
      //     { key: 'weaponPlugin', plugin: WeaponPlugin, mapping: 'weapons' }
      //   ]
      // }
    });
  }

  preload() {

    this.load.image('cokecan', 'assets/cokecan.png');
    this.load.image('ground', 'assets/ground.png');
  }

  create() {

    // This doesn't work!
    // var newWeapon = this.weapons.add(30, 'bullet');

    this.keys = {
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
      down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
    };

    this.player =  new Player({
      scene: this,
      x: 500,
      y: 300,
      key: 'cokecan'
    });

    var platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(1).refreshBody();
    this.physics.add.collider(this.player, platforms);

    console.log(this);
  }

  update() {

    this.player.update(this.keys);

  }
}
