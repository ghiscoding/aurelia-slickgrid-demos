import { Aurelia } from 'aurelia-framework'
import { PLATFORM } from 'aurelia-pal';
import { TCustomAttribute } from 'aurelia-i18n';
import Backend from 'i18next-xhr-backend';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'flatpickr/dist/flatpickr.min.css';
import './styles/styles.scss';
import './styles/slickgrid-styles.scss';
import 'multiple-select-modified/src/multiple-select.css';
import 'multiple-select-modified/src/multiple-select.js';
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
import '@slickgrid-universal/common/dist/styles/css/slickgrid-theme-bootstrap.css';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-slickgrid'), config => {
    // change any of the default global options
    config.options.gridMenu.iconCssClass = 'fa fa-bars';
  });

  // aurelia i18n to handle multiple locales
  aurelia.use.plugin(PLATFORM.moduleName('aurelia-i18n'), instance => {
    const aliases = ['t', 'i18n'];
    // add aliases for 't' attribute
    TCustomAttribute.configureAliases(aliases);

    // register backend plugin
    instance.i18next.use(Backend);

    return instance.setup({
      backend: {
        loadPath: 'assets/locales/{{lng}}/{{ns}}.json',
      },
      lng: 'en',
      defaultNS: 'translation',
      attributes: aliases,
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
