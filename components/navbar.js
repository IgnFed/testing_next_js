import NextLink from 'next/link'
import { Center, Link, useColorModeValue } from "@chakra-ui/react"
import ThemeButton  from './toggle-theme-button'

const ItemLink = ({children, href, currentPath, _target})=>{
  const isActive = href === currentPath.asPath;
  const nonActiveColor = useColorModeValue("gray.400", "whiteAlpha.900")

  return(
    <NextLink href={href} passHref>
      <Link
        p={2}
        borderRadius={"lg"}
        bg={isActive ? "#88ccca" : undefined}
        color={isActive ? "#202023" : nonActiveColor}
        target={_target}
      >
        {children}
      </Link>
    </NextLink>
  )
}


export default function NavBar({currentPath}){
  return(
    <Center
      mb={3}
    >
      <ThemeButton />
    </Center>
  )
}