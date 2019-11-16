import { Navigation } from './ui/scroll.js';

const nav = document.querySelector('.navbar');

const stickyNav = new Navigation(nav);
stickyNav.sticky();
