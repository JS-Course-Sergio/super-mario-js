const config = {
  type: Phaser.AUTO,
  with: 256,
  height: 244,
  backgroundColor: "white",
  parent: "game",
  scene: {
    preload,
    create,
    update,
  },
};

new Phaser.Game(config);

function preload() {}

function create() {}

function update() {}
