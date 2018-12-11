import 'phaser';

// This line doesn't throw and error...
import { WeaponPlugin } from 'phaser3-weapon-plugin';
// ...but nor does this one
import { MadeUpName } from 'phaser3-weapon-plugin';
import { SimpleScene } from './scenes/simple-scene';

// These return 'undefined'
console.log(WeaponPlugin);
console.log(MadeUpName);

const gameConfig = {
  width: 800,
  height: 600,
  scene: SimpleScene,
  plugins: {
    // None of these add anything to the game or scene's plugin manager
    scene: [
      // This doesn't throw an error...
      { key: 'weaponPlugin', plugin: WeaponPlugin, mapping: 'weapons' },
      // ...but nor does this one.
      { key: 'madeUpPlugin', plugin: MadeUpName, mapping: 'xyz' },
      // But this one does:
      // { key: 'anotherMadeUpPlugin', plugin: AnotherMadeUpName, mapping: 'abc' }
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
