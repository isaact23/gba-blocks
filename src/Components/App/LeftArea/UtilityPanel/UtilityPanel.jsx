import './UtilityPanel.css';
import {useClasses} from 'src/hooks/useClasses';
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