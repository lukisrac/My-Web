export class Navigation {
  constructor(container) {
    this.container = container;
  }
  sticky() {
    window.addEventListener('scroll', () => {
      const navHeight = this.container.scrollHeight;

      if (window.scrollY >= navHeight) {
        this.container.classList.add('sticky');
      } else {
        this.container.classList.remove('sticky');
      }
    });
  }
}
