/**
 * Visual Blocks Language
 *
 * Copyright 2021 Arthur Zheng.
 * https://github.com/openblockcc/openblock-blocks
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

goog.provide('Blockly.Python.microbit');

goog.require('Blockly.Python');

Blockly.Python['microbit_display_showImage'] = function(block) {
  var arg0 = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '0';

  arg0 = arg0.slice(0, 5) + ':' + arg0.slice(5, 10) + ':' + arg0.slice(10, 15)
    + ':' + arg0.slice(15, 20) + ':' + arg0.slice(20, 25);
  var code = "display.show(Image('" + arg0 + "'))\n";
  return code;
};

Blockly.Python['microbit_display_showNumber'] = function(block) {
  var arg0 = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_FUNCTION_CALL) || '0';
  var code = "display.scroll(str(" + arg0 + "), wait=False, loop=False)\n";
  return code;
};

Blockly.Python['microbit_display_showString'] = function(block) {
  var arg0 = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_FUNCTION_CALL) || '0';
  var code = "display.scroll(str(" + arg0 + "), wait=True, loop=False)\n";
  return code;
};
