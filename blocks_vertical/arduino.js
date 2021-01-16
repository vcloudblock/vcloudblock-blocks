/**
 * Created by Riven on 7/7/2016.
 * todo : 此文件提供了积木块的结构，单目前尚不知道被何处调用
 */

'use strict';

goog.provide('Blockly.Blocks.arduino');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['event_whenarduinobegin'] = {
  /**
   * Block for when arduino begin.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whenarduinobegin",
      "message0": Blockly.Msg.EVENT_WHENARDUINOBEGIN,
      "nextStatement": null,
      "category": Blockly.Categories.event,
      "colour": Blockly.Colours.event.primary,
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": Blockly.Colours.event.tertiary
    });
  }
};
