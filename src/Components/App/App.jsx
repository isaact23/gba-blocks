import React, {useState} from 'react';
import {LeftArea} from './LeftArea';
import {WorkspaceArea} from './WorkspaceArea';
import './App.css';

export function App() {
  const [code, setCode] = useState('');

  return (
    <div className="app">
      <LeftArea code={code} />
      <WorkspaceArea setCode={setCode} />
    </div>
  );
}
