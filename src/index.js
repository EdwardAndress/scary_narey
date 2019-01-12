import 'phaser';
import { SimpleScene } from './scenes/simple-scene';


const gameConfig = {
  width: 1536,
  height: 768,
  scene: SimpleScene
};


class Game extends Phaser.Game {
	constructor(config) {
		super(config);
	}
}


window.onload = function() {
	const game = new Game(gameConfig);
  // Suggest leaving this in semi-permanently as it's useful for almost
  // all debugging
  console.log(game);
};
