export class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);

    //This is used in https://github.com/nkholski/phaser3-es6-webpack/blob/master/src/sprites/Mario.js
    //but doesn't seem to be needed
    // config.scene.physics.world.enable(this);

    config.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);

    // Following section contains attempts to get texture showing

    console.log(config.key); // The string is being passed as expected
    console.log(this.texture); // The string refers to a real item in the TextureManager

    this.setActive(true); // Makes no difference
    this.setScale(2); // Successfully doubles the size of the collider box
    this.setVisible(true); // Makes no difference

    // Doesn't throw an error, so finds texture, but no difference
    this.setTexture('cokecan');

    // Shows that we get a different result if what is passed to TextureManager
    // isn't actually a texture within it. Note no change to the size of the
    // collider box
    this.setTexture('why_does_this_not_work');
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
