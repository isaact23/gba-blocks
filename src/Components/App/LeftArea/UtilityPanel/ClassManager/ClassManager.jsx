import React from 'react';
import "./ClassManager.css";
import {useClasses} from "hooks/useClasses";

export function ClassManager() {
  const {classes, createClass} = useClasses();

  const handleCreateClassBtn = () => {
    let className = window.prompt("Enter class name", "New class");
    if (className == null || className === '') return;

    createClass(className);
  };

  return (
    <div className="utilitySubPanel">
      <h3>Class Definitions</h3>
      <button onClick={handleCreateClassBtn}><p>Create new class</p></button>
    </div>
  )
}