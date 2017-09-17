'use babel';

export default {

  activate(state) {
    require('atom-package-deps').install('ember-snippets', true);
  }

};
