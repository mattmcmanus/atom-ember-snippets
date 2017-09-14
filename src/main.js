'use babel';

export default {

  activate(state) {
    require('atom-package-deps').install('atom-handlebars');
  }

};
