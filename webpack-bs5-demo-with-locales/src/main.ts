import Aurelia from 'aurelia';
import 'bootstrap';
// Css files imported in this main file are NOT processed by style-loader
// They are for sharedStyles in shadowDOM.
// However, css files imported in other js/ts files are processed by style-loader.
// import shared from './shared.css';
import { AureliaSlickGridConfiguration } from 'aurelia-slickgrid';
import DOMPurify from 'dompurify';
import { RouterConfiguration } from '@aurelia/router';

import { MyApp } from './my-app';
import { DateFormatValueConverter, DecimalValueConverter, StringifyValueConverter } from './examples/resources/value-converters';

// dynamic components that can be enhanced in Example 19, 26
import { CustomPagerComponent } from './examples/slickgrid/example42-pager';
import { CustomTitleFormatter } from './examples/slickgrid/custom-title-formatter';
import { EditorSelect } from './examples/slickgrid/editor-select';
import { FilterSelect } from './examples/slickgrid/filter-select';
import { Example19DetailView } from './examples/slickgrid/example19-detail-view';
import { ExampleDetailPreload } from './examples/slickgrid/example-detail-preload';
import { Example45DetailView } from './examples/slickgrid/example45-detail-view';
import { Example45Preload } from './examples/slickgrid/example45-preload';
import { Example47DetailView } from './examples/slickgrid/example47-detail-view';

Aurelia
  // Register all exports of the plugin
  .register(
    RouterConfiguration.customize({
      activeClass: 'active',
      useUrlFragmentHash: true,
      useHref: true,
    }),

    // dynamic components to enhance
    CustomTitleFormatter,
    CustomPagerComponent,
    Example19DetailView,
    ExampleDetailPreload,
    Example45DetailView,
    Example45Preload,
    Example47DetailView,
    EditorSelect,
    FilterSelect,
  )
  .register(AureliaSlickGridConfiguration.customize(config => {
    // change any of the default global options
    config.options.gridMenu!.iconCssClass = 'mdi mdi-menu';

    // we strongly suggest you add DOMPurify as a sanitizer
    config.options.sanitizer = (dirtyHtml) => DOMPurify.sanitize(dirtyHtml, { ADD_ATTR: ['level'], RETURN_TRUSTED_TYPE: true });
  }))
  .register(DecimalValueConverter, StringifyValueConverter, DateFormatValueConverter)
  .app(MyApp)
  .start();
