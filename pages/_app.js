import "../styles/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => <div className="layout">{children}</div>;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}

export default MyApp;
