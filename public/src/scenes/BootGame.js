import Phaser from "../lib/phaser.js";

export default class BootGame extends Phaser.Scene {
  constructor() {
    super("BootGame");
  }

  create() {
    console.log("Game is booting...");
    this.scene.start("PlayGame");
  }
}
