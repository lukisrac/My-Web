import { Navigation } from './ui/scroll.js';

// Add active class to nav on scroll
const nav = document.querySelector('.navbar');

const stickyNav = new Navigation(nav);
stickyNav.sticky();

// Set smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  updateURL: false,
});
