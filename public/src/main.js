// export approach
import Phaser from "./lib/phaser.js";

// import PlayGame from "./scenes/PlayGame";

// export default new Phaser.Game({
//   width: 480,
//   height: 640,
//   backgroundColor: "#ce5e82",
//   scene: PlayGame,
// });

//onload
let game;

window.onload = () => {
  const gameConfig = {
    width: 480,
    height: 640,
    backgroundColor: "#ce5e82",
    scene: PlayGame,
  };

  game = new Phaser.Game(gameConfig);
  window.focus();
};
