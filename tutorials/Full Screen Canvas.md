# Full Screen Canvas

In order to make the canvas go full screen for Phaser you need to add a window event listener for the resize event. Then you'll pass it a callback which will re-calculate the height and width of the screen proportional to the new window dimensions.

## Create a resize event listener

```
const config = {
  type: Phaser.WEBGL,
  parent: 'content',
  width: 800,
  height: 600,
  fullScreen: true,
};

window.game = new Phaser(config);

if (config.fullScreen) {
  // call the full screen function after we initialize the game instance
  fullScreenCanvas();

  // call the full screen function every time the screen resizes
  window.addEventListener('resize', fullScreenCanvas, false);
}
```

## Create the fullScreenCanvas function

```
function fullScreenCanvas() {
  const canvas = document.querySelector('canvas');
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const gameRatio = window.game.width / window.game.height;

  if (windowRatio < gameRatio) {
    canvas.style.width = `${windowWidth}px`;
    canvas.style.height = `${windowWidth / gameRatio}px`;
  } else {
    canvas.style.width = `${windowHeight * gameRatio}px`;
    canvas.style.height = `${windowHeight}px`;
  }
}
```

## Working Example

In this project you can see an example of our full screen resizer in the following files:

| File          | Description                   |
| ------------- | ----------------------------- |
| [src/main.js](/src/main.js)   | Initalizes the game object and window resize onEventListener |
| [src/config/index.js](/src/config/index.js) | Exports the default and custom phaser game configurations |
| [src/config/custom.js](/src/config/custom.js) | The custom phaser configurations that are added for this starter pack |
| [src/config/default.js](/src/config/default.js) | The default phaser configuration settings for a phaser project |
| [src/utilities/canvas.js](/src/utilities/canvas.js) | Contains the utility function for the fullScreenCanvas resize adjustments |
