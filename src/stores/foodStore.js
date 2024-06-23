import { defineStore } from 'pinia';

export const useFoodStore = defineStore('foodStore', {
    state: () => ({
        selectedFoodImages: [],
        foods: [],
        totalPrice: 0,
        selectedIndex: null,
    }),
    actions: {
        setBoxSize(size) {
            this.selectedFoodImages = new Array(size).fill('');
        },
        updateSelectedFoodImage(image, price, index) {
            // 如果新的图片和当前图片相同，则不做任何操作
            if (this.selectedFoodImages[index] === image) {
                return;
            }

            // 如果这个位置已有图片，减去旧图片对应的价格
            const oldImage = this.selectedFoodImages[index];
            if (oldImage) {
                const oldFood = this.foods.find(f => this.parseImg(f.image) === oldImage);
                if (oldFood) {
                    console.log(`Removing price of old food: ${oldFood.price}`);
                    this.totalPrice -= oldFood.price;
                }
            }

            // 更新图片并增加新图片的价格
            this.selectedFoodImages[index] = image;
            this.totalPrice += price;
            console.log(`New total price: ${this.totalPrice}`);
        },
        setFoods(foods) {
            this.foods = foods;

            // 验证 foods 数据
            this.foods.forEach(food => {
                if (!food.image || !food.price) {
                    console.error(`Food object missing image or price: ${JSON.stringify(food)}`);
                }
            });
        },
        reset() {
            this.selectedFoodImages = new Array(this.selectedFoodImages.length).fill('');
            this.totalPrice = 0;
            this.selectedIndex = null;
        },
        parseImg(imgURL) {
            return new URL(`/src/assets/img/${imgURL}`, import.meta.url).href;
        },
        updateSelectedIndex(index) {
            this.selectedIndex = index;
        }
    }
});
