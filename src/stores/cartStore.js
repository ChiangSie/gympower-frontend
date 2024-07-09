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
      const existingItem = this.cartA.find((i) => i.name === item.name)
      if (existingItem) {
        // 更新图像和食物
        existingItem.image = item.image
        existingItem.foods = item.foods

        // 只更新价格和总价格，不更新数量
        existingItem.price = item.price
        existingItem.totalPrice = item.totalPrice
      } else {
        this.cartA.push({ ...item, quantity: 1, selected: false })
      }
      this.saveToLocalStorage()
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
