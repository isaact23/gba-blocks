import React from 'react';
import './UtilityPanel.css';
import {CodeExporter} from "./CodeExporter";
import {GameObjectPanel} from "./GameObjectPanel";

export function UtilityPanel() {

  return (
    <div className="utilityPanel">
      <CodeExporter />
      <GameObjectPanel />
    </div>
  )
}