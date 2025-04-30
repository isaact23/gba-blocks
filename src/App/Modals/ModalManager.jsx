import { TilemapEditor } from "./TilemapEditor";
import React from 'react';
import "./Modal.css";
import * as MODAL from 'hooks/useModal';

export function ModalManager(props) {

  const getActiveModal = () => {
    switch (props.activeModal) {
      case MODAL.TILEMAP: return <TilemapEditor />;
      default: return null;
    }
  }
  const setActiveModal = (modal) => {
    props.setActiveModal(modal);
  }

  if (props.activeModal == MODAL.NONE) return null;

  return (
    <div className="w3-modal gba-modal">
      <div className="w3-modal-content gba-modal-content w3-card-4">
        <span onClick={() => setActiveModal(MODAL.NONE)} className="w3-button w3-display-topright">&times;</span>
        {getActiveModal()}
      </div>
    </div>
  );
}
