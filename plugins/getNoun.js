const getNoun = require('nouns-number');

export default (_, inject) => {
  inject('getNoun', getNoun);
};
