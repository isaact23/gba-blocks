import "./ClassManager.css";
import {useClasses} from "src/hooks/useClasses";

export function ClassManager() {
  const {classes, createClass} = useClasses();

  const handleCreateClassBtn = () => {
    let className = window.prompt("Enter class name", "New class");
    if (className == null || className === '') return;

    createClass(className);
  };

  return (
    <div className="subUtilityPanel">
      <h3>Class Definitions</h3>
      <button onClick={handleCreateClassBtn}><p>Create new class</p></button>
    </div>
  )
}