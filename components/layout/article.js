import { motion } from "framer-motion";

export default function Layout({children, title, delay}){
  return(
    <motion.article
    initial={{opacity:0, y:10}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:10}}
    transition={{duration:1, delay}}
    >
      <>
        {
        title && (
          <Head>
            <title>{title}</title>
          </Head>
          )
        }
        {children}
      </>
    </motion.article>
  )
}