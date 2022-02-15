import { Box } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "../navbar";

export default function Layout({children, currentPath}){
  return(
    <Box as="main" pb={2}>
      <Head>
        <title>Programming Laguages</title>
        <link rel="icon" href="/public/favicon.ico" type="image/x-icon" />
      </Head>
      <NavBar currentPath={currentPath} />
      {children}
    </Box>
  )
}