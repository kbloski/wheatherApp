import { createApp, defineAsyncComponent} from 'vue'
import App from './App.vue'
import router from './router'
import store from './storage'

const BaseLoading = defineAsyncComponent( ()=> import("./components/UI/BaseLoading.vue"))
const BaseSearch = defineAsyncComponent( () => import('./components/UI/BaseSearch.vue'))
const BaseDropdown = defineAsyncComponent( () => import('./components/UI/BaseDropdown.vue'))
const BaseModal = defineAsyncComponent( () => import('./components/UI/BaseModal.vue'))
const BaseError = defineAsyncComponent( () => import('./components/UI/BaseError.vue'))

const app = createApp(App)

app.component('base-loading', BaseLoading)
app.component('base-search', BaseSearch)
app.component('base-dropdown', BaseDropdown)
app.component('base-modal', BaseModal)
app.component('base-error', BaseError)
app.use( router )
app.use( store )

app.mount('#app')
