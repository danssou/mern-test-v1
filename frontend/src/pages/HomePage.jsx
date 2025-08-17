import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../components/store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();

  }, [fetchProducts])
  
  console.log("Products", products)
  
  return (
    <Container maxW='container.xl' py={12} >
      <VStack spacing={8} >
        <Text
        bgGradient="linear(to-r, cyan.400, blue.500)"
        bgClip={"text"}
        fontWeight={"bold"}
        fontSize={{base:"20", sm: "22"}}
        textAlign={"center"}
        >
          Current Products 
        </Text>

        <SimpleGrid
          columns={{
            base:1,
            md:2,
            lg:3,
          }}
          spacing={10}
          width={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

        </SimpleGrid>

          {products.lengtth === 0 && (
            <Text
          fontSize={"xl"}
          color={"gray.500"}
          fontWeight="bold"
          textAlign={"center"}
        >
         No product found 🥴 {" "}
          <Link to={"/create"} >
            <Text as="span" color='blue.500' _hover={{ textDecoration: "underline"}} >
              Create a product
            </Text>
          </Link>
        </Text>
          )}
        
      </VStack>
    </Container>
  )
}

export default HomePage