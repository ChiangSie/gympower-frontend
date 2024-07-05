import './assets/sass/style.scss'
import 'sweetalert2/dist/sweetalert2.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { gapi } from 'gapi-script'
function handleClientLoad() {
  gapi.load('auth2', () => {
    gapi.auth2.init({
      client_id: '917030762317-rlv30pu6g4pbeml4i38b2v1ld9rc402n.apps.googleusercontent.com'
    })
  })
}

window.handleClientLoad = handleClientLoad
library.add(faChevronRight)
library.add(faChevronLeft)
library.add(faTimesCircle)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
