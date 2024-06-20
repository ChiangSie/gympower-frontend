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
            {
              title: '團專',
              start: '2024-06-20',
              end: '2024-06-20'
            },
            {
              title: '畢業就失業',
              start: '2024-07-12',
              end: '2024-07-12'
            }
          ]
        });
        calendarInstance.render();
      });
  
      return {
        calendar
      };
    }
  };
  </script>