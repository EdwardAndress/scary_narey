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

    this.keys = {
      jump: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
      down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
    };

    this.player = new Player({
      scene: this,
      key: 'cokecan',
      x: 500,
      y: 300
    });

    // this.add.text(100, 100, 'Hello Player 1!', { fill: '#0f0' });
    // this.player = this.physics.add.sprite(500, 300, 'cokecan');
    // this.player.setCollideWorldBounds(true);
    // this.cursors = this.input.keyboard.createCursorKeys();
    // var platforms = this.physics.add.staticGroup();
    // platforms.create(400, 568, 'ground').setScale(1).refreshBody();
    // this.physics.add.collider(this.player, platforms);
  }

  update() {

    // if (this.cursors.up.isDown && this.player.body.touching.down)
    // {
    //     this.player.setVelocityY(-300);
    // }
    //
    // if (this.cursors.left.isDown)
    // {
    //     this.player.setVelocityX(-100);
    // }
    // else if (this.cursors.right.isDown)
    // {
    //     this.player.setVelocityX(100);
    // }
    // else if (this.player.body.touching.down)
    // {
    //     this.player.setVelocityX(0);
    // }


  }
}
