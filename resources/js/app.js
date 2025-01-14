import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Layout from './components/Layout.vue';

// Define routes
const routes = [
    { path: '/', component: () => import('./pages/Home.vue') },
    { path: '/tender', component: () => import('./pages/Tender.vue') },
    { path: '/tender-form-template', component: () => import('./pages/TenderFormTemplate.vue') },
    { path: '/external-panel-interviewer', component: () => import('./pages/ExternalPanelInterviewer.vue') },
    { path: '/technical-evaluation', component: () => import('./pages/TechnicalEvaluation.vue') },
    { path: '/fee-evaluation', component: () => import('./pages/FeeEvaluation.vue') },
    { path: '/tender-evaluation-score', component: () => import('./pages/TenderEvaluationScore.vue') },
    { path: '/user', component: () => import('./pages/User.vue') },
    { path: '/role', component: () => import('./pages/Role.vue') },
    { path: '/function-permission', component: () => import('./pages/FunctionPermission.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(Layout);
app.use(router);
app.mount('#app');
