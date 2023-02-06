import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export const MainTheme = {
  name:'MainTheme',
  light:{
    primary: '#0A94FF',
    secondary: '#707070',
    accent1: '#895BF1',
    accent2: '#F3654A',
    accent3: '#FFB536',
    accent4: '#1AD598',
    accent5: '#209840',
    accent6:'#005DA5',
    navbar_bg : '#fff',
    tabs_bg: '#fff',
    dashboard_bg: '#F4F5F6',
    table_bg: '#fff',
    card_bg: '#fff',
    card_border: '#E2E7F1',
    divider_border: '#E2E7F1',
    text: '#000027',
    text_light: '#fff',
    subtext: '#8D98A9',
    hint: '#B3BCCB',
    outline: '#E2E7F1',
    outline_dark: '#CED6E3',
    white: '#fff',
    black: '#000',
  },
  dark:{
    primary: '#0A94FF',
    secondary: '#707070',
    accent1: '#895BF1',
    accent2: '#F3654A',
    accent3: '#FFB536',
    accent4: '#1AD598',
    accent5: '#209840',
    accent6:'#005DA5',
    navbar_bg : '#191c1c.',
    tabs_bg: '#0d0e0e',
    dashboard_bg: '#0d0e0e',
    table_bg: '#191c1c',
    card_bg: '#191c1c',
    card_border: '#191c1c',
    divider_border: '#8b8b8b4d',
    text: '#e6ebef',
    text_light: '#fff',
    subtext: '#687375',
    hint: '#B3BCCB',
    outline: '#E2E7F1',
    outline_dark: '#CED6E3',
    white: '#000',
    black: '#fff',
  }
}

export default new Vuetify({
  breakpoint:{
    scrollBarWidth:5,
  },
  icons:{
    iconfont:'fa'
  },
  theme: { 
    themes:{
      light:MainTheme.light,
      dark:MainTheme.dark
    }
  },
})