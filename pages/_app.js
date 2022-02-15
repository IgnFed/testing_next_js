import { AnimatePresence } from "framer-motion";
import Chakra from "../components/chakra";
import Layout from "../components/layout/main";

export default function Web({Component, pageProps, router}){
  return(
    <Chakra cookies={pageProps.cookies}>
      <Layout currentPath={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} currentPath={router} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}