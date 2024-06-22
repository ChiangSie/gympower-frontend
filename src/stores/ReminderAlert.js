// https://pinia.vuejs.org/core-concepts/state.html
import { defineStore } from 'pinia'

export const useReminderAlertStore = defineStore('reminderAlert', {
    state: () => ({
        reminderText: ''
    }),

    actions: {
        setReminder(text) {
            this.reminderText = text;
        },

        clearReminder() {
            this.reminderText = '';
        }
    }
});