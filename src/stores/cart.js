//https://pinia.vuejs.org/core-concepts/state.html
import { defineStore } from 'pinia'

export const useCartListStore = defineStore('cart2', {
  state: () => ({
    items: []
  }),
  getters: {
    totalCalories: (state) => {
      return state.items.reduce((total, item) => total + (item.calories || 0), 0)
    },
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + (item.price * item.qty || 0), 0)
    }
  },
  actions: {
    addItem(food) {
      const existingItem = this.items.find((item) => item.id === food.id)
      if (existingItem) {
        existingItem.qty++
      } else {
        this.items.push({ ...food, qty: 1 })
      }
    },
    removeItem(food) {
      const index = this.items.findIndex((item) => item.id === food.id)
      if (index !== -1) {
        if (this.items[index].qty > 1) {
          this.items[index].qty--
        } else {
          this.items.splice(index, 1)
        }
      }
    },
    clearCart() {
      this.items = []
    }
  }
})
