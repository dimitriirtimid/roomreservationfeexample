// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// Import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import specific icons (examples)
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Import Font Awesome Vue component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css' // Import Font Awesome CSS

// Add icons to the library
library.add(faUserSecret, faGithub)

const app = createApp(App)

// Register Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.use(Toast, {
  position: 'top-center',
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  hideProgressBar: true,
  icon: true,
  theme: 'light',
})

app.mount('#app')
