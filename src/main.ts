import './assets/main.css'

import { createApp, ref } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/reset.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.component(
  // 注册的名字
  'MysComponent',
  // 组件的实现
  {
    setup() {
      const count = ref(0)
      return { count }
    },
    template: `
            123123213232saddasdsadsads
            `
  }
)

app.mount('#app')
