// Initially this was an attempt to extend Phaser.Sprite but reverted
// to Image in case Sprite expects an animation. The result is exactly the same
export class Player extends Phaser.GameObjects.Image {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);

    config.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);

    // Following section contains attempts to get texture showing

    console.log(config.key); // The string is being passed as expected
    console.log(this.texture); // The string refers to a real item in the TextureManager

    this.setActive(true); // Makes no difference
    this.setVisible(true); // Makes no difference

    // Doesn't throw an error, so finds texture, but no difference
    this.setTexture('cokecan');

    // Shows that we get a different result if what is passed to TextureManager
    // isn't actually a texture within it.
    this.setTexture('not_a_valid_name');
    console.log(this.texture);

    // End testing section

  }

  update(keys) {

    if (keys.up.isDown && this.body.touching.down)
    {
        this.body.setVelocityY(-300);
    }

    if (keys.left.isDown)
    {
        this.body.setVelocityX(-100);
    }
    else if (keys.right.isDown)
    {
        this.body.setVelocityX(100);
    }
    else if (this.body.touching.down)
    {
        this.body.setVelocityX(0);
    }

  }

}
