// https://pinia.vuejs.org/core-concepts/state.html
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    bentoList: [],
    totalHeat: 0,
  }),

  getters: {
    computedTotalHeat: (state) => {
      return state.bentoList.reduce((total, item) => {
        const heat = parseInt(item.calories);
        return total + heat;
      }, 0);
    },
  },

  actions: {
    addItem(food) {
      this.bentoList.push({
        id: food.id,
        ItemName: food.ItemName,
        qty: 1,
        calories: food.calories,
        imgSrc: food.image,
      });
     
      this.totalHeat += food.calories;
    },
    clearCart() {
      this.bentoList = [];
      this.totalCalories = 0;
    },
  },
});