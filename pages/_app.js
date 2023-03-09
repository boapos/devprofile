import Layout from "../components/Layout";
import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    (async () => {
      const WebFont = await import("webfontloader");
      WebFont.load({
        custom: {
          families: ["Poppins", "Roboto Slab"],
        },
      });
    })();
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
