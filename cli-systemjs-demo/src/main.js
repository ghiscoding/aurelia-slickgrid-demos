import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'bootstrap';
import Backend from 'i18next-xhr-backend';
import environment from './environment';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  aurelia.use.plugin('aurelia-slickgrid', config => {
    // change any of the default global options
    config.options.enableExport = true;
    config.options.enableExcelExport = false;
    config.options.gridMenu.iconCssClass = 'fa fa-bars';
  });

  // aurelia i18n to handle multiple locales
  aurelia.use.plugin('aurelia-i18n', (instance) => {
    // register backend plugin
    instance.i18next.use(Backend);

    return instance.setup({
      backend: {
        loadPath: './assets/i18n/{{lng}}/{{ns}}.json',
      },
      lng: 'en',
      ns: ['aurelia-slickgrid'],
      defaultNS: 'aurelia-slickgrid',
      attributes: ['t', 'i18n'],
      fallbackLng: 'en',
      debug: false
    });
  });

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
