/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2020 Arthur Zheng.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.device');

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

Blockly.Blocks['event_whenmicrobitbegin'] = {
  /**
   * Block for when microbit begin.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whenmicrobitbegin",
      "message0": Blockly.Msg.EVENT_WHENMICROBITBEGIN,
      "nextStatement": null,
      "category": Blockly.Categories.event,
      "colour": Blockly.Colours.event.primary,
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": Blockly.Colours.event.tertiary
    });
  }
};
