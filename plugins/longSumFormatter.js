export default (_, inject) => {
  inject('longSumFormatter', (val) => (val ? val.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') : '0'));
};
