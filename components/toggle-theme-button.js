import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion, Variant } from "framer-motion";

const VARIANTS = {
  "initial": {opacity: 0, y:-10 },
  "animate": {opacity: 1, y:0 },
  "exit": {opacity: 0, y:10 },
}

export default function ThemeButton(){
  const { colorMode, toggleColorMode } = useColorMode();

  return(
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={useColorModeValue("light", "dark")}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={VARIANTS}
        transition={{duration:.2, type:"easeInOut"}}
    >
      <IconButton 
        icon={useColorModeValue(<SunIcon color="yellow"/>, <MoonIcon color="purple.500"/>)}
        colorScheme={useColorModeValue("facebook", "telegram")}
        onClick={toggleColorMode}
      />
    </motion.div>
    </AnimatePresence>
  )

}