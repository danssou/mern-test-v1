import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { CiLight, CiDark } from "react-icons/ci"


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4} >
      <Flex 
      h={16} 
      alignItems={'center'} 
      justifyContent={'space-between'}
      flexDir={{
        base: "column",
        sm:"row"
      }}
      >
        <Text
        bgGradient="linear(to-r, cyan.400, blue.500)"
        bgClip={"text"}
        color={"transparent"}
        fontWeight={"bold"}
        fontSize={{base:"22", sm: "28"}}
        textTransform={"uppercase"}
        >
          <Link to={"/"} > Bright Store 🧺</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"} >
          <Link to={"/create"} >
            <Button >
              <AiOutlinePlusSquare fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode} >
            {colorMode === "light" ? <CiLight /> : <CiDark /> }
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar