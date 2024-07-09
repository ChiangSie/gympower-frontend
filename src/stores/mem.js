import { defineStore } from 'pinia'

export const useMemStore = defineStore('mem', {
  state: () => ({
    currentUser: null
  }),
  actions: {
    setCurrentUser(user) {
      this.currentUser = user
      localStorage.setItem('currentUser', JSON.stringify(user))
    },
    loadCurrentUser() {
      const user = JSON.parse(localStorage.getItem('currentUser'))
      if (user) {
        this.currentUser = user
      }
    },
    clearCurrentUser() {
      this.currentUser = null
      localStorage.removeItem('currentUser')
    }
  }
})