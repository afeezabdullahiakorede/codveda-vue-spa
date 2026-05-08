import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home }, // This is the Home page
  { path: '/about', component: About }, // This is the About page
  { path: '/contact', component: Contact } // This is the Contact page
];

const router = createRouter({
  history: createWebHistory(), // Keeps the URL looking normal (like /about instead of /#/about)
  routes
});

export default router;