<template>
    <div ref="calendar"></div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { Calendar } from '@fullcalendar/core';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import interactionPlugin from '@fullcalendar/interaction';
  
  export default {
    setup() {
      const calendar = ref(null);
  
      onMounted(() => {
        const calendarInstance = new Calendar(calendar.value, {
          plugins: [dayGridPlugin, interactionPlugin],
          initialView: 'dayGridMonth',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
          },
          events: [
            // {
            //   title: '團專',
            //   start: '2024-06-20',
            //   end: '2024-06-20'
            // },
            // {
            //   title: '畢業就失業',
            //   start: '2024-07-12',
            //   end: '2024-07-12'
            // }
          ]
        });
        calendarInstance.render();
      });
  
      return {
        calendar
      };
    },
    mounted:{},
    methods: {
      fetchData() {
      fetch(`${import.meta.env.VITE_PHP_URL}get_course_once.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
          }
          return res.json()
        })
        .then((json) => {
          if (json.code === 200) {
            this.events = json.data.list.map((item) => ({
              ...item
              // am_status: parseInt(item.am_status) // 確保 am_status 是數字
            }))
          } else {
            console.error('API返回錯誤:', json.msg)
          }
        })
        .catch((error) => {
          console.error('獲取數據時出錯:', error)
        })
    },
    },
  };
  </script>