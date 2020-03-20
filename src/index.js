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

let isValidName, isValidEmail, isValidPhone, isValidServiceType, isValidMessage;

const validateEmail = email => {
  let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
};

const validateOnBlur = () => {
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
    if (
      !phone.toString().length < 9 ||
      !phone.toString().length > 9 ||
      !isNaN(phone)
    ) {
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
};

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const phone = parseInt(formData.get('phone').trim());
  const serviceType = formData.get('service-type');
  const message = formData.get('message').trim();

  validateOnBlur();

  if (name === '') {
    nameInput.classList.add('invalid');
  } else {
    isValidName = true;
    nameInput.classList.remove('invalid');
  }

  if (email === '' || !validateEmail(email)) {
    emailInput.classList.add('invalid');
  } else {
    isValidEmail = true;
    emailInput.classList.remove('invalid');
  }

  if (
    phone.toString().length < 9 ||
    phone.toString().length > 9 ||
    isNaN(phone)
  ) {
    phoneInput.classList.add('invalid');
  } else {
    isValidPhone = true;
    phoneInput.classList.remove('invalid');
  }

  if (serviceType === 'Vyberte...') {
    serviceTypeInput.classList.add('invalid');
  } else {
    isValidServiceType = true;
    serviceTypeInput.classList.remove('invalid');
  }

  if (message === '') {
    messageInput.classList.add('invalid');
  } else {
    isValidMessage = true;
    messageInput.classList.remove('invalid');
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
