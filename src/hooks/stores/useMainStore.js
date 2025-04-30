import {create} from 'zustand';

export const useMainStore = create((set) => ({
  activeModal: 0,
  setActiveModal: (newModal) => {
    set(() => ({activeModal: newModal}));
  }
}));
