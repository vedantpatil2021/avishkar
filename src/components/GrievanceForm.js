import React from 'react'
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
import {GrievanceList} from './data/GrievanceData'
import { UniversityData } from './data/UniversityData';

function GrievanceForm() {
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
                    <form>
                        <FormControl p='2'>
                            <FormLabel>Grievance Type</FormLabel>
                            <Select placeholder='Select Grievance Type' isRequired>
                                {
                                    GrievanceList && GrievanceList.map((o) => {
                                        return(<option value='o.type'>{o.type}</option>)
                                    })
                                }
                            </Select>
                        </FormControl>
                        <FormControl p='2'>
                            <FormLabel>University</FormLabel>
                            <Select placeholder='Select University'>
                                {
                                    UniversityData && UniversityData.map((o) => {
                                        return(<option value='o.UniversityName'>{o.UniversityName}</option>)
                                    })
                                }
                            </Select>
                        </FormControl>
                        <FormControl p='2'>
                            <FormLabel>Institute Name</FormLabel>
                            <Input type='text'/>
                        </FormControl>
                        <FormControl p='2'>
                            <FormLabel>Name</FormLabel>
                            <Input type='text'/>
                        </FormControl>
                        <FormControl p='2'>
                            <FormLabel>Course</FormLabel>
                            <Input type='text'/>
                        </FormControl>
                        <FormControl p='2'>
                            <FormLabel>Roll Number</FormLabel>
                            <Input type='text'/>
                        </FormControl>
                        <FormControl p='2'>
                            <FormLabel>Email ID</FormLabel>
                            <Input type='text'/>
                        </FormControl>
                        <FormControl p='2'>
                            <FormLabel>Describe Grievance</FormLabel>
                            <Input type='text'/>
                        </FormControl>
                        <FormControl p='2'>
                            <FormLabel>Attach Document</FormLabel>
                            <Input type='file' />
                        </FormControl>
                    </form>
                </Box>
            </Stack>
        </Flex>
        </div>
    )
}

export default GrievanceForm 