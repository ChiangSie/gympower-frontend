import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartA: [],
    cartB: [],
    selectedItemsA: [],
    selectedItemsB: []
  }),
  getters: {
    totalItemsA: (state) => state.cartA.reduce((sum, item) => sum + item.quantity, 0),
    totalItemsB: (state) => state.cartB.reduce((sum, item) => sum + item.quantity, 0),
    totalAmountA: (state) =>
      state.cartA.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0).toFixed(2),
    totalAmountB: (state) =>
      state.cartB.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0).toFixed(2),
    selectedItemsA: (state) => state.cartA.filter((item) => item.selected),
    selectedItemsB: (state) => state.cartB.filter((item) => item.selected),
    selectedTotalA() {
      return this.selectedItemsA.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    selectedTotalB() {
      return this.selectedItemsB.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    selectedTotal() {
      const totalA = this.selectedItemsA.reduce((sum, item) => sum + item.price * item.quantity, 0)
      const totalB = this.selectedItemsB.reduce((sum, item) => sum + item.price * item.quantity, 0)
      return totalA + totalB
    }
  },
  actions: {
    initializeStore() {
      const storedCartA = localStorage.getItem('cartA')
      const storedCartB = localStorage.getItem('cartB')
      if (storedCartA) this.cartA = JSON.parse(storedCartA)
      if (storedCartB) this.cartB = JSON.parse(storedCartB)
    },
    saveToLocalStorage() {
      localStorage.setItem('cartA', JSON.stringify(this.cartA))
      localStorage.setItem('cartB', JSON.stringify(this.cartB))
    },
   addToCartA(item) {
      const existingItemIndex = this.cartA.findIndex((i) => this.isSameBento(i, item));
      if (existingItemIndex !== -1) {
        // 更新現有項目
        const existingItem = this.cartA[existingItemIndex];
        if (this.isSameBento(existingItem, item) && existingItem.totalPrice === item.totalPrice) {
          // 如果食材和總價格都相同，則增加數量
          existingItem.quantity += 1;
        } else {
          // 如果食材或總價格不同，則更新為新的內容
          existingItem.image = item.image;
          existingItem.foods = item.foods;
          existingItem.price = item.price;
          existingItem.totalPrice = item.totalPrice;
          // 不增加數量，保持為1
        }
      } else {
        // 添加新項目
        this.cartA.push({ ...item, quantity: 1, selected: false });
      }
      this.saveToLocalStorage();
    },

    isSameBento(...bentos) {
      if (bentos.length < 2) return true;
      
      const firstBento = bentos[0];
      const foodsLength = firstBento.foods.length;

      // 檢查所有便當的食材數量是否相同
      if (!bentos.every(bento => bento.foods.length === foodsLength)) {
        return false;
      }

      // 對每個便當的食材進行排序
      const sortedBentos = bentos.map(bento => 
        [...bento.foods].sort((a, b) => a.name.localeCompare(b.name))
      );

      // 比較所有便當的食材
      for (let i = 0; i < foodsLength; i++) {
        const firstFood = sortedBentos[0][i];
        if (!sortedBentos.every(bento => 
          bento[i].name === firstFood.name && bento[i].quantity === firstFood.quantity
        )) {
          return false;
        }
      }

      return true;
    },
    addToCartB(item) {
      const existingItem = this.cartB.find(
        (i) =>
          i.name === item.name && i.location === item.location && i.courseTime === item.courseTime
      )
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cartB.push({ ...item, quantity: 1 })
      }
      this.saveToLocalStorage()
    },
    removeFromCartA(index) {
      this.cartA.splice(index, 1)
      this.saveToLocalStorage()
    },
    removeFromCartB(index) {
      this.cartB.splice(index, 1)
      this.saveToLocalStorage()
    },
    increaseQuantity(cartType, index) {
      const cart = cartType === 'A' ? this.cartA : this.cartB
      cart[index].quantity++
      this.saveToLocalStorage()
    },
    decreaseQuantity(cartType, index) {
      const cart = cartType === 'A' ? this.cartA : this.cartB
      if (cart[index].quantity > 1) {
        cart[index].quantity--
        this.saveToLocalStorage()
      }
    },
    updateQuantity(cartType, index) {
      const cart = cartType === 'A' ? this.cartA : this.cartB
      if (cart[index].quantity < 1) {
        cart[index].quantity = 1
      }
      this.saveToLocalStorage()
    },
    deleteSelectedItems(cartType) {
      if (cartType === 'A') {
        this.cartA = this.cartA.filter((item) => !item.selected)
      } else {
        this.cartB = this.cartB.filter((item) => !item.selected)
      }
      this.saveToLocalStorage()
    },
    clearCart(cartType) {
      if (cartType === 'A') {
        this.cartA = []
      } else {
        this.cartB = []
      }
      this.saveToLocalStorage()
    },
    toggleItemSelection(cartType, index) {
      const cart = cartType === 'A' ? this.cartA : this.cartB
      cart[index].selected = !cart[index].selected
      this.saveToLocalStorage()
    },
    initializeSelectedItems() {
      this.cartA.forEach((item) => (item.selected = false))
      this.cartB.forEach((item) => (item.selected = false))
      this.saveToLocalStorage()
    },
    updateSelectedItems(cartType) {
      if (cartType === 'A') {
        this.selectedItemsA = this.cartA.filter((item) => item.selected)
      } else if (cartType === 'B') {
        this.selectedItemsB = this.cartB.filter((item) => item.selected)
      }
    }
  }
})
