import './bootstrap';
import { createApp } from 'vue';
import ExampleComponent from './components/ExampleComponent.vue';

// Create a new Vue application
const app = createApp({});

// Register components
// Example component registration:
// import ExampleComponent from './components/ExampleComponent.vue';
// app.component('example-component', ExampleComponent);

app.component('example-component', ExampleComponent);

// Mount the application
app.mount('#app');
