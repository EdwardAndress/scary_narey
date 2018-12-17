export function addPlatforms(scene) {
  let platforms = scene.physics.add.staticGroup();
  platforms.classType = Phaser.GameObjects.TileSprite;
  console.log(platforms.classType);


  return 0;
}
