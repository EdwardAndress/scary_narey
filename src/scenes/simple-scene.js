export class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', 'assets/cokecan.png');
  }

  create() {
    console.log(this)
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    this.player = this.add.sprite(200, 400, 'cokecan');
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {

    if (this.cursors.up.isDown)
    {
        console.log('up');
        this.player.body.moveUp(300)
    }
    else if (this.cursors.down.isDown)
    {
        console.log('right');
        this.player.body.moveDown(300);
    }

    if (this.cursors.left.isDown)
    {
        console.log('left');
        this.player.body.velocity.x = -300;
    }
    else if (this.cursors.right.isDown)
    {
        console.log('up');
        this.player.body.moveRight(300);
    }

  }
}
