export class SimpleScene extends Phaser.Scene {

  constructor() {
    super({
      key: 'level1',
      physics: {
        arcade: {
          debug: true,
          gravity: { y: 100}
        }
      }
    });
  }

  preload() {
    this.load.image('cokecan', 'assets/cokecan.png');
  }

  create() {
    this.add.text(100, 100, 'Hello Player 1!', { fill: '#0f0' });
    this.player = this.physics.add.sprite(100, 450, 'cokecan');
    this.cursors = this.input.keyboard.createCursorKeys();
    var platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
    this.physics.add.collider(this.player, platforms);
  }

  update() {

    if (this.cursors.up.isDown)
    {
        console.log('up');
        this.player.setVelocityY(-100);
    }
    else if (this.cursors.down.isDown)
    {
        console.log('down');
        this.player.setVelocityY(100);
    }

    if (this.cursors.left.isDown)
    {
        console.log('left');
        this.player.setVelocityX(-100);
    }
    else if (this.cursors.right.isDown)
    {
        console.log('right');
        this.player.setVelocityX(100);
    }

  }
}
