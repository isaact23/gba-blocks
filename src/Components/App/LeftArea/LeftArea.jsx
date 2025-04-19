import React from 'react';
import './CodeOutput';
import './UtilityPanel';
import './LeftArea.css';
import {CodeOutput} from "./CodeOutput";
import {UtilityPanel} from "./UtilityPanel";

export function LeftArea(props) {
  return (
    <div className="leftArea">
      <CodeOutput code={props.code} />
      <UtilityPanel />
    </div>
  );
}
