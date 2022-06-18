import '../../styles/globals.scss';
import { AppProps } from 'next/app'; // importando appProps para tipar as propriedades da função myapp

import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {

  return (

    <AuthProvider>

        <Component {...pageProps} />

    </AuthProvider>

  ) // pageProps é todas as paginas do projeto

}

export default MyApp
