/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/javascript';
import {tilemapData} from '../index';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['on_game_start'] = function (block, generator) {
  const members = generator.statementToCode(block, 'MEMBERS');
  let code = '#include <gba.h>\n\n';

  code += tilemapData;

  code += 'int main() {\n' + members + "}\n";
  return code;
};

forBlock['set_display_mode'] = function (block, generator) {
  const mode = block.getFieldValue('MODE');
  let code = "REG_DISPCNT &= ~(0x7);\n"
  code += `REG_DISPCNT |= ${mode};\n`;
  return code;
};

forBlock['enable_background'] = function (block, generator) {
  const enable = block.getFieldValue('DO_ENABLE') === 'true';
  const bg = block.getFieldValue('BACKGROUND_NO');
  if (enable) {
    return `REG_DISPCNT |= BG${bg}_ON;\n`;
  } else {
    return `REG_DISPCNT &= ~BG${bg}_ON;\n`;
  }
};

forBlock['enable_objects'] = function (block, generator) {
  const enable = block.getFieldValue('DO_ENABLE') === 'true';
  if (enable) {
    return 'REG_DISPCNT |= OBJ_ON;\n';
  } else {
    return 'REG_DISPCNT &= ~OBJ_ON;\n';
  }
};

forBlock['show_sprite'] = function (block, generator) {
  const doShow = block.getFieldValue('DO_SHOW') === 'true';
  const spriteNumber = block.getFieldValue('SPRITE_NO');
  if (doShow) {
    return `OAM[${spriteNumber}].attr0 &= ~OBJ_DISABLE;\n`;
  } else {
    return `OAM[${spriteNumber}].attr0 |= OBJ_DISABLE;\n`;
  }
};

forBlock['move_sprite'] = function (block, generator) {
  const spriteNumber = block.getFieldValue('SPRITE_NO');
  const x = block.getFieldValue('X');
  const y = block.getFieldValue('Y');
  
  let code = `OAM[${spriteNumber}].attr0 &= ~(0xFF);\n`;
  code += `OAM[${spriteNumber}].attr0 |= ${y};\n`;
  code += `OAM[${spriteNumber}].attr1 &= ~(0x1FF);\n`;
  code += `OAM[${spriteNumber}].attr1 |= ${x};\n`;
  return code;
};

forBlock['set_sprite_tile'] = function (block, generator) {
  const spriteNumber = block.getFieldValue('SPRITE_NO');
  const tileNumber = block.getFieldValue('TILE_NO');

  let code = `OAM[${spriteNumber}].attr2 &= ~(0x3FF);\n`;
  code += `OAM[${spriteNumber}].attr2 |= ${tileNumber};\n`;
  return code;
};
