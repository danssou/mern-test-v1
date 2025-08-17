import { Box, Button, Heading, HStack, IconButton, Image, Input, Text, useColorModeValue, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useProductStore } from './store/product'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,} from '@chakra-ui/react'


const ProductCard = ({product}) => {

    const [updatedProduct, setUpdatedProduct] = useState(product)

    const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra Modal
    const textColor= useColorModeValue("gray..600", "gray.200")
    const bg= useColorModeValue("white", "gray.800")


    //State management
    const {deleteProduct, updateProduct} = useProductStore();
    const toast = useToast();

    const handleDelete = async (p_ID) => {
       const {success, message} = await deleteProduct(p_ID);
       if(!success) {
        toast({
            title: 'Oops',
            description: message,
            status: 'error',
            duration: 9000,
            isClosable: true,
        });
        } else {
        toast({
            title: 'Success',
            description: message,
            status: 'success',
            duration: 9000,
            isClosable: true,
            })
    }

}


    const handleUpdateProduct = async (p_ID, updatedProduct) => {
        const {success, message } = await updateProduct(p_ID, updatedProduct);
        if(!success) {
            toast({
                title: 'Oops',
                description: message,
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
            } else {
            toast({
                title: 'Success',
                description: message,
                status: 'success',
                duration: 9000,
                isClosable: true,
                })
         }
         
        onClose();
    }



  return (
    <Box
     shadow='lg'
     rounded='lg'
     overflow='hidden'
     transition='all 0.3s'
     _hover={ {transform: "translateY(-5px)", shadow: "xl"}}
     bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit='cover'  />

        <Box p={4} >
            <Heading as={'h3'} size={'md'} mb={2} >
                {product.name}
            </Heading>

            <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4} >
                ${product.price}
            </Text>

            <HStack spacing={2}>
                <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
                <IconButton icon={<DeleteIcon />} onClick={() => handleDelete(product._id)} colorScheme='red' />
                
            </HStack>
        </Box>


        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4} >
                                    <Input 
                                    placeholder='Product Name'
                                    name='name'
                                    value={updatedProduct.name}
                                    bgColor={"gray.900"}
                                    onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
                                     />
                                    <Input 
                                    placeholder='Price'
                                    name='price'
                                    type='number'
                                    value={updatedProduct.price}
                                    bgColor={"gray.900"}
                                    onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
                                     />
                                    <Input 
                                    placeholder='Image URL'
                                    name='image'
                                    value={updatedProduct.image}
                                    bgColor={"gray.900"}
                                    onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
                                     />
                                    {/* <Button colorScheme='blue' onClick={'handleAddProduct'} w='full' > 
                                      Add Product
                                    </Button> */}
                                  </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)} >
                        Update
                        </Button>
                        <Button variant='ghost' colorScheme='red' onClick={onClose} >Cancel</Button>
                    </ModalFooter>
                </ModalContent>
      </Modal>
    </Box>
  )
}

export default ProductCard