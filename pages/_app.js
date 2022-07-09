import Layout from '../components/Layout'
import '../styles/globals.css'
import { ThemeProvider } from "next-themes";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );  
}

export default MyApp
