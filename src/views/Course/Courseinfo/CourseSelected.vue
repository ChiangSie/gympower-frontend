<template>
  <div>
    <select v-model="selectedLocation">
      <option disabled value="">請選擇地點</option>
      <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
    </select>

    <select v-model="selectedCourseTime" >
      <option disabled value="">請選擇課程時間</option>
      <option v-for="courseTime in courseTimes[selectedLocation]" :key="courseTime" :value="courseTime">{{ courseTime }}</option>
    </select>

    <div  v-if="selectedLocation && selectedCourseTime">
    <button @click="addToCart" class="btn">加入購物車</button>
    </div>
    <div v-else>
       <button class="btn">加入購物車</button>
    </div>
  </div>

  <h2>購物車</h2>
    <ul>
      <li v-for="course in cart" :key="course">{{ course }}</li>
    </ul>

      <div ref="alertBox" class="alert">{{ alertMessage }}</div>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
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
      this.showAlert('已加入購物車');
      },
    showAlert(message) {
      this.alertMessage = message
      this.$refs.alertBox.classList.add('show')
      clearTimeout(this.alertTimeout)
      this.alertTimeout = setTimeout(() => {
        this.$refs.alertBox.classList.remove('show')
        this.alertMessage = ''
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  top: 75px;
  right: 5px;
  padding: 30px 60px;
  background-color: #333;
  color: #fff;
  border-radius: 10px;
  opacity: 0;
  z-index: 3;

  &.show {
    opacity: .8;
    transition: opacity 0.3s ease-in-out;
  }
}

</style>