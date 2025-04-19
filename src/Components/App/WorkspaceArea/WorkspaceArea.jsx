import React, {useEffect, useRef, useState} from 'react';
import * as Blockly from 'blockly';
import './WorkspaceArea.css';
import {toolbox} from './toolbox';
import {theme} from './theme';
import {useSerialization} from "hooks/useSerialization";
import {useGenerator} from "hooks/useGenerator";
import {useCodeOutput} from "hooks/useCodeOutput";

export function WorkspaceArea() {
  const {save, load} = useSerialization();
  const {generator} = useGenerator();
  const {setCodeOutput} = useCodeOutput();

  const workspaceDiv = useRef(null);
  const [workspace, setWorkspace] = useState(null);

  // Transform workspace blocks to GBA code
  const runCode = () => {
    if (!workspace) return;

    const code = generator.workspaceToCode(workspace);
    setCodeOutput(code);
  };

  useEffect(() => {
    if (!workspaceDiv.current) return;

    const ws = Blockly.inject(workspaceDiv.current, {
      toolbox: toolbox,
      renderer: 'zelos',
      theme: theme
    });
    setWorkspace(ws);

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
      runCode();
    });

    // Load the initial state from storage and run the code.
    load(ws);
    runCode();

    setWorkspace(ws);
    return () => ws.dispose();
  }, []);

  return (
    <div className="workspaceArea" ref={workspaceDiv}></div>
  )
}
