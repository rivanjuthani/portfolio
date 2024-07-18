import { AppWrapper } from '../context/controls'
import Router from 'next/router';
import Head from 'next/head'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyPersonal({ Component, pageProps }) {
    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    )
}

export default MyPersonal
