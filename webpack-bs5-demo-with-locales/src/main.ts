import Aurelia from 'aurelia';
import { MyApp } from './my-app';
// Css files imported in this main file are NOT processed by style-loader
// They are for sharedStyles in shadowDOM.
// However, css files imported in other js/ts files are processed by style-loader.
// import shared from './shared.css';
import { AureliaSlickGridConfiguration } from 'aurelia-slickgrid';
import { RouterConfiguration } from '@aurelia/router';
import { DateFormatValueConverter, DecimalValueConverter, StringifyValueConverter } from './examples/resources/value-converters';
import 'bootstrap';

// dynamic components that can be enhanced in Example 19, 26
import { CustomTitleFormatter } from './examples/slickgrid/custom-title-formatter';
import { EditorSelect } from './examples/slickgrid/editor-select';
import { FilterSelect } from './examples/slickgrid/filter-select';
import { Example19DetailView } from './examples/slickgrid/example19-detail-view';
import { Example19Preload } from './examples/slickgrid/example19-preload';

Aurelia
  // Register all exports of the plugin
  .register(
    RouterConfiguration.customize({ useHref: false, basePath: '/aurelia-slickgrid' }),

    // dynamic components to enhance
    CustomTitleFormatter,
    Example19DetailView,
    Example19Preload,
    EditorSelect,
    FilterSelect,
  )
  .register(AureliaSlickGridConfiguration.customize(config => {
    import('flatpickr/dist/l10n/fr');

    // change any of the default global options
    config.options.gridMenu!.iconCssClass = 'fa fa-bars';
  }))
  .register(DecimalValueConverter, StringifyValueConverter, DateFormatValueConverter)
  .app(MyApp)
  .start();
