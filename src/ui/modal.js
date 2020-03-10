export class Modal {
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
  }

  openModal() {
    this.modalTriggerButton.forEach(button => {
      button.addEventListener('click', e => {
        document.querySelector('body').style.overflow = 'hidden';
        this.modalOverlay.classList.add('active');
        this.modalContainer.classList.add('active');
        let projectImage = e.target.parentElement.parentElement.parentElement
          .querySelector('.project__image')
          .getAttribute('src');
        let projectTitle = e.target.parentElement.parentElement.querySelector(
          '.project__title'
        ).textContent;
        this.modalTitle.textContent = projectTitle;
        this.modalImage.innerHTML = `<img src="${projectImage}" />`;
        console.log(projectImage);
      });
    });
  }

  closeModal() {
    this.modalCloseBtn.addEventListener('click', () => {
      document.querySelector('body').style.overflow = 'auto';
      this.modalOverlay.classList.remove('active');
      this.modalContainer.classList.remove('active');
    });
  }

  init() {
    this.openModal();
    this.closeModal();
  }
}
