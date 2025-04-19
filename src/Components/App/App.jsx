import React from 'react';
import {LeftArea} from './LeftArea';
import {WorkspaceArea} from './WorkspaceArea';
import './App.css';

export function App() {
  return (
    <div className="app">
      <LeftArea />
      <WorkspaceArea />
    </div>
  );
}
