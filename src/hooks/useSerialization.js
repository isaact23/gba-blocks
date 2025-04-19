/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';
const storageKey = 'mainWorkspace';

export function useSerialization() {
  /**
   * Saves the state of the workspace to browser's local storage.
   * @param {Blockly.Workspace} workspace Blockly workspace to save.
   */
  const save = function (workspace) {
    const data = Blockly.serialization.workspaces.save(workspace);
    window.localStorage?.setItem(storageKey, JSON.stringify(data));
  };

  /**
   * Loads saved state from local storage into the given workspace.
   * @param {Blockly.Workspace} workspace Blockly workspace to load into.
   */
  const load = function (workspace) {
    const data = window.localStorage?.getItem(storageKey);
    if (!data) return;

    // Don't emit events during loading.
    Blockly.Events.disable();
    Blockly.serialization.workspaces.load(JSON.parse(data), workspace, false);
    Blockly.Events.enable();
  };

  return {save, load};
}
