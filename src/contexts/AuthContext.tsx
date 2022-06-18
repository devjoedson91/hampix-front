import { createContext, ReactNode, useState } from "react";

import { destroyCookie } from 'nookies';
import Router from 'next/router';

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type SignInProps = {
    email: string;
    password: string;
}

type AuthProviderProps = {

    children: ReactNode;

}

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {

    try {

        destroyCookie(undefined, '@hampix.token');

        // depois de destruir o token

        Router.push('/'); // manda o usuario para tela de login

    } catch(error) {

        console.log('erro ao deslogar: ', error);

    }

}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>();

    const isAuthenticated = !!user; // convertendo o user em boolean, se user tiver vazio essa variavel será false

    async function signIn({ email, password }: SignInProps) {

        console.log('dados para logar: ', email, password)

    }

    return (

        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut } /* tudo que esta dentro desse value qlq componente vai acessar*/} >

            { children  /* o children são as minhas paginas */}

        </AuthContext.Provider>

    );

}