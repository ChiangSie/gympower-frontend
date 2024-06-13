<template>
  <div>
    <select v-model="selectedLocation">
      <option disabled value="">請選擇地點</option>
      <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
    </select>

    <select v-model="selectedCourseTime">
      <option disabled value="">請選擇課程時間</option>
      <option v-for="courseTime in courseTimes[selectedLocation]" :key="courseTime" :value="courseTime">{{ courseTime }}
      </option>
    </select>

    <div v-if="selectedLocation && selectedCourseTime">
      <button @click="addToCart" class="btn">加入購物車</button>
    </div>
    <div v-else>
      <button @click="addtoClass" class="btn">加入購物車</button>
    </div>
  </div>

  <div class="Cart">
    <h2>購物車</h2>
    <ul>
      <li v-for="course in cart" :key="course">{{ course }}</li>
    </ul>
  </div>
  <div ref="alertBox" class="alert">{{ alertMessage }}</div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      locations: ['中壢門市', '大安門市', '東門門市'],
      selectedLocation: '',
      courseTimes: {
        '中壢門市': ['09:00 - 11:00', '13:00 - 15:00', '18:00 - 20:00'],
        '大安門市': ['10:00 - 12:00', '14:00 - 16:00', '19:00 - 21:00'],
        '東門門市': ['11:00 - 13:00', '15:00 - 17:00', '20:00 - 22:00']
      },
      selectedCourseTime: '',
      cart: [],
      alertMessage: '',
      alertTimeout: null
    }
  },
  methods: {
    addToCart() {
      this.cart.push(`${this.selectedLocation} - ${this.selectedCourseTime}`);
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
.Cart{
  
}

</style>