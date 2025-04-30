import React, {useState} from 'react';
import {LeftArea} from './LeftArea';
import {WorkspaceArea} from './WorkspaceArea';
import './App.css';
import {Toolbar} from "./Toolbar";
import {ModalManager} from './Modals';

export function App() {
  return (
    <div className="page">
      <Toolbar />
      <div className="app">
        <LeftArea />
        <WorkspaceArea />
      </div>
      <ModalManager />
    </div>
  );
}
