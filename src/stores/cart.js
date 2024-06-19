// https://pinia.vuejs.org/core-concepts/state.html
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  // 對應 data
  state: () => ({
    bentoList: [],
    totalHeat: 0
  }),

  // 對應 computed (物件形式)
  getters: {
    totalHeat: (state) => {
        return state.bentoList.reduce((total, item) => {
            const heat = parseInt(item.calories);
            return total + heat;
        }, 0);
    }
},

  // 對應 methods (物件形式)
  actions: {
    addItem(food) {
        this.bentoList.push({
            id: food.id,
            ItemName: food.ItemName,
            qty: 1,
            calories: food.calories,
            imgSrc: food.image,
        });
    } 
  }
  
})