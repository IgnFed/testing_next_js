import { background, Box, useColorModeValue } from "@chakra-ui/react";

export default function Acrylic({children}){
  return(
    <Box
      style={{
        backdropFilter: "blur(25px) saturate(125%)",
        transition:"background .1s",
        backgroundColor: useColorModeValue("rgba(50,50,50,.3)", "rgba(255,255,255,.3)")
      }}
    >
      {children}
    </Box>
  )
}