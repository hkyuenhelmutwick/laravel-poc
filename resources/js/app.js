import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia'
import Layout from './components/Layout.vue';
import axios from 'axios';
import { useAuthStore } from './stores/auth';
import auth from './middleware/auth';

// Create Pinia instance
const pinia = createPinia()

// Set the base URL for all axios requests
axios.defaults.baseURL = '/api'

// Add token if it exists
const token = localStorage.getItem('token')
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}


// Define routes
const routes = [
    {
        path: '/',
        component: Layout,
        meta: { requiresAuth: true },
        beforeEnter: auth,
        children: [
            { path: '/', component: () => import('./pages/Home.vue') },
            { path: '/tender', component: () => import('./pages/TenderStep1.vue') },
            { path: '/tender/evaluation', component: () => import('./pages/TenderStep2.vue') },
            { path: '/tender-form-template', component: () => import('./pages/TenderFormTemplate.vue') },
            { path: '/external-panel-interviewer', component: () => import('./pages/ExternalPanelInterviewer.vue') },
            { path: '/technical-evaluation', component: () => import('./pages/TechnicalEvaluation.vue') },
            { path: '/fee-evaluation', component: () => import('./pages/FeeEvaluation.vue') },
            { path: '/tender-evaluation-score', component: () => import('./pages/TenderEvaluationScore.vue') },
            { path: '/user', component: () => import('./pages/User.vue') },
            { path: '/role', component: () => import('./pages/Role.vue') },
            { path: '/function-permission', component: () => import('./pages/FunctionPermission.vue') },
            { path: '/tender/vendor', component: () => import('./pages/TenderStep3.vue') },
            { path: '/tender/overview', component: () => import('./pages/TenderStep4.vue') },
        ]
    },
    {
        path: '/login',
        component: () => import('./pages/Login.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(Layout);
app.use(router);
app.use(pinia);
app.mount('#app');
