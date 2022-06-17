import Head from "next/head";
import Image from "next/image";
import styles from '../../styles/home.module.scss';

import logoImg from '../../public/logo.png';
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

import Link from "next/link"; // componente de navegação

export default function Home() {
  return (
     <>
        <Head>
            <title>Hampix - login</title>
        </Head>

        <div className={styles.containerCenter}>

            <Image src={logoImg} alt='Logo hampix' />

            <div className={styles.login}>

                <form action="">

                    <Input placeholder="Digite seu email" type="text" />
                    <Input placeholder="Sua senha" type="password" />

                    <Button type='submit' loading={false}>Acessar</Button>

                </form>

                <Link href='/signup'>
                    <a className={styles.text}>Não possui um conta? Cadastre-se</a>
                </Link>

            </div>
            
        </div>

     </>
  )
}
