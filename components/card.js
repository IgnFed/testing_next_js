import { Box, Flex, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";

const PARADIGMS_COLORS = ["#F454E6", "#FC5783", "#9AFB5699", "#A361F3", "#FF0044"]

export default function Card({
  language="",
  type="",
  borderColor="",
  paradigms=[],
  shortDescription="",
}){
  
  return(
    <Box pos="relative"
      bg={useColorModeValue("#444", "whiteAlpha.900")}
      color={useColorModeValue("white", "black")}
      borderRightRadius={4}
      overflowY="hidden"
    >

        <Box as="span" 
          pos={"absolute"}
          h="100%"
          w="3px"
          bg={borderColor}
        />

        <Grid p={"1rem"} >

        <GridItem
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Flex
            justifyContent="space-between"
          >
            <p>{language}</p>
            <Box as="p" fontSize="sm" >{type}</Box>
          </Flex>

          <Box fontSize={"x-small"} w="100%" h={7} display="flex">
            <p>Paradigms: </p>
            <Box overflowX="auto">
              {
                paradigms.map((paradigm, idx)=>(
                  <Box display="inline-block" m=".3em" mt="0" color="#fff" p="0.5" w="fit-content" as="p" key={idx}
                    bg={PARADIGMS_COLORS[(idx)%5]}
                  >
                    {paradigm}
                  </Box>
                ))
              }
            </Box>
          </Box>
        </GridItem>
        <GridItem display="flex" fontSize="sm">
          <p>
          {shortDescription}
          </p>
        </GridItem>
      </Grid>
    </Box>
  )
}