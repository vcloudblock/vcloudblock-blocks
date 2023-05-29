// Do not edit this file; automatically generated by build.py.
'use strict';

let Blockly = require('openblock-blocks');

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.checkStringArgs=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("String.prototype.repeat",function(a){return a?a:function(a){var b=$jscomp.checkStringArgs(this,null,"repeat");if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=b),a>>>=1)b+=b;return d}},"es6","es3");Blockly.Python=new Blockly.Generator("Python");Blockly.Python.addReservedWords("and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,not,or,pass,print,raise,return,try,while,with,yield,True,False,None,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,abs,divmod,input,open,staticmethod,all,enumerate,int,ord,str,any,eval,isinstance,pow,sum,basestring,execfile,issubclass,print,super,bin,file,iter,property,tuple,bool,filter,len,range,type,bytearray,float,list,raw_input,unichr,callable,format,locals,reduce,unicode,chr,frozenset,long,reload,vars,classmethod,getattr,map,repr,xrange,cmp,globals,max,reversed,zip,compile,hasattr,memoryview,round,__import__,complex,hash,min,set,apply,delattr,help,next,setattr,buffer,dict,hex,object,slice,coerce,dir,id,oct,sorted,intern,count");
Blockly.Python.ORDER_ATOMIC=0;Blockly.Python.ORDER_COLLECTION=1;Blockly.Python.ORDER_STRING_CONVERSION=1;Blockly.Python.ORDER_MEMBER=2.1;Blockly.Python.ORDER_FUNCTION_CALL=2.2;Blockly.Python.ORDER_EXPONENTIATION=3;Blockly.Python.ORDER_UNARY_SIGN=4;Blockly.Python.ORDER_BITWISE_NOT=4;Blockly.Python.ORDER_MULTIPLICATIVE=5;Blockly.Python.ORDER_ADDITIVE=6;Blockly.Python.ORDER_BITWISE_SHIFT=7;Blockly.Python.ORDER_BITWISE_AND=8;Blockly.Python.ORDER_BITWISE_XOR=9;Blockly.Python.ORDER_BITWISE_OR=10;
Blockly.Python.ORDER_RELATIONAL=11;Blockly.Python.ORDER_LOGICAL_NOT=12;Blockly.Python.ORDER_LOGICAL_AND=13;Blockly.Python.ORDER_LOGICAL_OR=14;Blockly.Python.ORDER_CONDITIONAL=15;Blockly.Python.ORDER_LAMBDA=16;Blockly.Python.ORDER_NONE=99;Blockly.Python.INDENT="  ";Blockly.Python.firstLoop=!0;
Blockly.Python.init=function(a){Blockly.Python.imports_=Object.create(null);Blockly.Python.customFunctions_=Object.create(null);Blockly.Python.customFunctionsArgName_=Object.create(null);Blockly.Python.libraries_=Object.create(null);Blockly.Python.variables_=Object.create(null);Blockly.Python.setups_=Object.create(null);Blockly.Python.loops_=Object.create(null);Blockly.Python.variableDB_?Blockly.Python.variableDB_.reset():Blockly.Python.variableDB_=new Blockly.Names(Blockly.Python.RESERVED_WORDS_);
Blockly.Python.variableDB_.setVariableMap(a.getVariableMap());a=Blockly.Variables.allVariables(a);for(var b=0;b<a.length;b++)Blockly.Python.variables_[b]=a[b].type===Blockly.LIST_VARIABLE_TYPE?Blockly.Python.variableDB_.getName(a[b].name,Blockly.Variables.NAME_TYPE)+" = []":Blockly.Python.variableDB_.getName(a[b].name,Blockly.Variables.NAME_TYPE)+" = 0"};
Blockly.Python.finish=function(a){var b=[];for(f in Blockly.Python.imports_)b.push(Blockly.Python.imports_[f]);var c=[];for(f in Blockly.Python.customFunctions_)c.push(Blockly.Python.customFunctions_[f]);var d=[];for(f in Blockly.Python.libraries_)d.push(Blockly.Python.libraries_[f]);var e=[];for(f in Blockly.Python.variables_)e.push(Blockly.Python.variables_[f]);var g=[];for(f in Blockly.Python.setups_)g.push(Blockly.Python.setups_[f]);var h=[];for(f in Blockly.Python.loops_)h.push(Blockly.Python.loops_[f]);
var f="# generated by OpenBlock\n";0!==b.length&&(f+=b.join("\n")+"\n\n");0!==c.length&&(f+=c.join("\n")+"\n");0!==d.length&&(f+=d.join("\n")+"\n\n");0!==h.length&&(f+="def repeat():\n"+Blockly.Python.INDENT,f+=h.join("\n"+Blockly.Python.INDENT)+"\n\n");0!==e.length&&(f+=e.join("\n")+"\n\n");0!==g.length&&(f+=g.join("\n")+"\n\n");f+=a+"\n";if(0!==h.length)Blockly.Python.firstLoop&&(f+="while True:\n"+Blockly.Python.INDENT+"repeat()\n\n",f=f.replace(/\npass\n/g,""));else{a=f.match(/:\n *repeat\(\)\n/g);
for(var k in a)b=a[k].match(/\s+/g)[0].length,f=f.replace(/:\n *repeat\(\)\n/,":\n"+" ".repeat(b)+"pass\n");f=f.replace(/ *repeat\(\)\n/g,"")}delete Blockly.Python.imports_;delete Blockly.Python.libraries_;delete Blockly.Python.variables_;delete Blockly.Python.setups_;delete Blockly.Python.loops_;delete Blockly.Python.customFunctions_;delete Blockly.Python.customFunctionsArgName_;Blockly.Python.variableDB_.reset();Blockly.Python.firstLoop=!0;return f};
Blockly.Python.scrub_=function(a,b){if(null===b||!Blockly.Python.check_(a))return"";var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.Python.prefixLines(d,"# ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Python.allNestedComments(d))&&(c+=Blockly.Python.prefixLines(d,"# "))}e=b;null===a.getSurroundParent()&&""!==b&&null!==a.previousConnection&&
"event_whenmicrobitbegin"!==a.getTopStackBlock().type&&("procedures_definition"!==a.type&&"procedures_prototype"!==a.type&&(e=Blockly.Arduino.INDENT+e,""!==c&&(c=Blockly.Arduino.INDENT+c)),e=e.replace(/\n/g,"\n"+Blockly.Arduino.INDENT),e=e.slice(0,e.length-2));a=a.nextConnection&&a.nextConnection.targetBlock();a=Blockly.Python.blockToCode(a);return c+e+a};Blockly.Python.scrubNakedValue=function(a){return a+";\n"};
Blockly.Python.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/%/g,"\\%").replace(/'/g,"\\'");return"'"+a+"'"};Blockly.Python.check_=function(a){return null===a.getSurroundParent()&&(null!==a.previousConnection&&null!==a.getTopStackBlock().previousConnection||2===a.getOutputShape()||1===a.getOutputShape())?!1:!0};Blockly.Python.matrix={};Blockly.Python.matrix=function(a){a=a.getFieldValue("MATRIX");isNaN(a)&&(a=0);return[a,Blockly.Python.ORDER_ATOMIC]};Blockly.Python.colour={};Blockly.Python.colour_picker=function(a){return[a.getFieldValue("COLOUR"),Blockly.Python.ORDER_ATOMIC]};Blockly.Python.operator={};Blockly.Python.operator_arithmetic=function(a){var b={operator_add:[" + ",Blockly.Python.ORDER_ADDITIVE],operator_subtract:[" - ",Blockly.Python.ORDER_ADDITIVE],operator_multiply:[" * ",Blockly.Python.ORDER_MULTIPLICATIVE],operator_divide:[" / ",Blockly.Python.ORDER_MULTIPLICATIVE]}[a.type],c=b[0];b=b[1];var d=Blockly.Python.valueToCode(a,"NUM1",b)||"0";a=Blockly.Python.valueToCode(a,"NUM2",b)||"0";return[d+c+a,b]};Blockly.Python.operator_add=Blockly.Python.operator_arithmetic;
Blockly.Python.operator_subtract=Blockly.Python.operator_arithmetic;Blockly.Python.operator_multiply=Blockly.Python.operator_arithmetic;Blockly.Python.operator_divide=Blockly.Python.operator_arithmetic;Blockly.Python.operator_random=function(a){var b=Blockly.Python.valueToCode(a,"FROM",Blockly.Python.ORDER_FUNCTION_CALL)||"0";a=Blockly.Python.valueToCode(a,"TO",Blockly.Python.ORDER_FUNCTION_CALL)||"0";return["random.randint("+b+", "+a+")",Blockly.Python.ORDER_FUNCTION_CALL]};
Blockly.Python.operator_compare=function(a){var b=Blockly.Python.ORDER_RELATIONAL,c=Blockly.Python.valueToCode(a,"OPERAND1",b),d=Blockly.Python.valueToCode(a,"OPERAND2",b);parseFloat(c.slice(1,-1))==c.slice(1,-1)?c=parseFloat(c.slice(1,-1)).toString():"''"===c&&(c="0");parseFloat(d.slice(1,-1))==d.slice(1,-1)?d=parseFloat(d.slice(1,-1)).toString():"''"===d&&(d="0");return[c+{operator_gt:" > ",operator_equals:" == ",operator_lt:" < "}[a.type]+d,b]};Blockly.Python.operator_gt=Blockly.Python.operator_compare;
Blockly.Python.operator_equals=Blockly.Python.operator_compare;Blockly.Python.operator_lt=Blockly.Python.operator_compare;Blockly.Python.operator_operation=function(a){var b="operator_and"==a.type?Blockly.Python.ORDER_LOGICAL_AND:Blockly.Python.ORDER_LOGICAL_OR,c=Blockly.Python.valueToCode(a,"OPERAND1",b)||"0",d=Blockly.Python.valueToCode(a,"OPERAND2",b)||"0";return[c+{operator_and:" and ",operator_or:" or "}[a.type]+d,b]};Blockly.Python.operator_and=Blockly.Python.operator_operation;
Blockly.Python.operator_or=Blockly.Python.operator_operation;Blockly.Python.operator_not=function(a){var b=Blockly.Python.ORDER_LOGICAL_NOT;return["not "+(Blockly.Python.valueToCode(a,"OPERAND",b)||"false"),b]};Blockly.Python.operator_join=function(a){var b=Blockly.Python.ORDER_UNARY_PREFIX,c=Blockly.Python.valueToCode(a,"STRING1",b)||"''";a=Blockly.Python.valueToCode(a,"STRING2",b)||"''";return["str("+c+") + str("+a+")",Blockly.Python.ORDER_ADDITIVE]};
Blockly.Python.operator_letter_of=function(a){var b=Blockly.Python.valueToCode(a,"STRING",Blockly.Python.ORDER_UNARY_SIGN)||"''";a=Blockly.Python.valueToCode(a,"LETTER",Blockly.Python.ORDER_MEMBER)||"0";a=parseFloat(a)==a?a-1:a+" - 1";return[b+"["+a+"]",Blockly.Python.ORDER_MEMBER]};Blockly.Python.operator_length=function(a){return["len("+(Blockly.Python.valueToCode(a,"STRING",Blockly.Python.ORDER_FUNCTION_CALL)||"''")+")",Blockly.Python.ORDER_FUNCTION_CALL]};
Blockly.Python.operator_contains=function(a){var b=Blockly.Python.ORDER_FUNCTION_CALL,c=Blockly.Python.valueToCode(a,"STRING1",b)||"''";a=Blockly.Python.valueToCode(a,"STRING2",b)||"0";return["str("+c+").find(str("+a+")) > -1",Blockly.Python.ORDER_RELATIONAL]};Blockly.Python.operator_mod=function(a){var b=Blockly.Python.ORDER_MULTIPLICATIVE,c=Blockly.Python.valueToCode(a,"NUM1",b)||"0";a=Blockly.Python.valueToCode(a,"NUM2",b)||"0";return[c+" % "+a,b]};
Blockly.Python.operator_round=function(a){return["round("+(Blockly.Python.valueToCode(a,"NUM",Blockly.Python.ORDER_UNARY_POSTFIX)||"0")+")",Blockly.Python.ORDER_FUNCTION_CALL]};
Blockly.Python.operator_mathop=function(a){var b=a.getFieldValue("OPERATOR");a=Blockly.Python.valueToCode(a,"NUM",Blockly.Python.ORDER_FUNCTION_CALL)||"0";Blockly.Python.imports_.math="import math";var c="",d=Blockly.Python.ORDER_FUNCTION_CALL;switch(b){case "abs":c="math.fabs("+a+")";break;case "floor":c="math.floor("+a+")";break;case "ceiling":c="math.ceil("+a+")";break;case "sqrt":c="math.sqrt("+a+")";break;case "sin":c="math.sin("+a+" / 180.0 * math.pi)";break;case "cos":c="math.cos("+a+" / 180.0 * math.pi)";
break;case "tan":c="math.tan("+a+" / 180.0 * math.pi)";break;case "asin":c="math.asin("+a+") / math.pi * 180";d=Blockly.Python.ORDER_MULTIPLICATIVE;break;case "acos":c="math.acosh("+a+") / math.pi * 180";d=Blockly.Python.ORDER_MULTIPLICATIVE;break;case "atan":c="math.atan("+a+") / math.pi * 180";d=Blockly.Python.ORDER_MULTIPLICATIVE;break;case "ln":c="math.log("+a+")";break;case "log":c="math.log("+a+", 10)";break;case "e ^":c="math.exp("+a+")";break;case "10 ^":c="math.pow(10, "+a+")"}return[c,d]};Blockly.Python.data={};Blockly.Python.data_variable=function(a){return[Blockly.Python.variableDB_.getName(a.getFieldValue("VARIABLE"),Blockly.Variables.NAME_TYPE),Blockly.Python.ORDER_ATOMIC]};
Blockly.Python.data_setvariableto=function(a){var b=Blockly.Python.valueToCode(a,"VALUE",Blockly.Python.ORDER_ADDITIVE)||"0";a=Blockly.Python.variableDB_.getName(a.getFieldValue("VARIABLE"),Blockly.Variables.NAME_TYPE);if("unnamed"===a)return"";parseFloat(b.slice(1,-1))==b.slice(1,-1)&&(b=parseFloat(b.slice(1,-1)).toString());return a+" = "+b+"\n"};
Blockly.Python.data_changevariableby=function(a){var b=Blockly.Python.valueToCode(a,"VALUE",Blockly.Python.ORDER_ADDITIVE)||"0";a=Blockly.Python.variableDB_.getName(a.getFieldValue("VARIABLE"),Blockly.Variables.NAME_TYPE);return"unnamed"===a?"":a+" += "+b+"\n"};Blockly.Python.data_showvariable=function(){return""};Blockly.Python.data_hidevariable=function(){return""};
Blockly.Python.data_listcontents=function(a){return[Blockly.Python.variableDB_.getName(a.getFieldValue("LIST"),Blockly.Variables.NAME_TYPE),Blockly.Python.ORDER_ATOMIC]};Blockly.Python.data_addtolist=function(a){var b=Blockly.Python.valueToCode(a,"ITEM",Blockly.Python.ORDER_ADDITIVE)||"0";a=Blockly.Python.variableDB_.getName(a.getFieldValue("LIST"),Blockly.Variables.NAME_TYPE);return"unnamed"===a?"":a+".append("+b+")\n"};
Blockly.Python.data_deleteoflist=function(a){var b=Blockly.Python.valueToCode(a,"INDEX",Blockly.Python.ORDER_ADDITIVE)||"0";a=Blockly.Python.variableDB_.getName(a.getFieldValue("LIST"),Blockly.Variables.NAME_TYPE);return"unnamed"===a?"":"del "+a+"["+b+" - 1]\n"};Blockly.Python.data_deletealloflist=function(a){a=Blockly.Python.variableDB_.getName(a.getFieldValue("LIST"),Blockly.Variables.NAME_TYPE);return"unnamed"===a?"":"del "+a+"[0:]\n"};
Blockly.Python.data_insertatlist=function(a){var b=Blockly.Python.valueToCode(a,"ITEM",Blockly.Python.ORDER_ADDITIVE)||"0",c=Blockly.Python.valueToCode(a,"INDEX",Blockly.Python.ORDER_ADDITIVE)||"0";a=Blockly.Python.variableDB_.getName(a.getFieldValue("LIST"),Blockly.Variables.NAME_TYPE);return"unnamed"===a?"":a+".insert("+c+" - 1, "+b+")\n"};
Blockly.Python.data_replaceitemoflist=function(a){var b=Blockly.Python.valueToCode(a,"ITEM",Blockly.Python.ORDER_ADDITIVE)||"0",c=Blockly.Python.valueToCode(a,"INDEX",Blockly.Python.ORDER_ADDITIVE)||"0";a=Blockly.Python.variableDB_.getName(a.getFieldValue("LIST"),Blockly.Variables.NAME_TYPE);return"unnamed"===a?"":a+"["+c+" - 1] = "+b+"\n"};
Blockly.Python.data_itemoflist=function(a){var b=Blockly.Python.valueToCode(a,"INDEX",Blockly.Python.ORDER_ADDITIVE)||"0";return[Blockly.Python.variableDB_.getName(a.getFieldValue("LIST"),Blockly.Variables.NAME_TYPE)+"["+b+" - 1]",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.data_itemnumoflist=function(a){var b=Blockly.Python.valueToCode(a,"ITEM",Blockly.Python.ORDER_ADDITIVE)||"0";return[Blockly.Python.variableDB_.getName(a.getFieldValue("LIST"),Blockly.Variables.NAME_TYPE)+".index("+b+") + 1",Blockly.Python.ORDER_UNARY_SIGN]};
Blockly.Python.data_lengthoflist=function(a){return["len("+Blockly.Python.variableDB_.getName(a.getFieldValue("LIST"),Blockly.Variables.NAME_TYPE)+")",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.data_listcontainsitem=function(a){var b=Blockly.Python.valueToCode(a,"ITEM",Blockly.Python.ORDER_ADDITIVE)||"0";a=Blockly.Python.variableDB_.getName(a.getFieldValue("LIST"),Blockly.Variables.NAME_TYPE);return[""+b+" in "+a,Blockly.Python.ORDER_RELATIONAL]};Blockly.Python.data_showlist=function(){return""};
Blockly.Python.data_hidelist=function(){return""};Blockly.Python.control={};Blockly.Python.control_wait=function(a){return"sleep("+Blockly.Python.valueToCode(a,"DURATION",Blockly.Python.ORDER_FUNCTION_CALL)+" * 1000)\n"};Blockly.Python.control_repeat=function(a){var b=Blockly.Python.valueToCode(a,"TIMES",Blockly.Python.ORDER_FUNCTION_CALL),c=Blockly.Python.statementToCode(a,"SUBSTACK");c=Blockly.Python.addLoopTrap(c,a.id);a="for count in range("+b+"):\n";return a=c?a+c:a+(Blockly.Python.INDENT+"pass\n")};
Blockly.Python.control_forever=function(a){var b=Blockly.Python.statementToCode(a,"SUBSTACK");b=Blockly.Python.addLoopTrap(b,a.id);b="while True:\n"+b;"event_whenmicrobitbegin"===a.getRootBlock().type&&(Blockly.Python.firstLoop=!1,b+=Blockly.Python.INDENT+"repeat()\n");return b};
Blockly.Python.control_if=function(a){var b=Blockly.Python.valueToCode(a,"CONDITION",Blockly.Python.ORDER_NONE)||"False",c=Blockly.Python.statementToCode(a,"SUBSTACK");c=Blockly.Python.addLoopTrap(c,a.id);a="if "+b+":\n";return a=c?a+c:a+(Blockly.Python.INDENT+"pass\n")};
Blockly.Python.control_if_else=function(a){var b=Blockly.Python.valueToCode(a,"CONDITION",Blockly.Python.ORDER_NONE)||"False",c=Blockly.Python.statementToCode(a,"SUBSTACK");c=Blockly.Python.addLoopTrap(c,a.id);var d=Blockly.Python.statementToCode(a,"SUBSTACK2");d=Blockly.Python.addLoopTrap(d,a.id);a="if "+b+":\n";a=c?a+c:a+(Blockly.Python.INDENT+"pass\n");a+="else:\n";return a=d?a+d:a+(Blockly.Python.INDENT+"pass\n")};
Blockly.Python.control_wait_until=function(a){var b="while not "+(Blockly.Python.valueToCode(a,"CONDITION",Blockly.Python.ORDER_UNARY_POSTFIX)||"False")+":\n";"event_whenmicrobitbegin"===a.getRootBlock().type&&(b+=Blockly.Python.INDENT+"repeat()\n");return b};
Blockly.Python.control_repeat_until=function(a){var b=Blockly.Python.valueToCode(a,"CONDITION",Blockly.Python.ORDER_UNARY_POSTFIX)||"False",c=Blockly.Python.statementToCode(a,"SUBSTACK");c=Blockly.Python.addLoopTrap(c,a.id);b="while not "+b+":\n"+c;"event_whenmicrobitbegin"===a.getRootBlock().type&&(b+=Blockly.Python.INDENT+"repeat()\n");return b};Blockly.Python.math={};Blockly.Python.math_number=function(a){a=parseFloat(a.getFieldValue("NUM"));isNaN(a)&&(a=0);return[a,0>a?Blockly.Python.ORDER_UNARY_SIGN:Blockly.Python.ORDER_ATOMIC]};Blockly.Python.math_integer=Blockly.Python.math_number;Blockly.Python.math_whole_number=Blockly.Python.math_number;Blockly.Python.math_positive_number=Blockly.Python.math_number;Blockly.Python.math_angle=Blockly.Python.math_number;Blockly.Python.math_int8_number=Blockly.Python.math_number;
Blockly.Python.math_uint8_number=Blockly.Python.math_number;Blockly.Python.math_int9_number=Blockly.Python.math_number;Blockly.Python.math_uint10_number=Blockly.Python.math_number;Blockly.Python.math_int11_number=Blockly.Python.math_number;Blockly.Python.math_0to100_number=Blockly.Python.math_number;Blockly.Python.math_half_angle=Blockly.Python.math_number;Blockly.Python.event={};Blockly.Python.event_whenmicrobitbegin=function(a){Blockly.Python.imports_.microbit="from microbit import *";var b="";a.nextConnection&&a.nextConnection.targetBlock()||(b+="pass\n");return b};
Blockly.Python.event_whenmicrobitbuttonpressed=function(a){Blockly.Python.imports_.microbit="from microbit import *";for(var b=a.getFieldValue("KEY_OPTION"),c="";Blockly.Python.loops_["event_whenmicrobitbegin"+b+c];)""===c?c=1:c++;Blockly.Python.loops_["event_whenmicrobitbegin"+b+c]="if button_"+b+".is_pressed():\n"+Blockly.Python.INDENT+Blockly.Python.INDENT+"on_button_"+b+c+"()";var d="def on_button_"+b+c+"():\n";if(a.nextConnection&&a.nextConnection.targetBlock()){var e=[],g;for(g in Blockly.Python.variables_)e.push(Blockly.Python.variables_[g].slice(0,
Blockly.Python.variables_[g].indexOf("=")-1));0!==e.length&&(d+=Blockly.Python.INDENT+"global "+e.join(", ")+"\n");d=Blockly.Python.scrub_(a,d)}else d+=Blockly.Python.INDENT+"pass\n";Blockly.Python.libraries_["def on_button_"+b+c]=d;return null};
Blockly.Python.event_whenmicrobitpinbeingtouched=function(a){Blockly.Python.imports_.microbit="from microbit import *";for(var b=a.getFieldValue("PIN_OPTION"),c="";Blockly.Python.loops_["event_whenmicrobitpinbeingtouched"+b+c];)""===c?c=1:c++;Blockly.Python.loops_["event_whenmicrobitpinbeingtouched"+b+c]="if pin"+b+".is_pressed():\n"+Blockly.Python.INDENT+Blockly.Python.INDENT+"on_pin"+b+c+"()";var d="def on_pin"+b+c+"():\n";if(a.nextConnection&&a.nextConnection.targetBlock()){var e=[],g;for(g in Blockly.Python.variables_)e.push(Blockly.Python.variables_[g].slice(0,
Blockly.Python.variables_[g].indexOf("=")-1));0!==e.length&&(d+=Blockly.Python.INDENT+"global "+e.join(", ")+"\n");d=Blockly.Python.scrub_(a,d)}else d+=Blockly.Python.INDENT+"pass\n";Blockly.Python.libraries_["def on_pin"+b+c]=d;return null};
Blockly.Python.event_whenmicrobitgesture=function(a){Blockly.Python.imports_.microbit="from microbit import *";for(var b=a.getFieldValue("GESTURE_OPTION"),c="";Blockly.Python.loops_["event_whenmicrobitgesture"+b+c];)""===c?c=1:c++;Blockly.Python.loops_["event_whenmicrobitgesture"+b+c]="if accelerometer.was_gesture('"+b+"'):\n"+Blockly.Python.INDENT+Blockly.Python.INDENT+"on_"+b+c+"()";var d="def on_"+b+c+"():\n";if(a.nextConnection&&a.nextConnection.targetBlock()){var e=[],g;for(g in Blockly.Python.variables_)e.push(Blockly.Python.variables_[g].slice(0,
Blockly.Python.variables_[g].indexOf("=")-1));0!==e.length&&(d+=Blockly.Python.INDENT+"global "+e.join(", ")+"\n");d=Blockly.Python.scrub_(a,d)}else d+=Blockly.Python.INDENT+"pass\n";Blockly.Python.libraries_["def on_"+b+c]=d;return null};Blockly.Python.procedures={};
Blockly.Python.procedures_definition=function(a){var b=Blockly.Python.statementToCode(a,"custom_block");b=b.slice(2);var c=b+":\n";if(a.nextConnection&&a.nextConnection.targetBlock()){var d=[],e;for(e in Blockly.Python.variables_)d.push(Blockly.Python.variables_[e].slice(0,Blockly.Python.variables_[e].indexOf("=")-1));0!==d.length&&(c+=Blockly.Python.INDENT+"global "+d.join(", ")+"\n");c=Blockly.Python.scrub_(a,c)}else c+=Blockly.Python.INDENT+"pass\n";Blockly.Python.customFunctions_[b]=c;return null};
Blockly.Python.procedures_call=function(a){var b=a.getProcCode();b=b.replace(/ /g,"_");b=b.replace(/%n/g,"N");b=b.replace(/%s/g,"S");b=b.replace(/%b/g,"B");b=Blockly.Python.variableDB_.getName(b,Blockly.Procedures.NAME_TYPE);for(var c=[],d=0;d<a.inputList.length;d++)if(a.inputList[d].type==Blockly.INPUT_VALUE)if(a.inputList[d].connection.targetBlock()){var e=a.inputList[d].connection.targetBlock();e=Blockly.Python.blockToCode(e);c.push(e[0])}else c.push("false");return b+"("+c.join(", ")+");\n"};
Blockly.Python.procedures_prototype=function(a){var b=a.getProcCode();a=a.displayNames_;var c=[];b=b.replace(/ /g,"_");for(var d=0;d<a.length;d++){var e=b.charAt(b.search(/%[nsb]/g)+1),g=Blockly.Python.variableDB_.getName(a[d],Blockly.Procedures.NAME_TYPE);Blockly.Python.customFunctionsArgName_[a[d]]=g;b="n"===e?b.replace("%n","N"):"s"===e?b.replace("%s","S"):b.replace("%b","B");c.push(g)}b=Blockly.Python.variableDB_.getName(b,Blockly.Procedures.NAME_TYPE);return"def "+b+"("+c.join(", ")+")"};
Blockly.Python.argument_reporter_boolean=function(a){a=a.getFieldValue("VALUE");return[Blockly.Python.customFunctionsArgName_[a],Blockly.Python.ORDER_ATOMIC]};Blockly.Python.argument_reporter_number=function(a){a=a.getFieldValue("VALUE");return[Blockly.Python.customFunctionsArgName_[a],Blockly.Python.ORDER_ATOMIC]};Blockly.Python.argument_reporter_string=function(a){a=a.getFieldValue("VALUE");return[Blockly.Python.customFunctionsArgName_[a],Blockly.Python.ORDER_ATOMIC]};Blockly.Python.microbit={};Blockly.Python.microbit_pin_setDigitalOutput=function(a){var b=a.getFieldValue("PIN");a=Blockly.Python.valueToCode(a,"LEVEL",Blockly.Python.ORDER_FUNCTION_CALL)||"LOW";return"pin"+b+".write_digital("+a+")\n"};Blockly.Python.microbit_pin_menu_level=function(a){return[a.getFieldValue("level")||"0",Blockly.Python.ORDER_ATOMIC]};
Blockly.Python.microbit_pin_setPwmOutput=function(a){var b=a.getFieldValue("PIN");a=Blockly.Python.valueToCode(a,"OUT",Blockly.Python.ORDER_FUNCTION_CALL)||"0";return"pin"+b+".write_analog("+a+")\n"};Blockly.Python.microbit_pin_readDigitalPin=function(a){return["pin"+(a.getFieldValue("PIN")||"0")+".read_digital()",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.microbit_pin_readAnalogPin=function(a){return["pin"+(a.getFieldValue("PIN")||"0")+".read_analog()",Blockly.Python.ORDER_ATOMIC]};
Blockly.Python.microbit_pin_pinTouched=function(a){return["pin"+(a.getFieldValue("PIN")||"0")+".is_touched()",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.microbit_display_showImage=function(a){a=Blockly.Python.valueToCode(a,"VALUE",Blockly.Python.ORDER_ATOMIC)||"0";a=a.replace(/1/g,"9");a=a.slice(0,5)+":"+a.slice(5,10)+":"+a.slice(10,15)+":"+a.slice(15,20)+":"+a.slice(20,25);return"display.show(Image('"+a+"'))\n"};
Blockly.Python.microbit_display_showImageUntil=function(a){var b=Blockly.Python.valueToCode(a,"VALUE",Blockly.Python.ORDER_ATOMIC)||"0";a=Blockly.Python.valueToCode(a,"TIME",Blockly.Python.ORDER_ATOMIC)||"0";b=b.replace(/1/g,"9");b=b.slice(0,5)+":"+b.slice(5,10)+":"+b.slice(10,15)+":"+b.slice(15,20)+":"+b.slice(20,25);return"display.show(Image('"+b+"'))\nsleep(float("+a+") * 1000)\ndisplay.clear()\n"};
Blockly.Python.microbit_display_show=function(a){return"display.scroll(str("+(Blockly.Python.valueToCode(a,"TEXT",Blockly.Python.ORDER_FUNCTION_CALL)||"")+"), wait=False, loop=False)\n"};Blockly.Python.microbit_display_showUntilScrollDone=function(a){return"display.scroll(str("+(Blockly.Python.valueToCode(a,"TEXT",Blockly.Python.ORDER_FUNCTION_CALL)||"")+"), wait=True, loop=False)\n"};Blockly.Python.microbit_display_clearDisplay=function(){return"display.clear()\n"};
Blockly.Python.microbit_display_lightPixelAt=function(a){var b=a.getFieldValue("STATE"),c=Blockly.Python.valueToCode(a,"X",Blockly.Python.ORDER_FUNCTION_CALL)||"";a=Blockly.Python.valueToCode(a,"Y",Blockly.Python.ORDER_FUNCTION_CALL)||"";return"display.set_pixel(int("+c+"), int("+a+"), "+("off"===b?0:9)+")\n"};
Blockly.Python.microbit_display_showOnPiexlbrightness=function(a){var b=Blockly.Python.valueToCode(a,"BRT",Blockly.Python.ORDER_FUNCTION_CALL)||"9",c=Blockly.Python.valueToCode(a,"X",Blockly.Python.ORDER_FUNCTION_CALL)||"";a=Blockly.Python.valueToCode(a,"Y",Blockly.Python.ORDER_FUNCTION_CALL)||"";return"display.set_pixel(int("+c+"), int("+a+"), "+b+")\n"};Blockly.Python.microbit_display_menu_ledBrightness=function(a){return[a.getFieldValue("ledBrightness")||"9",Blockly.Python.ORDER_ATOMIC]};
Blockly.Python.microbit_sensor_buttonIsPressed=function(a){return["button_"+a.getFieldValue("KEY")+".is_pressed()",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.microbit_sensor_gestureIsX=function(a){return["accelerometer.is_gesture('"+a.getFieldValue("STA")+"')",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.microbit_sensor_axisAcceleration=function(a){return["accelerometer.get_"+a.getFieldValue("AXIS")+"()",Blockly.Python.ORDER_ATOMIC]};
Blockly.Python.microbit_sensor_compassAngle=function(){return["compass.heading()",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.microbit_sensor_compassMagneticDensity=function(){return["compass.get_field_strength()",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.microbit_sensor_calibrateCompass=function(){return["compass.calibrate()",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.microbit_sensor_lightLevel=function(){return["display.read_light_level()",Blockly.Python.ORDER_ATOMIC]};
Blockly.Python.microbit_sensor_temperature=function(){return["temperature()",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.microbit_sensor_runningTime=function(){return["running_time()",Blockly.Python.ORDER_ATOMIC]};Blockly.Python.microbit_wireless_openWirelessCommunication=function(){Blockly.Python.imports_.radio="import radio";return"radio.on()\n"};Blockly.Python.microbit_wireless_closeWirelessCommunication=function(){Blockly.Python.imports_.radio="import radio";return"radio.off()\n"};
Blockly.Python.microbit_wireless_resetWirelessCommunication=function(){Blockly.Python.imports_.radio="import radio";return"radio.reset()\n"};Blockly.Python.microbit_wireless_sendWirelessMessage=function(a){Blockly.Python.imports_.radio="import radio";return"radio.send(str("+(Blockly.Python.valueToCode(a,"TEXT",Blockly.Python.ORDER_FUNCTION_CALL)||"")+"))\n"};Blockly.Python.microbit_wireless_receiveWirelessMessage=function(){Blockly.Python.imports_.radio="import radio";return["radio.receive()",Blockly.Python.ORDER_ATOMIC]};
Blockly.Python.microbit_wireless_setWirelessCommunicationChannel=function(a){Blockly.Python.imports_.radio="import radio";return"radio.config(channel = "+a.getFieldValue("CH")+")\n"};Blockly.Python.microbit_console_consolePrint=function(a){return"print("+(Blockly.Python.valueToCode(a,"TEXT",Blockly.Python.ORDER_FUNCTION_CALL)||"")+")\n"};Blockly.Python.texts={};Blockly.Python.text=function(a){return[Blockly.Python.quote_(a.getFieldValue("TEXT")),Blockly.Python.ORDER_ATOMIC]};
