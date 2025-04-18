import * as Blockly from 'blockly';
import './WorkspaceArea.css';
import {useState} from "react";
import {toolbox} from './toolbox';
import {theme} from './theme';

export function WorkspaceArea() {
  const [ws, setWs] = useState(null);

  const setup = () => {
    setWs( <div className="workspace"></div> );
    setWs( Blockly.inject(ws, {
      toolbox: toolbox,
      renderer: 'zelos',
      theme: theme
    }));
  }
  setup();

// Transform workspace blocks to GBA code
  export const runCode = () => {
    const code = gbaGenerator.workspaceToCode(ws);
    codeDiv.innerText = code;

    outputDiv.innerHTML = '';
  };

// Load the initial state from storage and run the code.
  load(ws);
  runCode();

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
      e.type == Blockly.Events.FINISHED_LOADING ||
      ws.isDragging()
    ) {
      return;
    }
    runCode();
  });

  return (
    <div className="workspaceArea">

    </div>
  );
}
