<template>
  <div class="select">
    <select v-model="selectedLocation" class="selectLocation">
      <option disabled value="">請選擇地點</option>
      <option v-for="location in productInfo.locations" :key="location" :value="location">{{ location }}</option>
    </select>

    <select v-model="selectedCourseTime" class="selectCourseTime">
      <option disabled value="">請選擇課程時間</option>
      <option v-for="courseTime in productInfo.courseTimes[selectedLocation]" :key="courseTime" :value="courseTime">{{ courseTime }}
      </option>
    </select>

    <div class="button" v-if="selectedLocation && selectedCourseTime">
      <button @click="addToCartB(product)" class="btn">加入購物車</button>
    </div>
    <div class="button" v-else>
      <button @click="addtoClass" class="btn">加入購物車</button>
    </div>
  </div>

  
</template>

<script>
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';
import Swal from 'sweetalert2';
export default {
  setup() {
    const cartStore = useCartStore();
    const { cartB } = storeToRefs(cartStore);

    return {
      cartStore,
      cartB
    }
  },
  props: {
    productInfo: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      selectedLocation: '',
      selectedCourseTime: '',
      cart: [],
      alertMessage: '',
      alertTimeout: null,
    }
  },

  methods: {
    addToCartB() {
    const item = {
      name: `${this.productInfo.title} 
      ${this.selectedLocation} - ${this.selectedCourseTime}`,
      price: this.productInfo.price, // 確保 productInfo 中有 price 屬性
      location: this.selectedLocation,
      courseTime: this.selectedCourseTime,
      // 可以根據需要添加其他屬性
    };
    this.cartStore.addToCartB(item);
    this.showAlertCart('已加入購物車');
  },
    addtoClass() {
      this.showAlertClass('請先選擇地點和課程時間');
    },
    showAlertCart(message) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
      })
    },
    showAlertClass(message) {
      Swal.fire({
        title: message,
        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.select{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1%;
.selectLocation,
.selectCourseTime{
    padding: 5px 10px;
    height:40px;
    line-height:30px;
    width:40%;
    border-radius: 5px;
    option {
      font-size: 18px;
}
    }
    select:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    
}
    .button{
    width: 19%;
    .btn{
    padding: 5px 10px;
    height:40px;
    width: 100%;
    border-radius: 5px;
    border: none;
    background-color: #002451;
    color: white;
    white-space: nowrap;
    }
        }
    @media screen and (max-width: 768px) {
      .selectLocation{
        width: 35%;
      }
      .selectCourseTime{
        width: 35%;
      }
      .button{
    width: 29%;
  }
    }
    }
</style>