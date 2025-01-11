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
import simpleDirective from '@/objects/directive/simple'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.directive('tag', tagBehavior)
app.directive('simple-directive', simpleDirective)
app.mount('#app')
