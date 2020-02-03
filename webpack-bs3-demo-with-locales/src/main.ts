import { Aurelia } from 'aurelia-framework'
import { PLATFORM } from 'aurelia-pal';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'flatpickr/dist/flatpickr.min.css';
import './styles/styles.scss';
import './styles/slickgrid-styles.scss';
import 'aurelia-slickgrid/dist/lib/multiple-select/multiple-select.css';
import 'aurelia-slickgrid/dist/lib/multiple-select/multiple-select.js';
import 'aurelia-slickgrid/dist/styles/css/slickgrid-theme-bootstrap.css';
// import environment from './environment';
import * as environment from '../config/environment.json';
import * as Bluebird from 'bluebird';
import 'bootstrap';
import { localeFrench } from 'locales/fr';

/** Disable long stack traces for IE11 */
Bluebird.config({
  warnings: {
    wForgottenReturn: false
  },
  longStackTraces: false
});

// if you use CSS instead of SASS
import 'aurelia-slickgrid/dist/styles/css/slickgrid-theme-bootstrap.css';
import { GridOption } from 'aurelia-slickgrid';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-slickgrid'), (config: { options: GridOption }) => {
    // change any of the default global options
    config.options.gridMenu.iconCssClass = 'fa fa-bars';
    config.options.enableTranslate = false;
    // Provide a custom locales set
    // config.options.locale = 'fr'; // this helps certain elements to know which locale to use, for example the Date Filter/Editor
    // config.options.locales = localeFrench;
  });

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
