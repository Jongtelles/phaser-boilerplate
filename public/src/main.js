// export approach
import Phaser from "./lib/phaser.js";
import PlayGame from "./scenes/PlayGame.js";

export default new Phaser.Game({
  width: 480,
  height: 640,
  backgroundColor: "#ce5e82",
  scene: PlayGame,
});
