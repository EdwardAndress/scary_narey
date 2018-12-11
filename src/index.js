import 'phaser';
import { Plugin as WeaponPlugin } from 'phaser3-weapon-plugin';

import { SimpleScene } from './scenes/simple-scene';

const gameConfig = {
  width: 800,
  height: 600,
  scene: SimpleScene,
  plugins: {
        // If you change the value of plugin: xxxx here it throws an error,
        // suggesting that the plugin is loading, or at least is valid
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


window.onload = () => {
	const game = new Game(gameConfig);
};
