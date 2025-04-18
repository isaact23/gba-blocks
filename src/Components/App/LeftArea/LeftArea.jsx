import './CodeOutput';
import './UtilityPanel';
import './LeftArea.css';

export function LeftArea() {
  return (
    <div className="leftArea">
      <CodeOutput />
      <UtilityPanel />
    </div>
  );
}