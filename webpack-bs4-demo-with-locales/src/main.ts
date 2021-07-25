import { Aurelia } from 'aurelia-framework'
import { PLATFORM } from 'aurelia-pal';
import { GridOption } from 'aurelia-slickgrid';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'flatpickr/dist/flatpickr.min.css';
import './styles/styles.scss';
import './styles/slickgrid-styles.scss';
import 'multiple-select-modified/src/multiple-select.css';
import 'multiple-select-modified/src/multiple-select.js';
import * as environment from '../config/environment.json';
import 'bootstrap';
import { localeFrench } from 'locales/fr';

// if you use CSS instead of SASS
import '@slickgrid-universal/common/dist/styles/css/slickgrid-theme-bootstrap.css';

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-slickgrid'), (config: { options: GridOption }) => {
    // load necessary Flatpickr Locale(s), but make sure it's imported AFTER loading Aurelia-Slickgrid plugin
    import('flatpickr/dist/l10n/fr');

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

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
