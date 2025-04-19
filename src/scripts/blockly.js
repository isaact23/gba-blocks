/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import {blocks} from './blockDefinitions';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
