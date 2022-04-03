/**
 * Visual Blocks Language
 *
 * Copyright 2020 Arthur Zheng.
 * https://github.com/zhengyangliu/scratch-blocks
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

goog.provide('Blockly.Python.microPython');

goog.require('Blockly.Python');


Blockly.Python['microPython_pin_esp32InitPinMode'] = function(block) {
  var arg0 = block.getFieldValue('PIN');
  var arg1 = block.getFieldValue('MODE') || 'IN';
  var code = '';
  if (arg1 === 'IN' || arg1 === 'OUT') {
    code = 'pin' + arg0 + ' = machine.Pin(' + arg0 + ', machine.Pin.' + arg1 + ')\n';
  } else {
    code = 'pin' + arg0 + ' = machine.Pin(' + arg0 + ', machine.Pin.IN, machine.Pin.' + arg1 + ')\n';
  }
  return code;
};

Blockly.Python['microPython_pin_menu_level'] = function(block) {
  var code = block.getFieldValue('level') || '0';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['microPython_pin_esp32SetDigitalOutput'] = function(block) {
  var pin = block.getFieldValue('PIN') || '0';
  var level = Blockly.Python.valueToCode(block, 'LEVEL', Blockly.Python.ORDER_FUNCTION_CALL) || '1';
  var code = 'pin' + pin + '.value(' + level + ')\n';
  return code;
};

Blockly.Python['microPython_pin_esp32SetPwmOutput'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var outValue = Blockly.Python.valueToCode(block, 'OUT', Blockly.Python.ORDER_FUNCTION_CALL) || '0';
  Blockly.Python.variables_['define_pwm' + pin] = 'pwm' + pin + ' = machine.PWM(machine.Pin(' + pin + '))\n';
  var code = 'pwm' + pin + '.duty(' + outValue + ')\n';
  return code;
};

Blockly.Python['microPython_pin_esp32SetPwmFrequency'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var frequency = Blockly.Python.valueToCode(block, 'FREQ', Blockly.Python.ORDER_FUNCTION_CALL) || '2000';
  Blockly.Python.variables_['define_pwm' + pin] = 'pwm' + pin + ' = machine.PWM(machine.Pin(' + pin + '))\n';
  var code = 'pwm' + pin + '.freq(' + frequency + ')\n';
  return code;
};

Blockly.Python['microPython_pin_esp32SetDACOutput'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var outValue = Blockly.Python.valueToCode(block, 'OUT', Blockly.Python.ORDER_FUNCTION_CALL) || '0';
  Blockly.Python.variables_['define_dac' + pin] = 'dac' + pin + ' = machine.DAC(machine.Pin(' + pin + '))\n';
  var code = 'dac' + pin + '.write(' + outValue + ')\n';
  return code;
};

Blockly.Python['microPython_pin_esp32ReadDigitalPin'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var code = 'pin' + pin + '.value()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['microPython_pin_esp32SetAnalogVoltage'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var voltage = block.getFieldValue('VOLTAGE');
  Blockly.Python.variables_['define_adc' + pin] = 'adc' + pin + ' = machine.ADC(machine.Pin(' + pin + '))\n';
  var code = 'adc' + pin + '.atten(machine.ADC.' + voltage + ')\n';
  return code;
};

Blockly.Python['microPython_pin_esp32ReadAnalogPin'] = function(block) {
  var pin = block.getFieldValue('PIN');
  Blockly.Python.variables_['define_adc' + pin] = 'adc' + pin + ' = machine.ADC(machine.Pin(' + pin + '))\n';
  var code = 'adc' + pin + '.read()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['microPython_pin_esp32ReadTouchPin'] = function(block) {
  var pin = block.getFieldValue('PIN');
  Blockly.Python.variables_['define_adc' + pin] = 'tc' + pin + ' = machine.TouchPad(machine.Pin(' + pin + '))\n';
  var code = 'tc' + pin + '.read()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['microPython_pin_esp32SetServoOutput'] = function(block) {
  Blockly.Python.imports_['pyb'] = 'import pyb';
  var pin = block.getFieldValue('PIN');
  var angle = Blockly.Python.valueToCode(block, 'OUT', Blockly.Python.ORDER_FUNCTION_CALL) || '0';
  Blockly.Python.variables_['define_servo' + pin] = 'servo' + pin + ' = pyb.Servo(' + pin + ')\n';
 
  var code = 'servo' + pin + '.angle' + '(' + angle + ');\n';
  return code;
};

Blockly.Python['microPython_pin_esp32AttachInterrupt'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var mode = block.getFieldValue('MODE') || '1';

  var branch = Blockly.Python.statementToCode(block, 'SUBSTACK');
  branch = Blockly.Python.addLoopTrap(branch, block.id);

  Blockly.Python.customFunctions_['definitions_ISR_' + mode + pin] =
    'def ISR_' + mode + '_' + pin + '() {\n' + branch + '}';
  var code = '';
  if (mode === '1') {
    code = 'machine.Pin(' + pin + ').irq(handler = ISR_' + mode + '_' + pin + ', trigger = machine.Pin.IRQ_RISING)\n';
  } else if (mode === '2') {
    code = 'machine.Pin(' + pin + ').irq(handler = ISR_' + mode + '_' + pin + ', trigger = machine.Pin.IRQ_FALLING)\n';
  } else if (mode === '3') {
    code = 'machine.Pin(' + pin + ').irq(handler = ISR_' + mode + '_' + pin +
      ', trigger = (machine.Pin.IRQ_RISING or machine.Pin.IRQ_FALLING))\n';
  }
  return code;
};

// Blockly.Python['microPython_pin_detachInterrupt'] = function(block) {
//   var arg0 = block.getFieldValue('PIN') || '2';

//   var code = 'detachInterrupt(digitalPinToInterrupt(' + arg0 + '));\n';
//   return code;
// };

Blockly.Python['microPython_serial_esp32SerialBegin'] = function(block) {
  var no = block.getFieldValue('NO') || '1';
  var baud = block.getFieldValue('VALUE') || '115200';
  var code = 'uart' + no + ' = machine.UART(' + no + ', ' + baud + ')\n';
  return code;
};

Blockly.Python['microPython_serial_esp32SerialPrint'] = function(block) {
  var no = block.getFieldValue('NO') || '1';
  var str = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var eol = block.getFieldValue('EOL') || 'warp';
  var code = '';
  if (eol === 'warp') {
    code = 'uart' + no + '.write(str(' + str + ') + \'\\r\\n\')\n';
  } else {
    code = 'uart' + no + '.write(str(' + str + '))\n';
  }
  return code;
};

Blockly.Python['microPython_serial_esp32SerialAvailable'] = function(block) {
  var no = block.getFieldValue('NO') || '1';
  var code = 'uart' + no + '.any()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['microPython_serial_esp32SerialReadString'] = function(block) {
  var no = block.getFieldValue('NO') || '1';
  var code = 'uart' + no + '.read()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['microPython_serial_esp32SerialReadARow'] = function(block) {
  var no = block.getFieldValue('NO') || '1';
  var code = 'uart' + no + '.readline()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

