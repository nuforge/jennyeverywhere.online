import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import App from './App.vue'
import router from './router'

import {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VAppBarTitle,
  VToolbar,
  VToolbarTitle,
  VContainer,
  VMain,
  VLayout,
  VResponsive,
  VNavigationDrawer,
  VList,
  VListItem,
  VForm,
  VTextarea,
  VTable,
  VFileInput,
  VRow,
  VCol,
  VTextField,
  VImg,
  VBtn,
  VBtnToggle,
  VAvatar,
  VBadge,
  VIcon,
  VCard,
  VCardItem,
  VCardTitle,
  VCardText,
  VCardActions,
  VSheet,
  VDialog,
  VCheckbox,
  VSpacer,
  VDivider,
  VFooter,
  VBottomSheet,
  VChip,
  VChipGroup,
  VSelect,
  VAutocomplete,
  VItem,
  VItemGroup,
} from 'vuetify/components'

const app = createApp(App)
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#2B75B1',
          secondary: '#00CC88',
          tertiary: '#9E3E3B',
          quaternary: '#FFBB00',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#2B75B1',
          secondary: '#00CC88',
          tertiary: '#9E3E3B',
          quaternary: '#FFBB00',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi', // 'mdi' is Material Design Icons; use 'md' for Material Icons
    aliases: {
      ...aliases,
      next: 'mdi-arrow-right',
      upvote: 'mdi-arrow-up',
      downvote: 'mdi-arrow-down',
      comment: 'mdi-comment',
      favorite: 'mdi-heart',
      share: 'mdi-share',
      scarf: '🧣',
    },
    sets: {
      mdi,
    },
  },
  components: {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VAppBarTitle,
    VToolbar,
    VToolbarTitle,
    VContainer,
    VMain,
    VLayout,
    VResponsive,
    VNavigationDrawer,
    VList,
    VListItem,
    VForm,
    VTextarea,
    VTable,
    VFileInput,
    VRow,
    VCol,
    VTextField,
    VImg,
    VCard,
    VCardItem,
    VCardTitle,
    VCardText,
    VCardActions,
    VSheet,
    VIcon,
    VBtn,
    VBtnToggle,
    VAvatar,
    VBadge,
    VDialog,
    VSelect,
    VAutocomplete,
    VCheckbox,
    VSpacer,
    VDivider,
    VBottomSheet,
    VFooter,
    VChip,
    VChipGroup,
    VItem,
    VItemGroup,
  },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
