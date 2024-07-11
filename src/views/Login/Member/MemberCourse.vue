<template>
    <section>
      <h2>會員課程</h2>
      <hr>
      <div ref="calendarEl"></div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { Calendar } from '@fullcalendar/core';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import interactionPlugin from '@fullcalendar/interaction';
  
  export default {
    setup() {
      const calendarEl = ref(null);
      const events = ref([]);
      let calendarInstance = null;
  
      const fetchData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_PHP_URL}get_course_once.php`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const json = await response.json();
  
          if (json.code === 200) {
            events.value = json.data.list.map((item) => ({
              ...item
            }));
  
            // 更新日曆事件
            if (calendarInstance) {
              calendarInstance.removeAllEvents();
              calendarInstance.addEventSource(events.value);
            }
          } else {
            console.error('API返回錯誤:', json.msg);
          }
        } catch (error) {
          console.error('獲取數據時出錯:', error);
        }
      };
  
      onMounted(async () => {
        await fetchData();  // 先獲取數據
  
        calendarInstance = new Calendar(calendarEl.value, {
          plugins: [dayGridPlugin, interactionPlugin],
          initialView: 'dayGridMonth',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
          },
          events: events.value
        });
  
        calendarInstance.render();
      });
  
      return {
        calendarEl,
        events
      };
    }
  };
  </script>
<style lang="scss" scoped>
hr{
    width: 100%;
    border-width: 1px;
    border-color: #000000;
    margin: 10px 0;
}
</style>