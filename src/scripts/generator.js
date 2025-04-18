/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/javascript';
import {isTilemapLoaded, getTilemapString} from './gba/tilemapLoader';

const getIrqInsert = () => {
  let code = '  irqInit();\n';
  code += '  irqEnable(IRQ_VBLANK);\n';
  code += '  while (1) {\n';
  code += '    VBlankIntrWait();\n';
  code += '  }\n'
  code += "}\n";
  return code;
}

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['on_game_start'] = function (block, generator) {
  const members = generator.statementToCode(block, 'MEMBERS');
  let code = '#include <gba.h>\n\n';

  if (isTilemapLoaded()) {
    code += getTilemapString();
  }
  code += 'int main() {\n'
  if (isTilemapLoaded()) {
    code += '  dmaCopy((u16*) tilemap_image, SPRITE_GFX, 32768);\n';
    code += '  dmaCopy(palette, SPRITE_PALETTE, 512);\n\n';
  }
  code += members + '\n';
  code += getIrqInsert();

  return code;
};

forBlock['set_display_mode'] = function (block, generator) {
  const mode = block.getFieldValue('MODE');
  let code = "REG_DISPCNT &= ~(0x7);\n"
  code += `REG_DISPCNT |= ${mode};\n`;
  return code;
};

forBlock['enable_forced_blank'] = function (block, generator) {
  const enable = block.getFieldValue('DO_ENABLE') === 'true';
  if (enable) {
    return 'REG_DISPCNT |= LCDC_OFF;\n';
  } else {
    return 'REG_DISPCNT &= ~LCDC_OFF;\n';
  }
}

forBlock['enable_background'] = function (block, generator) {
  const enable = block.getFieldValue('DO_ENABLE') === 'true';
  const bg = block.getFieldValue('BACKGROUND_NO');
  if (enable) {
    return `REG_DISPCNT |= BG${bg}_ON;\n`;
  } else {
    return `REG_DISPCNT &= ~BG${bg}_ON;\n`;
  }
};

forBlock['set_background_color_mode'] = function (block, generator) {
  const bg = block.getFieldValue('BACKGROUND_NO');
  const mode = block.getFieldValue('COLOR_MODE');
  const reg = 'REG_BG' + bg + 'CNT';
  if (mode === '256/1') {
    return `${reg} |= BG_256_COLOR;\n`;
  } else {
    return `${reg} &= ~BG_256_COLOR;\n`;
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

forBlock['show_all_sprites'] = function (block, generator) {
  const doShow = block.getFieldValue('DO_SHOW') === 'true';
  let code = 'for (int i = 0; i < 128; i++) {\n';
  if (doShow) {
    code += `  OAM[i].attr0 &= ~OBJ_DISABLE;\n`;
  } else {
    code += `  OAM[i].attr0 |= OBJ_DISABLE;\n`;
  }
  code += '}\n';
  return code;
};

forBlock['move_sprite'] = function (block, generator) {
  const spriteNumber = block.getFieldValue('SPRITE_NO');
  const x = block.getFieldValue('X');
  const y = block.getFieldValue('Y');
  
  let code = `OAM[${spriteNumber}].attr0 &= ~(0xFF);\n`;
  code += `OAM[${spriteNumber}].attr0 |= OBJ_Y(${y});\n`;
  code += `OAM[${spriteNumber}].attr1 &= ~(0x1FF);\n`;
  code += `OAM[${spriteNumber}].attr1 |= OBJ_X(${x});\n`;
  return code;
};

forBlock['set_sprite_tile'] = function (block, generator) {
  const spriteNumber = block.getFieldValue('SPRITE_NO');
  const tileNumber = block.getFieldValue('TILE_NO');

  let code = `OAM[${spriteNumber}].attr2 &= ~(0x3FF);\n`;
  code += `OAM[${spriteNumber}].attr2 |= OBJ_CHAR(${tileNumber});\n`;
  return code;
};

forBlock['set_sprite_size'] = function (block, generator) {
  const spriteNumber = block.getFieldValue('SPRITE_NO');
  const size = block.getFieldValue('SIZE');

  let code = `OAM[${spriteNumber}].attr1 &= ~(0xC00);\n`;
  code += `OAM[${spriteNumber}].attr1 |= OBJ_SIZE(${size});\n`;
  return code;
};

forBlock['set_sprite_shape'] = function (block, generator) {
  const spriteNumber = block.getFieldValue('SPRITE_NO');
  const shape = block.getFieldValue('SHAPE');

  let code = `OAM[${spriteNumber}].attr0 &= ~(0xC00);\n`;
  code += `OAM[${spriteNumber}].attr0 |= OBJ_SHAPE(${shape});\n`;
  return code;
};

forBlock['set_sprite_color_mode'] = function (block, generator) {
  const spriteNumber = block.getFieldValue('SPRITE_NO');
  const colorMode = block.getFieldValue('COLOR_MODE');

  if (colorMode === '256/1') {
    return `OAM[${spriteNumber}].attr0 |= OBJ_256_COLOR;\n`;
  } else {
    return `OAM[${spriteNumber}].attr0 &= ~OBJ_256_COLOR;\n`;
  }
};
