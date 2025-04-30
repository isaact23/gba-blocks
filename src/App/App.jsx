import React, {useState} from 'react';
import {LeftArea} from './LeftArea';
import {WorkspaceArea} from './WorkspaceArea';
import './App.css';
import {NavBar} from "./NavBar";
import { ModalManager } from './Modals';

export function App() {
  const [code, setCode] = useState('');

  return (
    <div className="page">
      <NavBar />
      <div className="app">
        <LeftArea code={code} />
        <WorkspaceArea setCode={setCode} />
      </div>
      <ModalManager />
    </div>
  );
}
