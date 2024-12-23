/**
 * Visual Blocks Language
 *
 * Copyright 2020 vcloudblock.
 * https://github.com/vcloudblock/vcloudblock-blocks
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

goog.provide('Blockly.Arduino.data');

goog.require('Blockly.Arduino');


Blockly.Arduino['data_variable'] = function(block) {
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  return [varName, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['data_setvariableto'] = function(block) {
  var arg0 = Blockly.Arduino.valueToCode(block, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  if (varName === 'unnamed') {
    return '';
  }

  // Arg is a number
  if (parseFloat(arg0.slice(1, -1)) == arg0.slice(1, -1)) {
    arg0 = parseFloat(arg0.slice(1, -1)).toString();
  }
  return varName + ' = ' + arg0 + ';\n';
};

Blockly.Arduino['data_changevariableby'] = function(block) {
  var arg0 = Blockly.Arduino.valueToCode(block, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  if (varName === 'unnamed') {
    return '';
  }

  return varName + ' += ' + arg0 + ';\n';
};

Blockly.Arduino['data_showvariable'] = function() {
  return '';
};

Blockly.Arduino['data_hidevariable'] = function() {
  return '';
};

Blockly.Arduino['data_listcontents'] = function(block) {
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  return [varName, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['data_addtolist'] = function(block) {
  var item = Blockly.Arduino.valueToCode(block, 'ITEM',
      Blockly.Arduino.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  if (varName === 'unnamed') {
    return '';
  }

  return varName + '.add(' + item + ');\n';
};

Blockly.Arduino['data_deleteoflist'] = function(block) {
  var index = Blockly.Arduino.valueToCode(block, 'INDEX',
      Blockly.Arduino.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  if (varName === 'unnamed') {
    return '';
  }

  return varName + '.remove(' + index + ');\n';
};

Blockly.Arduino['data_deletealloflist'] = function(block) {
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  if (varName === 'unnamed') {
    return '';
  }

  return varName + '.clear();\n';
};

Blockly.Arduino['data_insertatlist'] = function(block) {
  var item = Blockly.Arduino.valueToCode(block, 'ITEM',
      Blockly.Arduino.ORDER_ADDITIVE) || '0';
  var index = Blockly.Arduino.valueToCode(block, 'INDEX',
      Blockly.Arduino.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  if (varName === 'unnamed') {
    return '';
  }

  return varName + '.add(' + index + ' - 1, ' + item + ');\n';
};

Blockly.Arduino['data_replaceitemoflist'] = function(block) {
  var item = Blockly.Arduino.valueToCode(block, 'ITEM',
      Blockly.Arduino.ORDER_ADDITIVE) || '0';
  var index = Blockly.Arduino.valueToCode(block, 'INDEX',
      Blockly.Arduino.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  if (varName === 'unnamed') {
    return '';
  }

  return varName + '.replace(' + index + ' - 1, ' + item + ');\n';
};

Blockly.Arduino['data_itemoflist'] = function(block) {
  var index = Blockly.Arduino.valueToCode(block, 'INDEX',
      Blockly.Arduino.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  return [varName + '.get(' + index + ' - 1)', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['data_itemnumoflist'] = function(block) {
  var item = Blockly.Arduino.valueToCode(block, 'ITEM',
      Blockly.Arduino.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  return [varName + '.search(' + item + ') + 1', Blockly.Arduino.ORDER_UNARY_SIGN];
};

Blockly.Arduino['data_lengthoflist'] = function(block) {
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  return [varName + '.size()', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['data_listcontainsitem'] = function(block) {
  var item = Blockly.Arduino.valueToCode(block, 'ITEM',
      Blockly.Arduino.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  return [varName + '.has(' + item + ') != -1', Blockly.Arduino.ORDER_UNARY_SIGN];
};

Blockly.Arduino['data_showlist'] = function() {
  return '';
};

Blockly.Arduino['data_hidelist'] = function() {
  return '';
};
