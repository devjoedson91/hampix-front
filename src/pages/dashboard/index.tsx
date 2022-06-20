import Head from "next/head";
import { canServeSideAuth } from "../../utils/canServeSideAuth";

import { Header } from "../../components/Header";

export default function Dashboard() {

    return (
        <>
            <Head>
                <title>Painel - Hampix</title>
            </Head>

            <div>
                <Header />
                <h1>Painel</h1>
            </div>
        </>
    );

}

export const getServerSideProps = canServeSideAuth(async (ctx) => {

    return {
        props: {}
    }

});