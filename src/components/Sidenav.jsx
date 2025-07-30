import React from 'react'
import { Box, HStack, Stack, Icon, Text, Heading }  from "@chakra-ui/react"
import { RiAppsFill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Sidenav = () => {

  const navLinks = [{
    icon : RiAppsFill,
    text : "DashBoard",
    link : "/"
  }, {
    icon : GrTransaction,
    text : "Transactions",
    link : "/transaction"
  }]
  return (
    <Stack 
    bg="white"
    justifyContent="space-between" 
    width={{
      base: "full",
      lg: '16rem'
    }}
    height="100vh" 
    boxShadow={{
      base: 'none',
      lg: 'block'
    }}
    >
      <Box>
        <Heading textAlign="center" pt="3.5rem" fontSize="20px" as="h1">CRYPTOVAULT</Heading>
        <Box mx={3} mt={6} gap={3}>
          {navLinks.map((nav)=>(
          <Link to={nav.link} key={nav.text}>
            <HStack py={3} px={4} _hover={{bg: "#F3F3F7", color:"#171717"}}  color="#797E82" borderRadius="10px">
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
            </HStack>
          </Link>
        ))}
        </Box>
      </Box>
      
      <Box>
      <Link to="/support">
        <HStack mx={3} mt={6} gap={3} py={3} px={4} _hover={{bg: "#F3F3F7", color:"#171717"}} color="#797E82" borderRadius="10px" mb={6}>
          <Icon as={BiSupport}  />
          <Text fontSize="14px" fontWeight="medium" p>Support</Text>
        </HStack>
      </Link>
      </Box>
      
    </Stack>
    
  ) 
}

export default Sidenav