import { FC } from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import '../styles/utils.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
};

export default App;
