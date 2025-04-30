import {create} from 'zustand';

export const useMainStore = create((set) => ({
  code: "",
  setCode: (newCode) => {
    set({code: newCode});
  },
  activeModal: 0,
  setActiveModal: (newModal) => {
    set({activeModal: newModal});
  }
}));
