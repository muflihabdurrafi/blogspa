import Navbar from "../Navbar";
import Footer from "../Footer";
import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
    children: ReactNode;
    pageTitle: String;
}

const Layout = (props: LayoutProps) => {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>{pageTitle} | Next JS Blog SPA</title>
                <meta name="description" content="Next JS Blog SPA by Muflih" />
            </Head>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
