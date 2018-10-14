/**
* Updates the canvas to match the size of the window
* with respect to the current aspect-ratio so that the
* game graphics are not distorted
*
* @param Phaser.Game instance of a phaser game
* @return null
*/
export default function fullScreenCanvas(game) {
  const canvas = document.querySelector('canvas');
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const gameRatio = game.width / game.height;

  if (windowRatio < gameRatio) {
    canvas.style.width = `${windowWidth}px`;
    canvas.style.height = `${windowWidth / gameRatio}px`;
  } else {
    canvas.style.width = `${windowHeight * gameRatio}px`;
    canvas.style.height = `${windowHeight}px`;
  }
}
