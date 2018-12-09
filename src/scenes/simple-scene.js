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
