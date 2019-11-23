import SmoothScroll from 'smooth-scroll';
import { StickyNavigation, BackToTop } from './ui/scroll.js';

// Activate smooth scrolling
const scroll = new SmoothScroll('a[href*="#"]', {
  updateURL: false,
});

// Add active class to nav on scroll
const nav = document.querySelector('.navbar');

const stickyNav = new StickyNavigation(nav);
stickyNav.sticky();

// Showing/hiding back to top button
const link = document.querySelector('.back-to-top');

const backToTop = new BackToTop(link);
backToTop.init();
