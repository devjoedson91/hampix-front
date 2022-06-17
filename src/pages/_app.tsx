import '../../styles/globals.scss';
import { AppProps } from 'next/app'; // importando appProps para tipar as propriedades da função myapp

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} /> // pageProps é todas as paginas do projeto
}

export default MyApp
