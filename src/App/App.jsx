import React, {useState} from 'react';
import {LeftArea} from './LeftArea';
import {WorkspaceArea} from './WorkspaceArea';
import './App.css';
import {NavBar} from "./NavBar";
import {ModalManager} from './Modals';
import {useModal} from 'hooks';

export function App() {
  const [code, setCode] = useState('');
  const {activeModal, setActiveModal} = useModal();

  return (
    <div className="page">
      <NavBar setActiveModal={setActiveModal} />
      <div className="app">
        <LeftArea code={code} />
        <WorkspaceArea setCode={setCode} />
      </div>
      <ModalManager activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
}
