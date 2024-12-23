/**
 * Visual Blocks Language
 *
 * Copyright 2021 vcloudblock.
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

goog.provide('Blockly.Python.data');

goog.require('Blockly.Python');


Blockly.Python['data_variable'] = function(block) {
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  return [varName, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['data_setvariableto'] = function(block) {
  var arg0 = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  if (varName === 'unnamed') {
    return '';
  }

  // Arg is a number
  if (parseFloat(arg0.slice(1, -1)) == arg0.slice(1, -1)) {
    arg0 = parseFloat(arg0.slice(1, -1)).toString();
  }
  return varName + ' = ' + arg0 + '\n';
};

Blockly.Python['data_changevariableby'] = function(block) {
  var arg0 = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VARIABLE'),
      Blockly.Variables.NAME_TYPE);
  if (varName === 'unnamed') {
    return '';
  }

  return varName + ' += ' + arg0 + '\n';
};

Blockly.Python['data_showvariable'] = function() {
  return '';
};

Blockly.Python['data_hidevariable'] = function() {
  return '';
};

Blockly.Python['data_listcontents'] = function(block) {
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  return [varName, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['data_addtolist'] = function(block) {
  var item = Blockly.Python.valueToCode(block, 'ITEM',
      Blockly.Python.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  if (varName === 'unnamed') {
    return '';
  }

  return varName + '.append(' + item + ')\n';
};

Blockly.Python['data_deleteoflist'] = function(block) {
  var index = Blockly.Python.valueToCode(block, 'INDEX',
      Blockly.Python.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  if (varName === 'unnamed') {
    return '';
  }

  return 'del ' + varName + '[' + index + ' - 1]\n';
};

Blockly.Python['data_deletealloflist'] = function(block) {
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  if (varName === 'unnamed') {
    return '';
  }

  return 'del ' + varName + '[0:]\n';
};

Blockly.Python['data_insertatlist'] = function(block) {
  var item = Blockly.Python.valueToCode(block, 'ITEM',
      Blockly.Python.ORDER_ADDITIVE) || '0';
  var index = Blockly.Python.valueToCode(block, 'INDEX',
      Blockly.Python.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  if (varName === 'unnamed') {
    return '';
  }

  return varName + '.insert(' + index + ' - 1, ' + item + ')\n';
};

Blockly.Python['data_replaceitemoflist'] = function(block) {
  var item = Blockly.Python.valueToCode(block, 'ITEM',
      Blockly.Python.ORDER_ADDITIVE) || '0';
  var index = Blockly.Python.valueToCode(block, 'INDEX',
      Blockly.Python.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  if (varName === 'unnamed') {
    return '';
  }

  return varName + '[' + index + ' - 1] = ' + item + '\n';
};

Blockly.Python['data_itemoflist'] = function(block) {
  var index = Blockly.Python.valueToCode(block, 'INDEX',
      Blockly.Python.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  return [varName + '[' + index + ' - 1]', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['data_itemnumoflist'] = function(block) {
  var item = Blockly.Python.valueToCode(block, 'ITEM',
      Blockly.Python.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  return [varName + '.index(' + item + ') + 1', Blockly.Python.ORDER_UNARY_SIGN];
};

Blockly.Python['data_lengthoflist'] = function(block) {
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  return ['len(' + varName + ')', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['data_listcontainsitem'] = function(block) {
  var item = Blockly.Python.valueToCode(block, 'ITEM',
      Blockly.Python.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('LIST'),
      Blockly.Variables.NAME_TYPE);
  return ['' + item + ' in ' + varName, Blockly.Python.ORDER_RELATIONAL];
};

Blockly.Python['data_showlist'] = function() {
  return '';
};

Blockly.Python['data_hidelist'] = function() {
  return '';
};

