import { Aurelia } from 'aurelia-framework'
import { PLATFORM } from 'aurelia-pal';
import { TCustomAttribute } from 'aurelia-i18n';
import * as Backend from 'i18next-xhr-backend';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'flatpickr/dist/flatpickr.min.css';
import './styles/styles.scss';
import './styles/slickgrid-styles.scss';
import 'aurelia-slickgrid/dist/lib/multiple-select/multiple-select.css';
import 'aurelia-slickgrid/dist/lib/multiple-select/multiple-select.js';
// import environment from './environment';
import * as environment from '../config/environment.json';
import * as Bluebird from 'bluebird';
import 'bootstrap';

/** Disable long stack traces for IE11 */
Bluebird.config({
  warnings: {
    wForgottenReturn: false
  },
  longStackTraces: false
});

// if you use CSS instead of SASS
import 'aurelia-slickgrid/dist/styles/css/slickgrid-theme-bootstrap.css';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-slickgrid'), config => {
    // change any of the default global options
    config.options.gridMenu.iconCssClass = 'fa fa-bars';
  });

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-i18n'), instance => {
    let aliases = ['t', 'i18n'];
    // add aliases for 't' attribute
    TCustomAttribute.configureAliases(aliases);

    // register backend plugin
    instance.i18next.use(Backend);

    // adapt options to your needs (see http://i18next.com/docs/options/)
    // make sure to return the promise of the setup method, in order to guarantee proper loading
    return instance.setup({
      backend: {                                  // <-- configure backend settings
        loadPath: 'assets/locales/{{lng}}/{{ns}}.json', // <-- XHR settings for where to get the files from
      },
      attributes: aliases,
      lng: 'en',
      fallbackLng: 'en',
      debug: false
    });
  });

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
