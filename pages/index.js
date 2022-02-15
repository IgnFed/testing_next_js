import { Container, Grid } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment } from "react";
import Card from "../components/card";
import Layout from "../components/layout/article";


const TEST_VALUES = [
  {
    language:"C",
    type:"Compiled",
    borderColor: "#4754ff",
    paradigms:["Functional", "Imperative", "Declarative"],
    shortDescription:"Very difficult language"
  },
  {
    language:"Java",
    type:"(bytecode) Compiled",
    borderColor: "#ff4747",
    paradigms:["Functional", "Imperative", "Declarative", "POO"],
    shortDescription:"Great Language"
  },
  {
    language:"JavaScript",
    type:"Interpreted",
    borderColor: "#84ff47",
    paradigms:["Functional", "Imperative", "Declarative", "POP"],
    shortDescription:"Perfect to build web apps"
  }
]

export default function Home(){
  return(
    <Layout>
      <Grid
        gridTemplateColumns={"repeat(auto-fill, minmax(300px, auto))"}
        gap={3}
        m="0 1rem"
      >
      {
        TEST_VALUES.map((values, idx)=>(
          <Layout delay={(idx/5) + (idx===0 ? 0 : .3)} >
            <Card
              {...values}
            />
          </Layout>
        ))
      }
      </Grid>
    </Layout>
  )
}