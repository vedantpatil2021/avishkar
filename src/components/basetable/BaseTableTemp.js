import React, { useState } from 'react'
import {
    Box,
    Flex,
    Button,
    Heading,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    ModalCloseButton,
    Input,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";
import { db } from '../../firebase/Firebase';
import { addDoc, collection } from 'firebase/firestore';

function BaseTableTemp(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState("");

    const addData = async () =>{
        const docRef = collection(db,`${props.collection}`);
        await addDoc(docRef,{
            name: data,
        })
        .then((doc)=>{
            console.log("data is created = ",doc.id);
        })
        .catch((err)=>{
            console.log("erroe => ",err);
        })
        onClose();
    }

    return (
        <div>
            {/* Sarting Template */}
            <Box
                p="2"
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.900")}
                borderBottom={1}
            >
                <Flex
                    h={16}
                    p="8"
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Box
                        w="100"
                        gap="30px"
                        display="flex"
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Heading as="h2" size="md" noOfLines={1}>
                            {props.name}
                        </Heading>
                    </Box>
                    {props.modal ? <Button colorScheme="teal" onClick={onOpen}>+ Add {props.name}</Button> : null}
                </Flex>
            </Box>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add {props.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl p="2">
                            <FormLabel>Add {props.name}</FormLabel>
                            <Input type="text" onChange={(e) => setData(e.target.value)} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="teal"
                            variant="outline"
                            mr={3}
                            onClick={onClose}
                        >
                            Close
                        </Button>
                        <Button colorScheme="teal" mr={3} onClick={addData}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default BaseTableTemp
