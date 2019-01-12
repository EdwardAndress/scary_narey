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
    this.load.image('bullet', 'assets/bullet.png');
    this.load.multiatlas('robot', 'assets/player/robot_walking.json', 'assets/player');
    this.load.image('tiles', 'assets/environment/third_party/basic_tileset_144x48.png');
    this.load.tilemapTiledJSON("map", "assets/environment/basic_horiz_map.json");
  }

  create() {
    this.keys = {
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
      down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
      space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    };

    const map = this.make.tilemap({ key: "map"});
    const tileset = map.addTilesetImage("basic_48_tiles", "tiles");
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

    worldLayer.setCollisionByProperty({ collides: true });
    this.physics.add.collider(this.player.sprite, worldLayer);
  }

  update() {
    this.player.update(this.keys);
  }
}
