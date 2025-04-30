import { TilemapEditor } from "./TilemapEditor";
import React, { useState } from 'react';

const MODAL_TILEMAP = 1;

export function ModalManager() {
  const [activeModal, setActiveModal] = useState(0);

  return <TilemapEditor />
}