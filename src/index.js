import SmoothScroll from 'smooth-scroll';
import IsotopeComponent from './ui/isotope';
import { StickyNavigation, BackToTop } from './ui/scroll.js';
import Modal from './ui/modal';

// Activate smooth scrolling
const scroll = new SmoothScroll('a[href*="#"]', {
  updateURL: false,
});

// Add active class to nav on scroll a activate toggler on smaller screens
const nav = document.querySelector('.navbar');

const stickyNav = new StickyNavigation(nav);
stickyNav.init();

// Showing/hiding back to top button
const link = document.querySelector('.back-to-top');

const backToTop = new BackToTop(link);
backToTop.init();

// Isotope layout
const grid = document.querySelector('.projects__container');

const isotope = new IsotopeComponent(grid);
isotope.init();

// Project modal
const projectModal = new Modal();
projectModal.init();

// Current year in copyright footer
const getCurrentYear = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  const copyrightYear = document.querySelector('.current-year');
  copyrightYear.textContent = currentYear;
};

getCurrentYear();
