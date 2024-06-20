import { defineStore } from 'pinia'

export const LoginAccount = defineStore('admin', {
  state: () => ({
    currentUser: null,
    currentAccount: null // 新增用來存儲當前用戶帳號的狀態
  }),
  actions: {
    setCurrentUser(user) {
      this.currentUser = user
      if (user) {
        this.currentAccount = user.account // 提取並儲存用戶帳號
        localStorage.setItem('currentUser', JSON.stringify(user))
      } else {
        this.currentAccount = null // 清空帳號資料
      }
    },
    clearCurrentUser() {
      this.currentUser = null
      this.currentAccount = null // 清空帳號資料
      localStorage.removeItem('currentUser')
    },
    loadCurrentUser() {
      const user = localStorage.getItem('currentUser')
      if (user) {
        const parsedUser = JSON.parse(user)
        this.currentUser = parsedUser
        this.currentAccount = parsedUser.account
      }
    }
  }
})