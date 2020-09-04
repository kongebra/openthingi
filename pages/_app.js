import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Header from "./layouts/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
