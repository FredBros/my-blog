import LayoutBlog from '../blog/components/layout/LayoutBlog'
import LayoutDefault from "../components/layout/LayoutDefault"
import LayoutPortfolio from "../portfolio/components/layout/LayoutPortfolio"
import '../styles/globals.css'
import { ThemeProvider } from "next-themes";


const layouts = {
  blog: LayoutBlog,
  default: LayoutDefault,
  portfolio: LayoutPortfolio,
};
function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <ThemeProvider defaultTheme="light">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );  
}

export default MyApp
