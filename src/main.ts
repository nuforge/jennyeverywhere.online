import './assets/main.css'
import './CustomTag' // Path to your custom element definition

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import App from './App.vue'
import router from './router'
import { vuetify } from './vuetify'

// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import tagBehavior from '@/objects/directive/tags'
import { droppable } from '@/objects/directive/drag/droppable'
import { draggable } from '@/objects/directive/drag/draggable'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.directive('tag', tagBehavior)
app.directive('droppable', droppable)
app.directive('draggable', draggable)
app.mount('#app')
