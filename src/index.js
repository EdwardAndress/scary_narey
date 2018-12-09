import 'phaser';

import { SimpleScene } from './scenes/simple-scene';

const gameConfig = {
  width: 800,
  height: 600,
  scene: SimpleScene,
};


class Game extends Phaser.Game {
	constructor(config) {
		super(config);
	}
}


window.onload = () => {
	const game = new Game(gameConfig);
};
