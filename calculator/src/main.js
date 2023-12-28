/*import Vue from 'vue'
import App from './App'

new Vue({
    el:'#app',
    render(createElement){
        return createElement(App)
    }
}).$mount("#app")*/

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
