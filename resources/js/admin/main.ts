import './bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import http from './http-common';
import i18n from './translations/i18n';
import {Store} from 'vuex';


const app = createApp(App);

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        // $filters: null, <-- in order to add filters
        // $notification: null, <-- in order to add global notification tool
        $store: Store<any>
    }
}

// app.config.globalProperties.$filters = filters; <-- in order to add filters
// app.config.globalProperties.$notification = notification; <-- in order to add global notification tool

app.use(i18n);
app.use(store);
app.use(router);
app.provide('$api', http);

app.config.compilerOptions.isCustomElement = (tag: any) => tag.includes('-');

app.mount('#app');
