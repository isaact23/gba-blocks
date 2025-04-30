import React from 'react';
import './Toolbar.css';
import {useMainStore} from 'hooks/stores/useMainStore';
import * as MODAL from "enums/modals";

export function Toolbar() {
  const setActiveModal = useMainStore((state) => state.setActiveModal);

  return (
    <div className="w3-bar w3-gray">
      <a className="w3-bar-item w3-button">GBA Blocks</a>
      <div className="w3-dropdown-hover">
        <button className="w3-button w3-gray">File</button>
        <div className="w3-dropdown-content w3-bar-block w3-card-4">
          <a className="w3-bar-item w3-button" onClick={() => setActiveModal(MODAL.TILEMAP)}>Upload Tilemap</a>
          <a className="w3-bar-item w3-button">Option 2</a>
          <a className="w3-bar-item w3-button">Option 3</a>
        </div>
      </div>
      <a className="w3-bar-item w3-button">Edit</a>
      <a className="w3-bar-item w3-button">View</a>
    </div>
  )
}