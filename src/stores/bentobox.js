// https://pinia.vuejs.org/core-concepts/state.html
import { defineStore } from 'pinia';

export const useBentoStore = defineStore('bentoBox', {
  state: () => ({
    containerId: null, 
  }),
  actions: {
    setContainerId(id) {
      this.containerId = id;
    },
  },
});