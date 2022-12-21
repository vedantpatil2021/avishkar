import React,{useState} from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    Stack,
    Button,
    Select,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';
import { GrievanceList } from './data/GrievanceData'
import { UniversityData } from './data/UniversityData';
import { db } from '../firebase/Firebase';
import { useNavigate } from 'react-router-dom'
import { collection,addDoc } from 'firebase/firestore'
import Page201 from '../status/Page201';

function GrievanceForm() {
    const navigate = useNavigate();
    const [addItem, setAddItem] = useState({
        grievancetype: "",
        university: "",
        institutename: "",
        username: "",
        course: "",
        rollno:"",
        email:"",
        grievancedesc:"",
        attachdoc: "",
        collegestatus: "pending",
        universitystatus: "pending",
        mainorganizationstatus: "pending"
    })


    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setAddItem((values) => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        setAddItem(addItem);
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "uploadgrievance"), {
                ...addItem
            });
            console.log(docRef)
            navigate(<Page201/>)
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }
    return (
        <div>
            <Flex
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack w='100%' spacing={8} maxW={'full'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'6xl'} textAlign={'center'}>
                            Upload Grievance
                        </Heading>
                    </Stack>
                    <Box
                        w='100%'
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <form onSubmit={handleSubmit}>
                            <FormControl p='2'>
                                <FormLabel>Grievance Type</FormLabel>
                                <Select name='grievancetype' value={addItem.grievancetype} placeholder='Select Grievance Type' onChange={handleInput} isRequired>
                                    {
                                        GrievanceList && GrievanceList.map((o) => {
                                            return (<option value={o.type}>{o.type}</option>)
                                        })
                                    }
                                </Select>
                            </FormControl>
                            <FormControl p='2'>
                                <FormLabel>University</FormLabel>
                                <Select name='university' value={addItem.university} placeholder='Select University' onChange={handleInput}>
                                    {
                                        UniversityData && UniversityData.map((o) => {
                                            return (<option value={o.UniversityName}>{o.UniversityName}</option>)
                                        })
                                    }
                                </Select>
                            </FormControl>
                            <FormControl p='2'>
                                <FormLabel>Institute Name</FormLabel>
                                <Input type='text' name='institutename' value={addItem.institutename} onChange={handleInput} />
                            </FormControl>
                            <FormControl p='2'>
                                <FormLabel>Name</FormLabel>
                                <Input type='text' name='username' value={addItem.username} onChange={handleInput} />
                            </FormControl>
                            <FormControl p='2'>
                                <FormLabel>Course</FormLabel>
                                <Input type='text' name='course' value={addItem.course} onChange={handleInput} />
                            </FormControl>
                            <FormControl p='2'>
                                <FormLabel>Roll Number</FormLabel>
                                <Input type='text' name='rollno' value={addItem.rollno} onChange={handleInput} />
                            </FormControl>
                            <FormControl p='2'>
                                <FormLabel>Email ID</FormLabel>
                                <Input type='text' name='email' value={addItem.email} onChange={handleInput} />
                            </FormControl>
                            <FormControl p='2'>
                                <FormLabel>Describe Grievance</FormLabel>
                                <Input type='text' name='grievancedesc' value={addItem.grievancedesc} onChange={handleInput} />
                            </FormControl>
                            <FormControl p='2'>
                                <FormLabel>Attach Document</FormLabel>
                                <Input type='file' name='attachdoc' value={addItem.attachdoc} onChange={handleInput} />
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }} type='submit'>
                                    Submit
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Flex>
        </div>
    )
}

export default GrievanceForm 