import { Player } from '../characters/player';
// import { addPlatforms } from '../environment/platforms.js'


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

    this.load.multiatlas('robot', 'assets/robot_walking.json', 'assets');
    this.load.image('tiles', 'assets/third_party/tileset_test_288x96.png');
    this.load.tilemapTiledJSON("map", "assets/test1.json");
    // this.load.image('ground', 'assets/ground.png');
    // this.load.image('background', 'assets/third_party/background_96x96.png');
    // this.load.image('platform', 'assets/third_party/platform_64x64.png');

  }

  create() {

    this.keys = {
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
      down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
    };

    const map = this.make.tilemap({ key: "map"});
    const tileset = map.addTilesetImage("tileset_test_288x96", "tiles");

    // Parameters: layer name (or index) from Tiled, tileset, x, y
    const belowLayer = map.createStaticLayer("background", tileset, 0, 0);
    const worldLayer = map.createStaticLayer("solid", tileset, 0, 0);

    this.player =  new Player({
      scene: this,
      x: 500,
      y: 300,
      key: 'robot',
      frame: 'robot_walk_000.png',
      anim: {
        framePrefix: 'robot_walk_',
        lastFrame: 6
      }
    });

    // let platform_test = addPlatforms(this);

    // var platforms = this.physics.add.staticGroup();
    // platforms.create(400, 568, 'ground').setScale(1).refreshBody();
    // this.physics.add.collider(this.player, platforms);

  }

  update() {

    this.player.update(this.keys);

  }
}
