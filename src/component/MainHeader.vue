<template>
  <header :class="$route.name">
    <nav>
      <RouterLink to="/" @click="closeNav">
        <picture>
          <img src="../assets/img/logo.svg" />
        </picture>
      </RouterLink>

      <div class="link header-link">
        <div class="none">
          <RouterLink to="/about" @click="closeNav">關於我們</RouterLink>
          <RouterLink to="/news" @click="closeNav">最新消息</RouterLink>
          <RouterLink to="/diary" @click="closeNav">健身日記</RouterLink>
          <RouterLink to="/course" @click="closeNav">課程資訊</RouterLink>
          <RouterLink to="/bento" @click="closeNav">美味食堂</RouterLink>
          <RouterLink to="/coach" @click="closeNav">教練介紹</RouterLink>
        </div>
        <div class="d-nav">
          <RouterLink to="/about">關於我們</RouterLink>
          <RouterLink to="/news">最新消息</RouterLink>
          <RouterLink to="/diary">健身日記</RouterLink>
          <RouterLink to="/course">課程資訊</RouterLink>
          <RouterLink to="/bento">美味食堂</RouterLink>
          <RouterLink to="/coach">教練介紹</RouterLink>
        </div>

        <RouterLink to="/login" @click="closeNav">
          <span class="material-symbols-outlined"> person </span>
        </RouterLink>
        <span :class="isCartVisible ? 'fa-regular fa-circle-xmark' : 'material-symbols-outlined'"
          @click="toggleCartVisibility" style="color: #002451">
          <span>shopping_cart</span>
        </span>
        <!-- <span class="material-symbols-outlined" @click="toggleCartVisibility" > shopping_cart </span> -->

        <div class="hb" id="hb" @click="showNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </header>
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
          <div class="cart_checkout_content">
            <input type="checkbox" v-model="item.selected" class="cart_check">
            <img :src="getItemImage(item)" alt="商品圖片">
            <div class="cart_itemInfo">
              <h3>{{ item.name }}</h3>
              <p>{{ item.totalPrice }}</p>
              <div class="cart_itemQty">
                <button class="cart_removeBtn" @click="decreaseQuantity(index)">-</button>
                <input type="text" class="cart_qty" v-model.number="item.quantity" @input="updateQuantity(index)">
                <button class="cart_addBtn" @click="increaseQuantity(index)">+</button>
              </div>
            </div>
            <div class="cart_itemBtn">
              <i class="fa-solid fa-trash-can" @click="removeFromCurrentCart(index)"></i>
              <button class="cart_detailsBtn" v-if="currentCartType === 'A'" @click="toggleDetails(index)">{{ details_btn }}</button>
            </div>
          </div>
          <div v-if="item.showDetails" class="food_details">
            <p v-for="(food, foodIndex) in item.foods" :key="foodIndex">
              {{ food.name }} x {{ food.quantity }}
            </p>
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
          <p v-if="currentCartType === 'A'">$ {{totalAmountA }}</p>
          <p v-else>$ {{totalAmountB }}</p>
        </div>
        <RouterLink to='/cart'>
          <button class="cart_btn">{{ cart_btn }}</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted,watch } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
export default {
  methods: {
    showNav() {
      const none = document.querySelector(".none");
      if (none.style.opacity == 0) {
        none.style.pointerEvents = "auto";
        none.style.opacity = "1";
      } else {
        none.style.pointerEvents = "none";
        none.style.opacity = "0";
      }
    },
    closeNav() {
      const none = document.querySelector(".none");
      none.style.pointerEvents = "none";
      none.style.opacity = "0";
    }
  },

  setup() {
    const cartStore = useCartStore()

    const route = useRoute()

    const { cartA, cartB, totalItemsA, totalItemsB, totalAmountA, totalAmountB } = storeToRefs(cartStore)

    const currentCartType = ref('A')  // 預設顯示購物車A

    const isCartVisible = ref(false)

    const currentCart = computed(() => {
      return currentCartType.value === 'A' ? cartStore.cartA : cartStore.cartB
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
     watch(() => route.path, () => {
      isCartVisible.value = false
    })

 const increaseQuantity = (index) => {
      if (currentCartType.value === 'A') {
        cartStore.increaseQuantity('A', index)
      } else {
        cartStore.increaseQuantity('B', index)
      }
    }

    const removeFromCurrentCart = (index) => {
      if (currentCartType.value === 'A') {
        cartStore.removeFromCartA(index)
      } else {
        cartStore.removeFromCartB(index)
      }
    }
    const getItemImage = (item) => {
      return item.image || (currentCartType.value === 'A' ? 'path/to/default_food.jpg' : 'path/to/default_course.jpg')
    }

    const decreaseQuantity = (index) => {
      if (currentCartType.value === 'A') {
        cartStore.decreaseQuantity('A', index)
      } else {
        cartStore.decreaseQuantity('B', index)
      }
    }

    const updateQuantity = (index) => {
      if (currentCartType.value === 'A') {
        cartStore.updateQuantity('A', index)
      } else {
        cartStore.updateQuantity('B', index)
      }
    }
  const deleteSelectedItems = () => {
      const selectedItems = currentCart.value.filter(item => item.selected)
      selectedItems.forEach(item => {
        const index = currentCart.value.indexOf(item)
        removeFromCurrentCart(index)
      })
    }

    const toggleDetails = (index) => {
      const item = currentCart.value[index];
      item.showDetails = !item.showDetails;

    }
    cartStore.initializeStore()

    onMounted(() => {
      // 確保每個項目都有 selected 屬性
      cartStore.cartA.forEach(item => {
        if (!item.hasOwnProperty('selected')) {
          item.selected = false;
        }
      });
      cartStore.cartB.forEach(item => {
        if (!item.hasOwnProperty('selected')) {
          item.selected = false;
        }
      });

    });


    return {
      cartStore,
      currentCart,
      currentCartType,
      totalAmountB,
      totalAmountA,
      totalItemsA,
      totalItemsB,
      showCartA,
      showCartB,
      removeFromCurrentCart,
      isCartVisible,
      toggleCartVisibility,
      increaseQuantity,
      decreaseQuantity,
      updateQuantity,
      deleteSelectedItems,
      getItemImage,
      toggleDetails,
      cart_title: '購物車',
      cart_tag1: '餐盒',
      cart_tag2: '課程',
      cart_content: '購物車還是空的哦！',
      delete_btn: '刪除選中',
      cart_btn: '前往結帳',
      sum_title: '小計',
      details_btn: '查看餐盒明細',
      deleteSelectedItems
    }
  }
};
</script>
