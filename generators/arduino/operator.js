/**
 * Visual Blocks Language
 *
 * Copyright 2020 Arthur Zheng.
 * https://github.com/zhengyangliu/scratch-blocks
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

goog.provide('Blockly.Arduino.operator');

goog.require('Blockly.Arduino');


Blockly.Arduino['operator_arithmetic'] = function (block) {
  var oplist = {
    operator_add: [' + ', Blockly.Arduino.ORDER_ADDITIVE],
    operator_subtract: [' - ', Blockly.Arduino.ORDER_ADDITIVE],
    operator_multiply: [' * ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
    operator_divide: [' / ', Blockly.Arduino.ORDER_MULTIPLICATIVE]
  };
  var tuple = oplist[block.type];
  var op = tuple[0];
  var order = tuple[1];
  // Numeric value.
  var argument0 = Blockly.Arduino.valueToCode(block, 'NUM1', order) || '0';
  var argument1 = Blockly.Arduino.valueToCode(block, 'NUM2', order) || '0';
  var code = argument0 + op + argument1;
  return [code, order];
};

Blockly.Arduino['operator_add'] = Blockly.Arduino['operator_arithmetic'];
Blockly.Arduino['operator_subtract'] = Blockly.Arduino['operator_arithmetic'];
Blockly.Arduino['operator_multiply'] = Blockly.Arduino['operator_arithmetic'];
Blockly.Arduino['operator_divide'] = Blockly.Arduino['operator_arithmetic'];

Blockly.Arduino['operator_random'] = function (block) {
  var arg0 = Blockly.Arduino.valueToCode(block, 'FROM', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var arg1 = Blockly.Arduino.valueToCode(block, 'TO', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var code = "random(" + arg0 + ", " + arg1 + ")";
  return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['operator_compare'] = function (block) {
  var oplist = {
    "operator_gt": " > ",
    "operator_equals": " == ",
    "operator_lt": " < "
  };
  var order = (block.type == "operator_equals") ?
    Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
  var arg0 = Blockly.Arduino.valueToCode(block, 'OPERAND1', order);
  var arg1 = Blockly.Arduino.valueToCode(block, 'OPERAND2', order);

  // Arg is a empty string
  if (arg0 === "\"\"") {
    arg0 = '0';
  }
  if (arg0 === "\"\"") {
    arg0 = '0';
  }
  // Arg is a number
  if (parseFloat(arg0.slice(1, -1)) == arg0.slice(1, -1)) {
    arg0 = parseFloat(arg0.slice(1, -1)).toString();
  }
  if (parseFloat(arg1.slice(1, -1)) == arg1.slice(1, -1)) {
    arg1 = parseFloat(arg1.slice(1, -1)).toString();
  }

  var op = oplist[block.type];
  var code = arg0 + op + arg1;
  return [code, order];
};

Blockly.Arduino['operator_gt'] = Blockly.Arduino['operator_compare'];
Blockly.Arduino['operator_equals'] = Blockly.Arduino['operator_compare'];
Blockly.Arduino['operator_lt'] = Blockly.Arduino['operator_compare'];

Blockly.Arduino['operator_operation'] = function (block) {
  var oplist = {
    "operator_and": " && ",
    "operator_or": " || "
  };
  var order = (block.type == "operator_and") ? Blockly.Arduino.ORDER_LOGICAL_AND :
      Blockly.Arduino.ORDER_LOGICAL_OR;
  var arg0 = Blockly.Arduino.valueToCode(block, 'OPERAND1', order) || '0';
  var arg1 = Blockly.Arduino.valueToCode(block, 'OPERAND2', order) || '0';
  var op = oplist[block.type];
  var code = arg0 + op + arg1;
  return [code, order];
};

Blockly.Arduino['operator_and'] = Blockly.Arduino['operator_operation'];
Blockly.Arduino['operator_or'] = Blockly.Arduino['operator_operation'];

Blockly.Arduino['operator_not'] = function(block) {
  // Negation.
  var order = Blockly.Arduino.ORDER_UNARY_PREFIX;
  var arg0 = Blockly.Arduino.valueToCode(block, 'OPERAND', order) || 'false';
  var code = '!' + arg0;
  return [code, order];
};

Blockly.Arduino['operator_mod'] = function (block) {
  var order = Blockly.Arduino.ORDER_MULTIPLICATIVE;
  var arg0 = Blockly.Arduino.valueToCode(block, 'NUM1', order) || '0';
  var arg1 = Blockly.Arduino.valueToCode(block, 'NUM2', order) || '0';
  var code = arg0 + ' % ' + arg1;
  return [code, order];
};

Blockly.Arduino['operator_round'] = function (block) {
  var order = Blockly.Arduino.ORDER_UNARY_POSTFIX;
  var arg0 = Blockly.Arduino.valueToCode(block, 'NUM', order) || '0';
  var code = 'round(' + arg0 + ')';
  return [code, order];
};

// todo 14个数学函数运算，
