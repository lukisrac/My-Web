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

// isotope
const grid = document.querySelector('.projects__container');
const iso = new Isotope(grid, {
  itemSelector: '.project__item',
  layoutMode: 'masonry',
});

const filters = document.querySelectorAll('.projects__filter-item');
const buttons = document.querySelectorAll('.projects__filter-category');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const thisItem = e.target.parentElement;
    filters.forEach(filter => {
      filter.classList.remove('active');
      if (thisItem === filter) {
        thisItem.classList.toggle('active');
      }
    });
    let filterValue = e.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  });
});
