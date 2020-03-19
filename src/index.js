import SmoothScroll from 'smooth-scroll';
import IsotopeComponent from './modules/isotope';
import { StickyNavigation, BackToTop } from './modules/scroll.js';
import Modal from './modules/modal';
import { getCurrentYear } from './modules/currentYear';

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
getCurrentYear();

// Form validation and submition
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const phone = parseInt(formData.get('phone').trim());
  const serviceType = formData.get('service-type');
  const message = formData.get('message').trim();

  let isValidName,
    isValidEmail,
    isValidPhone,
    isValidServiceType,
    isValidMessage;

  if (name === '') {
    console.log('Zadejte prosím vaše jméno');
  } else {
    isValidName = true;
  }

  if (email === '') {
    console.log('Zadejte prosím váš email');
  } else {
    isValidEmail = true;
  }

  if (
    phone.toString().length < 9 ||
    phone.toString().length > 9 ||
    isNaN(phone)
  ) {
    console.log('Zadejte prosím správný formát čísla(123456789)');
  } else {
    isValidPhone = true;
  }

  if (serviceType === 'Vyberte...') {
    console.log('Vyberte prosím typ služby');
  } else {
    isValidServiceType = true;
  }

  if (message === '') {
    console.log('Zadejte prosím vaši zprávu');
  } else {
    isValidMessage = true;
  }

  if (
    isValidName &&
    isValidEmail &&
    isValidPhone &&
    isValidServiceType &&
    isValidMessage
  ) {
    console.log(name, email, phone, serviceType, message);
    fetch('../contact.php', {
      method: 'POST',
      body: formData,
    }).then(response => {
      if (response.ok) {
        contactForm.reset();
      } else {
        throw new Error('Něco se pokazilo!');
      }
    });
  }
});
