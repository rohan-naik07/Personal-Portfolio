import {ThemeContextProvider} from "../components/theme";
import React, {useEffect} from "react";
import Head from "next/head";

function MyApp({Component, pageProps}){

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Rohan Naik</title>
            </Head>
            <ThemeContextProvider>
                <Component {...pageProps} />
            </ThemeContextProvider>
        </React.Fragment>
    )
}

export default MyApp;