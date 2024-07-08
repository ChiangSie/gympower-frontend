<template>
  <div class="bento_list_info_item">
    <!-- 購物車 A 的商品 -->
    <div v-if="activeCart === 'A'" class="cart-items">
      <p class="bento_list_info_title">餐盒商品</p>
      <div v-for="item in cartStore.selectedItemsA" :key="item.id" class="selected-item">
        <img :src="item.image" :alt="item.name" class="item-image" v-if="item.image">
        <div class="item-details">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-price">
            {{ item.quantity }}份 ${{ (item.price * item.quantity).toFixed(0) }}
          </div>
        </div>
      </div>
    </div>

    <!-- 購物車 B 的商品 -->
    <div v-if="activeCart === 'B'" class="cart-items">
      <p class="bento_list_info_title">課程商品</p>
      <div v-for="item in cartStore.selectedItemsB" :key="item.id" class="selected-item">
        <img :src="item.image" :alt="item.name" class="item-image" v-if="item.image">
        <div class="item-details">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-price">
            {{ item.quantity }} 套 ${{ (item.price * item.quantity).toFixed(0) }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bento_list_info_item_total">
    <div class="total_name">{{ totalName }}</div>
    <div class="total_price">{{ formattedTotal }}</div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useCartStore } from '../stores/cartStore'; // 確保路徑正確

export default {
  name: 'CartSummary',
  props: {
    activeCart: {
      type: String,
      required: true
    },
    totalName: {
      type: String,
      default: '合計'
    }
  },
  setup(props) {
    const cartStore = useCartStore();

    const formattedTotal = computed(() => {
      const total = props.activeCart === 'A' ? cartStore.selectedTotalA : cartStore.selectedTotalB;
      return total.toFixed(0);
    });

    return {
      cartStore,
      formattedTotal
    };
  }
};
</script>

<style scoped>

.selected-item {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: #eef5ff;
    padding: .3rem;
    margin-bottom: .5rem;
}

/* 標題 */
.bento_list_info_title {
    text-align: center;
    padding: 1rem;
}

/* 欄位名稱 */
.bento_list_info_item {
    display: flex;
    justify-content: space-between;
    margin: 4% 10% 60% 10%;
    flex-direction: column;
}


.item-name {
    padding: .5rem;
}

.item-quantity {
    flex: 1;
    text-align: center;
}

.item-price {
    flex: 1;
    text-align: right;
    padding: .3rem 1rem;
}

/* 合計欄位名稱 */
.bento_list_info_item_total {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #000;
    margin: 0 10%;
    padding-top: 4%;
}

@media screen and (max-width: 1280px) {
    .bento_list_info_item {
        margin-bottom: 230px;
    }
}

@media screen and (max-width: 1200px) {
    .bento_list_info_item {
        margin-bottom: 210px;
    }
}

@media screen and (max-width: 1024px) {
    .bento_list_info_item {
        margin-bottom: 190px;
    }
}

@media screen and (max-width: 992px) {

    .bento_list_info_item {
        margin-bottom: 100%;
    }

    .bento_list_info_item_total {
        margin-top: 60%;
    }
}

</style>