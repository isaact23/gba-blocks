import React, {useEffect, useRef, useState} from 'react';
import * as Blockly from 'blockly';
import './WorkspaceArea.css';
import {toolbox} from './toolbox';
import {theme} from './theme';
import {useSerialization, useGenerator} from 'hooks';

export function WorkspaceArea(props) {
  const {save, load} = useSerialization();
  const {generator} = useGenerator();

  const workspaceDiv = useRef(null);

  // Transform workspace blocks to GBA code
  const runCode = (workspace) => {
    const code = generator.workspaceToCode(workspace);
    props.setCode(code);
  };

  useEffect(() => {
    if (!workspaceDiv.current) return;

    const ws = Blockly.inject(workspaceDiv.current, {
      toolbox: toolbox,
      renderer: 'zelos',
      theme: theme
    });

    // Every time the workspace changes state, save the changes to storage.
    ws.addChangeListener((e) => {
      // UI events are things like scrolling, zooming, etc.
      // No need to save after one of these.
      if (e.isUiEvent) return;
      save(ws);
    });

    // Whenever the workspace changes meaningfully, run the code again.
    ws.addChangeListener((e) => {
      // Don't run the code when the workspace finishes loading; we're
      // already running it once when the application starts.
      // Don't run the code during drags; we might have invalid state.
      if (
        e.isUiEvent ||
        e.type === Blockly.Events.FINISHED_LOADING ||
        ws.isDragging()
      ) {
        return;
      }
      runCode(ws);
    });

    // Load the initial state from storage and run the code.
    load(ws);
    runCode(ws);

    return () => ws.dispose();
  }, []);

  return (
    <div className="workspaceArea" ref={workspaceDiv}></div>
  )
}
