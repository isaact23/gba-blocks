import React from 'react';
import './CodeOutput';
import './UtilityPanel';
import './LeftArea.css';
import {CodeOutput} from "./CodeOutput";
import {UtilityPanel} from "./UtilityPanel";

export function LeftArea() {
  return (
    <div className="leftArea">
      <CodeOutput />
      <UtilityPanel />
    </div>
  );
}
