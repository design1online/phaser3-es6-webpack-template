/**
* @author       Jade Krafsig <jade@design1online.com>
* @copyright    Design1Online.com, LLC
* @license      {@link https://github.com/design1online/phaser3-es6-webpack-template/blob/master/LICENSE|MIT License}
* @module       Config
*/
import defaultConfig from './default';
import customConfig from './custom';

export {
  /**
  * Get the phaser configuration details
  * @return {Object} the default phaser configuration
  */
  defaultConfig,

  /**
  * Get our game's custom configuration values
  * @return {Object} the game's custom configurations
  */
  customConfig,
};
