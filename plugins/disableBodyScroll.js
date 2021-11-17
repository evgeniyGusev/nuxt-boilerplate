export default (_, inject) => {
  inject('disableBodyScroll', (disableScroll) => {
    if (disableScroll) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'initial';
    }
  });
};
