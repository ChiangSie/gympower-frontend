import { defineStore } from 'pinia'

export const useFoodStore = defineStore('foodStore', {
  state: () => ({
    selectedFoodImages: [],
    foods: [],
    totalPrice: 0,
    selectedIndex: null,
    boxSize: 0,
    bentoList: [
      //   {
      //     id: 1,
      //     max_amount: 4,
      //     plates: [
      //       {
      //         id: 1,
      //         image: '111'
      //       }
      //     ]
      //   }
    ]
  }),
  getters: {
    selectedFoods() {
      return this.selectedFoodImages.filter((img) => img !== '')
    },
    computedTotalPrice() {
      return this.selectedFoodImages.reduce((total, img) => {
        const food = this.foods.find((f) => this.parseImg(f.image) === img)
        return total + (food ? food.price : 0)
      }, 0)
    },
    remainingSlots() {
      return this.boxSize - this.selectedFoodImages.filter((img) => img !== '').length
    }
  },
  actions: {
    setBoxSize(size) {
      this.boxSize = size
      this.selectedFoodImages = new Array(size).fill('')
    },
    updateSelectedFoodImage(image, price, index, food) {
      // 如果新的图片和当前图片相同，则不做任何操作
      if (this.selectedFoodImages[index] === image) {
        return null
      }

      // 如果这个位置已有图片，减去旧图片对应的价格
      const oldImage = this.selectedFoodImages[index]
      let oldFood = null
      if (oldImage) {
        oldFood = this.foods.find((f) => this.parseImg(f.image) === oldImage)
        if (oldFood) {
          this.totalPrice -= oldFood.price
        }
      }

      // 更新图片并增加新图片的价格
      this.selectedFoodImages[index] = image
      this.totalPrice += price

      return { addedFood: food, removedFood: oldFood, remainingSlots: this.remainingSlots }
    },
    setFoods(foods) {
      this.foods = foods

      // 验证 foods 数据
      this.foods.forEach((food) => {
        if (!food.image || !food.price) {
          console.error(`Food object missing image or price: ${JSON.stringify(food)}`)
        }
      })
    },
    reset() {
      this.selectedFoodImages = new Array(this.selectedFoodImages.length).fill('')
      this.totalPrice = 0
      this.selectedIndex = null
    },
    parseImg(imgURL) {
      return new URL(`/src/assets/img/${imgURL}`, import.meta.url).href
    },
    updateSelectedIndex(index) {
      this.selectedIndex = index
    },
    isBentoFull() {
      return this.selectedFoodImages.every((img) => img !== '')
    }
  }
})
