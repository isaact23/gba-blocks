import React from 'react';
import './UtilityPanel.css';
import {CodeExporter} from "./CodeExporter";
import {ClassManager} from "./ClassManager";

export function UtilityPanel() {

  return (
    <div className="utilityPanel">
      <CodeExporter />
      <ClassManager />
    </div>
  )
}