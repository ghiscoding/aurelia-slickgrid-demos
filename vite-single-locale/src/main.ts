import { RouterConfiguration } from '@aurelia/router';
import Aurelia from 'aurelia';
import 'bootstrap';
import { AureliaSlickGridConfiguration } from 'aurelia-slickgrid';
import DOMPurify from 'dompurify';

import { DateFormatValueConverter, DecimalValueConverter, StringifyValueConverter } from './examples/resources/value-converters';
import { MyApp } from './my-app.js';

Aurelia
  // Register all exports of the plugin
  .register(
    RouterConfiguration.customize({
      activeClass: 'active',
      useUrlFragmentHash: true,
      useHref: true,
    }),
  )
  .register(
    AureliaSlickGridConfiguration.customize((config) => {
      // change any of the default global options
      config.options.gridMenu!.iconCssClass = 'mdi mdi-menu';

      // we strongly suggest you add DOMPurify as a sanitizer
      config.options.sanitizer = (dirtyHtml) => DOMPurify.sanitize(dirtyHtml, { ADD_ATTR: ['level'], RETURN_TRUSTED_TYPE: true });
    })
  )
  .register(DecimalValueConverter, StringifyValueConverter, DateFormatValueConverter)
  .app(MyApp)
  .start();
