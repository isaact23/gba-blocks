import React from 'react';
import './CodeOutput';
import './UtilityPanel';
import './LeftArea.css';
import {UtilityPanel} from "./UtilityPanel";

export function LeftArea(props) {
  return (
    <div className="leftArea">
      <UtilityPanel />
    </div>
  );
}
