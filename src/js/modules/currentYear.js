export const getCurrentYear = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  const copyrightYear = document.querySelector('.current-year');
  copyrightYear.textContent = currentYear;
};
