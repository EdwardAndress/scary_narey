import 'phaser';

import { SimpleScene } from './scenes/simple-scene';

const gameConfig = {
  width: 1280,
  height: 720,
  scene: SimpleScene,
};

new Phaser.Game(gameConfig);
