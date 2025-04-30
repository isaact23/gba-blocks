import React from 'react';
import './NavBar.css';

import * as MODAL from "hooks/useModal";

export function NavBar(props) {
  const setActiveModal = (modal) => {
    props.setActiveModal(modal);
  }

  return (
    <div className="w3-bar w3-gray">
      <a href="#" className="w3-bar-item w3-button">GBA Blocks</a>
      <div className="w3-dropdown-hover">
        <button className="w3-button w3-gray">File</button>
        <div className="w3-dropdown-content w3-bar-block w3-card-4">
          <a className="w3-bar-item w3-button" onClick={() => setActiveModal(MODAL.TILEMAP)}>Upload Tilemap</a>
          <a className="w3-bar-item w3-button">Option 2</a>
          <a className="w3-bar-item w3-button">Option 3</a>
        </div>
      </div>
      <a href="#" className="w3-bar-item w3-button">Edit</a>
      <a href="#" className="w3-bar-item w3-button">View</a>
    </div>
  )
}