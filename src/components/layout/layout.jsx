import Head from "next/head";
import Footer from "../footer/footer";
import Header from "../header/header";
import layoutStyle from "./layout.module.css";

const MOBILE_DEV_MODE = false;

const Layout = ({main, children, content, className}) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        {MOBILE_DEV_MODE
          ? <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          : <meta name="viewport" content="width=1024, initial-scale=0.3" />
        }
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${layoutStyle.layout} ${className}`}>
        {!main ? <Header className="container" /> : null}

        <main className={layoutStyle.main}>
          <h1 className="visually-hidden"></h1>
          {children}
        </main>

        <Footer className="container" content={content.footer} />
      </div>
    </>
  );
};

export default Layout;
