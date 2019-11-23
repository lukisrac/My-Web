export class StickyNavigation {
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

export class BackToTop {
  constructor(link) {
    this.link = link;
  }
  init() {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.link.style.opacity = '1';
        this.link.style.display = 'block';
      } else {
        this.link.style.opacity = '0';
        this.link.addEventListener('transitionend', () => {
          this.link.style.display = 'none';
        });
      }
    });
  }
}
