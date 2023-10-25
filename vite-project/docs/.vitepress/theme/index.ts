import DefaultTheme from 'vitepress/theme';

import '@telekom/scale-components/dist/scale-components/scale-components.css';
import {
  applyPolyfills,
  defineCustomElements,
} from '@telekom/scale-components/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});

export default {
    ...DefaultTheme,
}