import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import {LanguageProvider} from "../../store/LanguageContext";

const Layout = ({ children }) => {
    return(
        <LanguageProvider>
            <Head>
                <title>Renex - React Next SEO Marketing Agency Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Renex - React Next SEO Marketing Agency Template" />
                <meta name="og:title" property="og:title" content="Renex - React Next SEO Marketing Agency Template"/>
                <meta name="twitter:card" content="Renex - React Next SEO Marketing Agency Template"/>
                <link rel="canonical" href="https://renex-react.envytheme.com/"/>
            </Head>

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </LanguageProvider>
    );
}

export default Layout;