import Script from 'next/script';
import '../../public/globals.css';

import { Provider } from 'react-redux';
import store from '../store/store';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Script src="https://kit.fontawesome.com/bf63fdfe50.js" />
      <Component {...pageProps} />
    </Provider>
  );
}
