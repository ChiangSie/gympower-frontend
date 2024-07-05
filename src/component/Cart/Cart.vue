<template>
  <div>
    <button class="cart-toggle" @click="toggleCartVisibility">
      <i :class="isCartVisible ? 'fa-regular fa-circle-xmark' : 'fa-solid fa-cart-shopping'"></i>
    </button>

    <div class="cart_card" v-if="isCartVisible">
      <div class="cart_navbar">
        <div class="cart_title">
          <h4>{{ cart_title }}</h4>
        </div>
        <div class="cart_tag">
          <div class="cart_tag1" :class="{ active: currentCartType === 'A' }" @click="showCartA">
            <p>{{ cart_tag1 }}</p>
          </div>
          <div class="cart_tag2" :class="{ active: currentCartType === 'B' }" @click="showCartB">
            <p>{{ cart_tag2 }}</p>
          </div>
        </div>
      </div>
      <div class="cart_content">
        <div v-if="currentCart.length > 0">
          <div class="cart_checkoutItem" v-for="(item, index) in currentCart" :key="index">
            <input type="checkbox" v-model="item.selected">
            <img :src="getItemImage(item)" alt="商品圖片">
            <div class="cart_itemInfo">
              <h3>{{ item.name }}</h3>
              <p v-if="currentCartType === 'A'">{{ item.food1 }}, {{ item.food2 }}, {{ item.food3 }}</p>
              <p v-else>{{ item.description }}</p>
              <p>{{ item.price }}</p>
              <div class="cart_itemQty">
                <button class="cart_removeBtn" @click="decreaseQuantity(index)">-</button>
                <input type="text" class="cart_qty" v-model.number="item.quantity" @input="updateQuantity(index)">
                <button class="cart_addBtn" @click="increaseQuantity(index)">+</button>
              </div>
            </div>
            <div class="cart_itemBtn">
              <i class="fa-solid fa-trash-can" @click="removeFromCurrentCart(index)"></i>
              <button class="cart_detailsBtn">{{ details_btn }}</button>
            </div>
          </div>
        </div>
        <div class="cart_details" v-else>
          <div class="shop_cart_check"></div>
          <p>{{ cart_content }}</p>
        </div>
        <div class="cart_footer">
          <span class="underline"></span>
          <button class="delete_btn" @click="deleteSelectedItems">{{ delete_btn }}</button>
          <div class="cart_sum">
            <p>{{ sum_title }}</p>
            <p>$ {{ totalAmount }}</p>
          </div>
          <RouterLink to='/cart'>
            <button class="cart_btn">{{ cart_btn }}</button>
          </RouterLink>
        </div>

      </div>
    </div>

    <h2>食物</h2>
    <div class="product-container">
      <div class="product-card" v-for="(product, index) in foodProducts" :key="index">
        <img :src="product.image" alt="產品圖片">
        <h3>{{ product.name }}</h3>
        <p>{{ product.food1 }}, {{ product.food2 }}, {{ product.food3 }}</p>
        <p>{{ product.price }}</p>
        <button @click="addToCartAFromProduct(product)">加入購物車</button>
      </div>
    </div>

    <h2>課程</h2>
    <div class="product-container">
      <div class="product-card" v-for="(product, index) in courseProducts" :key="index">
        <img :src="product.image" alt="產品圖片">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <button @click="addToCartBFromProduct(product)">加入購物車</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const cartStore = useCartStore()

    const { cartA, cartB, totalItemsA, totalItemsB, totalAmountA, totalAmountB } = storeToRefs(cartStore)

    const currentCartType = ref('A')
    const isCartVisible = ref(false)

    const currentCart = computed(() => {
      return currentCartType.value === 'A' ? cartA.value : cartB.value
    })

    const totalAmount = computed(() => {
      return currentCartType.value === 'A' ? totalAmountA.value : totalAmountB.value
    })

    const showCartA = () => {
      currentCartType.value = 'A'
    }

    const showCartB = () => {
      currentCartType.value = 'B'
    }

    const toggleCartVisibility = () => {
      isCartVisible.value = !isCartVisible.value
    }

    const addToCartAFromProduct = (product) => {
      cartStore.addToCartA(product)
    }

    const addToCartBFromProduct = (product) => {
      cartStore.addToCartB(product)
    }

    const removeFromCurrentCart = (index) => {
      if (currentCartType.value === 'A') {
        cartStore.removeFromCartA(index)
      } else {
        cartStore.removeFromCartB(index)
      }
    }

    const increaseQuantity = (index) => {
      cartStore.increaseQuantity(currentCartType.value, index)
    }

    const decreaseQuantity = (index) => {
      cartStore.decreaseQuantity(currentCartType.value, index)
    }

    const updateQuantity = (index) => {
      cartStore.updateQuantity(currentCartType.value, index)
    }

    const deleteSelectedItems = () => {
      cartStore.deleteSelectedItems(currentCartType.value)
    }

    const getItemImage = (item) => {
      return item.image || (currentCartType.value === 'A' ? 'path/to/default_food.jpg' : 'path/to/default_course.jpg')
    }

    const foodProducts = ref([
      { name: 'Apple', food1: '1111', food2: '222', food3: '33', price: '200', image: 'path/to/apple.jpg' },
      { name: 'Banana', food1: '1111', food2: '222', food3: '33', price: '130', image: 'path/to/banana.jpg' },
    ])

    const courseProducts = ref([
      { name: 'Python 課程', description: '從頭學習 Python。', price: '290', image: 'path/to/python_course.jpg' },
      { name: 'Vue.js 課程', description: '掌握 Vue.js 框架。', price: '200', image: 'path/to/vuejs_course.jpg' },
      { name: 'JavaScript 課程', description: '從頭學習 JavaScript。', price: '290', image: 'path/to/javascript_course.jpg' }
    ])

    onMounted(() => {
      cartStore.initializeStore()
    })

    return {
      cartStore,
      currentCart,
      currentCartType,
      totalAmount,
      totalItemsA,
      totalItemsB,
      showCartA,
      showCartB,
      addToCartAFromProduct,
      addToCartBFromProduct,
      removeFromCurrentCart,
      foodProducts,
      courseProducts,
      isCartVisible,
      toggleCartVisibility,
      increaseQuantity,
      decreaseQuantity,
      updateQuantity,
      deleteSelectedItems,
      getItemImage,
      cart_title: '購物車',
      cart_tag1: '餐盒',
      cart_tag2: '課程',
      cart_content: '購物車還是空的哦！',
      delete_btn: '刪除選中',
      cart_btn: '前往結帳',
      sum_title: '小計',
      details_btn: '查看餐盒明細'
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-card {
  width: 200px;
  border: 1px solid #ccc;
  padding: 16px;
  text-align: center;
}

.product-card img {
  max-width: 100%;
  height: auto;
}

.cart_card {
  padding-top: 4%;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 0 0 5px 5px;
  width: 30%;
  margin-left: auto;
}

.close_btn {
  font-size: 25px;
  cursor: pointer;
  color: #002451;
  margin-bottom: 25px;

  i {
    margin-left: 89%;
  }
}

.cart_navbar {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #000000;
  width: 85%;
  margin: auto;
}

.cart_title h4 {
  font-weight: 600;
}

.cart_tag {
  display: flex;
  justify-content: center;
  margin-top: 5px;

}

.cart_tag1 {
  background-color: #71C4EF;
  width: 60px;
  border-radius: 5px 5px 0 0;
  height: 35px;
  cursor: pointer;

  p {
    color: #fff;
    text-align: center;
    padding-top: 7px;

  }
}

.cart_tag2 {
  background-color: #D4EAF7;
  width: 60px;
  border-radius: 5px 5px 0 0;
  height: 35px;
  cursor: pointer;

  p {
    color: #000000;
    text-align: center;
    padding-top: 7px;

  }
}

@media screen and (max-width: 768px) {

  .cart_card {
    padding-top: 12%;
    border: none;
    width: 100%;
  }

  .cart_title h4 {
    font-size: 24px;
  }
}

/* ====================================================== */
/* 購物車內容 */

.cart_content {
  text-align: center;
  padding: 3% 0 0 0;
  z-index: 6;

  .cart_checkoutItem {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 15px;
    padding-top: 15px;
    border-bottom: 2px dashed #002451;
    width: 85%;
    margin: auto;



    img {
      width: 25%;
      aspect-ratio: 4 / 3.5;
    }

  }

  .cart_itemInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      font-size: 16px;
      font-weight: 600;
    }

    p {
      font-size: 14px;
    }

  }

  .cart_details {
    height: 49%;
    margin-top: 100px;


    .shop_cart_check {
      background-image: url('@/assets/img/shopping_cart_check.svg');
      width: 60px;
      height: 60px;
      margin: auto;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
    }



  }



  .cart_itemQty {
    margin-top: 20px;
    display: flex;
    justify-content: center;



    input {
      border: 1px solid #002451;
      width: 60px;
      text-align: center;
    }

    .cart_addBtn {
      background-color: #002451;
      color: #ffffff;
      cursor: pointer;

    }

    .cart_removeBtn {
      cursor: pointer;
      background-color: transparent;


    }

  }

  .cart_itemBtn {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;

    i {
      cursor: pointer;
      color: #002451;
    }

    button {
      width: 80px;
      height: 30px;
      border-radius: 50px;
      font-size: 10px;
      cursor: pointer;
      background-color: transparent;
    }


  }



}

@media screen and (max-width: 768px) {
  .cart_content {
    padding: 3% 0;
  }
}


/* ====================================================== */
/* 購物車結帳區塊 */

.cart_footer {

  .underline {
    border-bottom: 2px solid #000000;
    display: block;
    width: 85%;
    margin: auto;
  }

  .delete_btn {
    background-color: #71C4EF;
    border: none;
    width: 100px;
    height: 30px;
    border-radius: 50px;
    color: white;
    padding: 4px 16px;
    cursor: pointer;
    margin-top: 16px;
    margin-left: -58%;
  }

  .cart_sum {
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: auto;
    margin-top: 16px;

    p {
      font-size: 18px;
    }
  }

  .cart_btn {
    background-color: #002451;
    border: none;
    width: 100%;
    height: 30px;
    color: white;
    padding: 4px 16px;
    cursor: pointer;
    margin-top: 16px;
  }

}

@media screen and (max-width: 768px) {
  .cart_btn {
    height: 40px;
  }

}
</style>