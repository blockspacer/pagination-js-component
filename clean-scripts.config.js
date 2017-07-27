module.exports = {
  build: [
    `rimraf dist/`,
    `rimraf demo/**/index.bundle-*.js`,
    `file2variable-cli src/vue.template.html -o src/vue-variables.ts --html-minify --base src`,
    `file2variable-cli src/angular.template.html -o src/angular-variables.ts --html-minify --base src`,
    `tsc -p src`,
    `tsc -p demo`,
    `lessc src/pagination.less > dist/pagination.css`,
    `cleancss -o dist/pagination.min.css dist/pagination.css`,
    `cleancss -o demo/index.bundle.css dist/pagination.min.css ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css`,
    `webpack --config demo/webpack.config.js`,
    `rev-static --config demo/rev-static.config.js`
  ],
  lint: [
    `tslint "src/**/*.ts" "src/**/*.tsx"`,
    `standard "**/*.config.js"`,
    `stylelint "src/**/*.less"`
  ],
  test: [
    'tsc -p spec',
    'karma start spec/karma.config.js'
  ],
  fix: [
    `standard --fix "**/*.config.js"`
  ],
  release: [
    `clean-release`
  ]
}
