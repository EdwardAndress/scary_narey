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

    // this.load.image('cokecan', 'assets/cokecan.png');
    this.load.multiatlas('robot', 'assets/robot_walking.json', 'assets');
    this.load.image('ground', 'assets/ground.png');

  }

  create() {

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
      key: 'robot',
      frame: 'robot_walk_000.png'
    });

    let frameNames = this.anims.generateFrameNames('robot',
                                                    { start: 0,
                                                      end: 6,
                                                      zeroPad: 3,
                                                      prefix:'robot_walk_',
                                                      suffix:'.png' });
    console.log(frameNames);
    var platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(1).refreshBody();
    this.physics.add.collider(this.player, platforms);

    console.log(this.anims);

  }

  update() {

    this.player.update(this.keys);

  }
}
