import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'bootstrap';
import environment from './environment';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  aurelia.use.plugin('aurelia-slickgrid', config => {
    // change any of the default global options
    config.options.gridMenu.iconCssClass = 'fa fa-bars';
  });

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  //Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader');

  aurelia.start().then(() => aurelia.setRoot());
}
