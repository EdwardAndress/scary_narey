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
      }
    });
  }

  preload() {
    this.load.image('cokecan', 'assets/cokecan.png');
    this.load.image('ground', 'assets/ground.png')
  }

  create() {

    //This is how https://github.com/nkholski/phaser3-es6-webpack takes input.
    //It seems to be a bit more flexible than createCursorKeys as you can
    //add any keyboard key in the same way
    this.keys = {
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
      down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
    };

    this.player =  new Player({
      scene: this,
      key: 'cokecan',
      x: 500,
      y: 300
    });

    var platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(1).refreshBody();
    this.physics.add.collider(this.player, platforms);
  }

  update() {

    this.player.update(this.keys);

  }
}
