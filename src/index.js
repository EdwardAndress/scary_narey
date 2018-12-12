import 'phaser';
import WeaponPlugin from 'phaser3-weapon-plugin';
import { SimpleScene } from './scenes/simple-scene';


const gameConfig = {
  width: 800,
  height: 600,
  scene: SimpleScene,
  plugins: {
    scene: [
      { key: 'weaponPlugin', plugin: WeaponPlugin, mapping: 'weapons' }
    ]
  }
};


class Game extends Phaser.Game {
	constructor(config) {
		super(config);
	}
}


window.onload = function() {
	const game = new Game(gameConfig);
  console.log(game);
};
