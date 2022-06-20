import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { parseCookies, destroyCookie } from "nookies";

// funcão para paginas que so podem ser acessadas por usuarios logados

export function canServeSideAuth<P>(fn: GetServerSideProps<P>) {

    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => { // o resultado dessa função, quando executada, será uma promise

        // se o usuario tiver um login salvo será redirecionado

        const coockies = parseCookies(ctx);

        if (coockies['@hampix.token']) {

            return {
                redirect: {
                    destination: '/dashboard',
                    permanent: false
                }
            }

        }

        return await fn(ctx);

    }

}