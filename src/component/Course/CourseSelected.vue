<template>
  <div v-for="course in displayList" :key="course.c_id">
    <div v-if="course.c_name === productInfo.c_name && course.coach_id === productInfo.coach_id">
      
      <div class="select">
        <select v-model="selectedLocation" class="selectLocation">
          <option disabled value="">請選擇地點</option>
          <option v-for="location in course.locations" :key="location" :value="location">
            {{ location }}
          </option>
        </select>

        <select v-model="selectedCourseTime" class="selectCourseTime">
          <option disabled value="">請選擇課程時間</option>
          <option v-for="courseTime in availableTimes" :key="courseTime" :value="courseTime">
            {{ courseTime }}
          </option>
        </select>

        <div class="button" v-if="selectedLocation && selectedCourseTime">
          <button @click="addToCartB" class="btn">加入購物車</button>
        </div>
        <div class="button" v-else>
          <button @click="addtoClass" class="btn">加入購物車</button>
        </div>
      </div>
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
      displayList: [],
            availableTimes: []
    }
  },
  watch: {
    selectedLocation(newLocation) {
      this.selectedCourseTime = ''; // 重置時間選擇
      if (newLocation) {
        const course = this.displayList.find(c => 
          c.c_name === this.productInfo.c_name && c.coach_id === this.productInfo.coach_id
        );
        if (course) {
          this.availableTimes = course.timeLocationMap[newLocation] || [];
        }
      } else {
        this.availableTimes = [];
      }
    }
  },
  methods: {
    addToCartB() {
      const selectedCourse = this.displayList.find(course =>
        course.c_name === this.productInfo.c_name && course.coach_id === this.productInfo.coach_id
      );

      if (selectedCourse) {
        const item = {
          name: `${selectedCourse.c_name} 
      ${this.selectedLocation} - ${this.selectedCourseTime}`,
          price: selectedCourse.c_price,
          location: this.selectedLocation,
          courseTime: this.selectedCourseTime,
        };
        this.cartStore.addToCartB(item);
        this.showAlertCart('已加入購物車');
      }
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
    fetchProduct() {
      let url = `${import.meta.env.VITE_PHP_URL}get_course_con.php`;
      fetch(url)
        .then(response => response.json())
        .then(result => {
          if (result.code === 200) {
            const uniqueCoursesMap = new Map();
            result.data.list.forEach(item => {
              const key = `${item.c_star}-${item.c_name}-${item.coach_id}`;
              if (!uniqueCoursesMap.has(key)) {
                uniqueCoursesMap.set(key, {
                  ...item,
                  c_id: parseInt(item.c_id),
                  locations: [item.c_location],
                  times: [item.c_time],
                  timeLocationMap: { [item.c_location]: [item.c_time] }
                });
              } else {
                const existingItem = uniqueCoursesMap.get(key);
                if (!existingItem.locations.includes(item.c_location)) {
                  existingItem.locations.push(item.c_location);
                }
                if (!existingItem.times.includes(item.c_time)) {
                  existingItem.times.push(item.c_time);
                }
                if (!existingItem.timeLocationMap[item.c_location]) {
                  existingItem.timeLocationMap[item.c_location] = [item.c_time];
                } else if (!existingItem.timeLocationMap[item.c_location].includes(item.c_time)) {
                  existingItem.timeLocationMap[item.c_location].push(item.c_time);
                }
              }
            });

            this.displayList = Array.from(uniqueCoursesMap.values());
          } else {
            console.error('API返回錯誤:', result.msg);
          }
        })
        .catch(error => {
          console.error('獲取數據時出錯:', error);
        });
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
  },
  mounted() {
    this.fetchProduct();
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