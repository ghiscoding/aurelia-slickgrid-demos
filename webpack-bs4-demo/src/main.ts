import { Aurelia, PLATFORM } from 'aurelia-framework';
import { I18N, TCustomAttribute } from 'aurelia-i18n';
import Backend from 'i18next-xhr-backend';
import { GridOption } from 'aurelia-slickgrid';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'flatpickr/dist/flatpickr.min.css';
import './styles/styles.scss';
import './styles/slickgrid-styles.scss';
import 'bootstrap';

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
  });

  // aurelia i18n to handle multiple locales
  aurelia.use.plugin(PLATFORM.moduleName('aurelia-i18n'), (instance: I18N) => {
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
      debug: false,
      interpolation: { skipOnVariables: false }
    });
  });

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
