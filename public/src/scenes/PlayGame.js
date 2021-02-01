import Phaser from "../lib/phaser.js";

export default class PlayGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }

  create() {
    console.log("Test PlayGame, test PlayGame");
  }
}
