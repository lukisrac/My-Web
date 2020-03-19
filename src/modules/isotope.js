import Isotope from 'isotope-layout';

export default class IsotopeComponent {
  constructor(container) {
    this.container = container;
    this.filters = document.querySelectorAll('.projects__filter-item');
    this.filterButtons = document.querySelectorAll(
      '.projects__filter-category'
    );
  }

  filter(iso) {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', e => {
        const thisItem = e.target.parentElement;
        this.filters.forEach(filter => {
          filter.classList.remove('active');
          if (thisItem === filter) {
            thisItem.classList.toggle('active');
          }
        });
        let filterValue = e.target.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
      });
    });
  }

  loadAll() {
    const moreBtn = document.querySelector('.btn-more');

    moreBtn.addEventListener('click', () => {
      document.querySelector('.projects__extended').style.display = 'block';
      const iso = new Isotope(this.container, {
        itemSelector: '.project__item',
        layoutMode: 'masonry',
      });

      moreBtn.remove();
    });
  }

  init() {
    window.addEventListener('load', () => {
      const iso = new Isotope(this.container, {
        itemSelector: '.project__item',
        layoutMode: 'masonry',
      });

      this.filter(iso);
      this.loadAll();
    });
  }
}
