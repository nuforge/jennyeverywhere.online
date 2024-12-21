import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { aliases as mdAliases, md } from 'vuetify/iconsets/md'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import VTag from './components/VTag.vue'

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
  VCardSubtitle,
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
  VTooltip,
  VColorPicker,
  VLabel,
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
      ...mdAliases,
      icon: 'mdi-emoticon-happy',
      next: 'mdi-arrow-right',
      upvote: 'mdi-arrow-up',
      downvote: 'mdi-arrow-down',
      comment: 'mdi-comment',
      favorite: 'mdi-heart',
      share: 'mdi-share',
      primary: 'mdi-cards-spade',
      secondary: 'mdi-cards-club',
      tertiary: 'mdi-cards-heart',
      quaternary: 'mdi-cards-diamond',
      scarf: '🧣',
      'persona-name': 'mdi-account-circle',

      'sta-attribute': 'md:edit_attributes',
      'sta-department': 'md:toggle_off',

      'sta-trait': 'mdi-star-four-points-outline',
      'sta-talent': 'mdi-star-four-points',
      'sta-value': 'mdi-star-four-points-small',
      'sta-focus': 'mdi-image-filter-center-focus',

      'sta-control': 'mdi-image-filter-center-focus-strong',
      'sta-daring': 'mdi-octagram',
      'sta-fitness': 'mdi-heart-pulse',
      'sta-presence': 'mdi-account-multiple',
      'sta-insight': 'mdi-head-snowflake',
      'sta-reason': 'mdi-brain',

      'sta-command': 'mdi-account-group',
      'sta-conn': 'mdi-gamepad',
      'sta-engineering': 'mdi-wrench',
      'sta-security': 'mdi-shield-account',
      'sta-medicine': 'mdi-hospital-box',
      'sta-science': 'mdi-atom-variant',

      'sta-species': 'mdi-account-box',
      'sta-environment': 'mdi-earth-box',
      'sta-upbringing': 'mdi-home-account',
      'sta-career': 'mdi-chart-areaspline',
      'sta-experience': 'mdi-note-edit',
      'sta-event': 'mdi-note-edit',

      'sta-stepone': 'mdi-account-box',
      'sta-steptwo': 'mdi-earth-box',
      'sta-stepthree': 'mdi-home-account',
      'sta-stepfour': 'mdi-chart-areaspline',
      'sta-stepfive': 'mdi-note-edit',
      'sta-stepsix': 'mdi-calendar-account',
      'sta-stepseven': 'mdi-checkbox-multiple-marked',
    },
    sets: {
      mdi,
      md,
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
    VCardSubtitle,
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
    VTag,
    VTooltip,
    VColorPicker,
    VLabel,
  },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
