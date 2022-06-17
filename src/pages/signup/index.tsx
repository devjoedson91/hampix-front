import Head from "next/head";
import Image from "next/image";
import styles from '../../../styles/home.module.scss';

import logoImg from '../../../public/logo.png';

import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

import Link from "next/link"; // componente de navegação

export default function SignUp() {
  return (
     <>
        <Head>
            <title>Faça seu cadastro agora</title>
        </Head>

        <div className={styles.containerCenter}>

            <Image src={logoImg} alt='Logo hampix' />

            <div className={styles.login}>

                <h1>Criando sua conta</h1>

                <form action="">
                    
                    <Input placeholder="Digite seu nome" type="text" />
                    <Input placeholder="Digite seu email" type="text" />
                    <Input placeholder="Sua senha" type="password" />

                    <Button type='submit' loading={false}>Cadastrar</Button>

                </form>

                <Link href='/'>
                    <a className={styles.text}>Não possui um conta? Faça o login</a>
                </Link>

            </div>
            
        </div>

     </>
  )
}
