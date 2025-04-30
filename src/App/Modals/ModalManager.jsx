import { TilemapEditor } from "./TilemapEditor";
import React from 'react';
import "./Modal.css";
import {useMainStore} from 'hooks/stores/useMainStore';
import * as MODAL from 'enums/modals';

export function ModalManager() {
  const activeModal = useMainStore((state) => state.activeModal);
  const setActiveModal = useMainStore((state) => state.setActiveModal);

  const getActiveModal = () => {
    switch (activeModal) {
      case MODAL.TILEMAP: return <TilemapEditor />;
      default: return null;
    }
  }

  if (activeModal == MODAL.NONE) return null;

  return (
    <div className="w3-modal gba-modal">
      <div className="w3-modal-content gba-modal-content w3-card-4">
        <span onClick={() => setActiveModal(MODAL.NONE)} className="w3-button w3-display-topright">&times;</span>
        {getActiveModal()}
      </div>
    </div>
  );
}
