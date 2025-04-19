import React from 'react';
import './UtilityPanel.css';
import {useClasses} from 'hooks/useClasses';
import {CodeExporter} from "./CodeExporter";
import {ClassManager} from "./ClassManager";
import {TilemapUpload} from "./TilemapUpload/TilemapUpload";

export function UtilityPanel() {

  return (
    <div className="utilityPanel">
      <CodeExporter />
      <ClassManager />
      <TilemapUpload />
    </div>
  )
}