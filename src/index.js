import { Navigation } from './ui/scroll.js';

// Add active class to nav on scroll
const nav = document.querySelector('.navbar');

const stickyNav = new Navigation(nav);
stickyNav.sticky();
