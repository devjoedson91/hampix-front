import { ChangeEvent, useState } from "react";
import Head from "next/head";
import styles from './styles.module.scss';
import { Header } from "../../components/Header";

import { canServeSideAuth } from "../../utils/canServeSideAuth";

import { FiUpload } from "react-icons/fi";

export default function Product() {

    const [avatarUrl, setAvatarUrl] = useState('');

    const [imageAvatar, setImageAvatar]  = useState(null);

    function handleFile(event: ChangeEvent<HTMLInputElement>) {

        if (!event.target.files) return;

        const image = event.target.files[0];

        if (!image) return;

        if (image.type === 'image/jpeg' || image.type === 'image/jpg' || image.type === 'png') {

            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(event.target.files[0]));

        }

    }

    return (

        <>

            <Head>
                <title>Novo Produto - Hampix</title>
            </Head>

            <div>
                <Header />

                <main className={styles.container}>

                    <h1>Novo Produto</h1>

                    <form className={styles.form}>

                        <label className={styles.labelAvatar}>
                            <span><FiUpload size={30} color='#fff'/></span>

                            <input 
                                type="file" 
                                accept="image/png, image/jpeg, image/jpg" 
                                onChange={handleFile}
                            />

                            {avatarUrl && (

                                <img 
                                    src={avatarUrl} 
                                    alt="foto do produto" 
                                    width={250} 
                                    className={styles.preview}
                                /> 

                            )}

                        </label>

                        <select>
                            <option>bebidas</option>
                            <option>pizzas</option>
                        </select>

                        <input 
                            type="text"
                            placeholder="Digite o nome do produto"
                            className={styles.input}
                        />

                        <input 
                            type="text"
                            placeholder="Preço do produto"
                            className={styles.input}
                        />

                        <textarea
                            placeholder="Descreva seu produto..."
                            className={styles.input}
                        ></textarea>

                        <button type="submit" className={styles.buttonAdd}>Cadastrar</button>

                    </form>

                </main>
            </div>

        </>

    );

}

export const getServerSideProps = canServeSideAuth(async (ctx) => {

    return {
        props: {}
    }

});