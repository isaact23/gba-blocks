/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['on_game_start'] = function (block, generator) {
  const members = generator.statementToCode(block, 'MEMBERS');

  return '#include <gba.h>\n\nint main() {\n' + members + "\n}\n";
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
