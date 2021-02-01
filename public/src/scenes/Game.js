import Phaser from "../lib/phaser.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  create() {
    console.log("Test = Game, test Game");
  }
}
