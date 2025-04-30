import { useState } from 'react';

export const NONE = 0;
export const TILEMAP = 1;

export function useModal() {
  const [activeModal, setActiveModal] = useState(NONE);
  return {activeModal, setActiveModal};
}
