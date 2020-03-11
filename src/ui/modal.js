export default class Modal {
  constructor() {
    this.modalOverlay = document.querySelector('.modal__overlay');
    this.modalContainer = document.querySelector('.modal__container');
    this.modalTriggerButton = document.querySelectorAll(
      '.modal__trigger-button'
    );
    this.modalCloseBtn = this.modalContainer.querySelector('.modal__close');
    this.modalContent = this.modalContainer.querySelector('.modal');
    this.modalImage = this.modalContent.querySelector('.modal__picture');
    this.modalTitle = this.modalContent.querySelector('.modal__title');
    this.modalCategory = this.modalContent.querySelector('.project__detail');
    this.modalLink = this.modalContent.querySelector('.visit-project');
  }

  openModal() {
    this.modalTriggerButton.forEach(button => {
      button.addEventListener('click', e => {
        document.querySelector('body').style.overflow = 'hidden';
        this.modalOverlay.classList.add('active');
        this.modalContainer.classList.add('active');
        let projectContainer =
          e.target.parentElement.parentElement.parentElement.parentElement;
        let projectImage = e.target.parentElement.parentElement.parentElement
          .querySelector('.project__image')
          .getAttribute('src');
        let projectTitle = e.target.parentElement.parentElement.querySelector(
          '.project__title'
        ).textContent;
        let projectLink = e.target.parentElement.parentElement.parentElement
          .querySelector('a')
          .getAttribute('href');
        this.modalTitle.textContent = projectTitle;
        this.modalImage.innerHTML = `<img src="${projectImage}" />`;
        if (projectContainer.classList.contains('web')) {
          this.modalCategory.innerHTML = `
            <li class="project__detail-item">
              <span class="project__detail-label">Kategorie:</span>
              Kódování webu
            </li>
          `;
        } else {
          this.modalCategory.innerHTML = `
            <li class="project__detail-item">
              <span class="project__detail-label">Kategorie:</span>
              Vývoj aplikace
            </li>
          `;
        }
        this.modalLink.setAttribute('href', projectLink);
      });
    });
  }

  closeModal() {
    this.modalContainer.addEventListener('click', e => {
      if (
        e.target.classList.contains('modal__wrapper') ||
        e.target.classList.contains('modal__close')
      ) {
        document.querySelector('body').style.overflow = 'auto';
        this.modalOverlay.classList.remove('active');
        this.modalContainer.classList.remove('active');
      }
    });
  }

  init() {
    this.openModal();
    this.closeModal();
  }
}
