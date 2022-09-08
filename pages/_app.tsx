import type {AppProps} from 'next/app'
import '@styles/globals.css'

import { Provider } from 'react-redux';
import store from '@components/store/rootReducer';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
