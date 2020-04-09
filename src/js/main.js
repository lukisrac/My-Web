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
const nameInput = contactForm.querySelector('#name');
const emailInput = contactForm.querySelector('#email');
const phoneInput = contactForm.querySelector('#phone');
const serviceTypeInput = contactForm.querySelector('#service-type');
const messageInput = contactForm.querySelector('#message');

let isValidName,
  isValidEmail,
  isValidPhone,
  isValidServiceType,
  isValidMessage = true;

const validateEmail = (email) => {
  let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
};

nameInput.addEventListener('blur', () => {
  if (nameInput.value !== '') {
    nameInput.classList.remove('invalid');
  }
});
emailInput.addEventListener('blur', () => {
  if (emailInput.value !== '' && validateEmail(emailInput.value)) {
    emailInput.classList.remove('invalid');
  }
});
phoneInput.addEventListener('blur', () => {
  if (phoneInput.toString().length === 9 && isNaN(phoneInput.value) === false) {
    phoneInput.classList.remove('invalid');
  }
});
serviceTypeInput.addEventListener('blur', () => {
  if (serviceTypeInput.value !== 'Vyberte...') {
    serviceTypeInput.classList.remove('invalid');
  }
});
messageInput.addEventListener('blur', () => {
  if (messageInput.value !== '') {
    messageInput.classList.remove('invalid');
  }
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const phone = parseInt(formData.get('phone').trim());
  const serviceType = formData.get('service-type');
  const message = formData.get('message').trim();

  if (name === '') {
    isValidName = false;
    nameInput.classList.add('invalid');
  } else {
    nameInput.classList.remove('invalid');
    isValidName = true;
  }

  if (email === '' || !validateEmail(email)) {
    isValidEmail = false;
    emailInput.classList.add('invalid');
  } else {
    emailInput.classList.remove('invalid');
    isValidEmail = true;
  }

  if (
    phone.toString().length < 9 ||
    phone.toString().length > 9 ||
    isNaN(phone)
  ) {
    isValidPhone = false;
    phoneInput.classList.add('invalid');
  } else {
    phoneInput.classList.remove('invalid');
    isValidPhone = true;
  }

  if (serviceType === 'Vyberte...') {
    isValidServiceType = false;
    serviceTypeInput.classList.add('invalid');
  } else {
    serviceTypeInput.classList.remove('invalid');
    isValidServiceType = true;
  }

  if (message === '') {
    isValidMessage = false;
    messageInput.classList.add('invalid');
  } else {
    messageInput.classList.remove('invalid');
    isValidMessage = true;
  }

  if (
    isValidName &&
    isValidEmail &&
    isValidPhone &&
    isValidServiceType &&
    isValidMessage
  ) {
    fetch('./contact.php', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      const p = document.createElement('p');
      p.className = 'final-state';
      contactForm.append(p);
      if (response.ok) {
        contactForm.reset();
        p.innerHTML = `<span>&#128522;</span> Děkuji za vyplnění formuláře. Co nejdříve se vám ozvu.`;
      } else {
        p.classList.add('error');
        p.innerHTML = `<span>&#128533;</span> Formulář se nepodařilo odeslat.<br> Nejspíš máte něco špatně vyplněného, zkuste to znovu.`;
        throw new Error('Něco se pokazilo!');
      }
    });
  }
});
