import "../styles/globals.css";
import Header from "../components/Header/Header";

const Layout = ({ children }) => <div className="layout">{children}</div>;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
