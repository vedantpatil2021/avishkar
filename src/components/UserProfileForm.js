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


function UserProfileForm() {
    return (
        <Flex
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack w='100%' spacing={8} maxW={'full'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'6xl'} textAlign={'center'}>
                        User Profile
                    </Heading>
                </Stack>
                <Box
                    w='100%'
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box w='full'>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box w='full'>
                                <FormControl id="lastName" isRequired>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <HStack>
                            <Box w='full'>
                                <FormControl id="dob" isRequired>
                                    <FormLabel>Date Of Birth</FormLabel>
                                    <Input type="date" />
                                </FormControl>
                            </Box>
                            <Box w='full'>
                                <FormControl id="gender">
                                    <FormLabel>Gender</FormLabel>
                                    <Select placeholder='Gender' isRequired>
                                        <option value='option1'>Male</option>
                                        <option value='option2'>Female</option>
                                        <option value='option3'>Other</option>
                                    </Select>
                                </FormControl>
                            </Box>
                        </HStack>
                        <HStack>
                            <Box w='full'>
                                <FormControl id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" />
                                </FormControl>
                            </Box>
                            <Box w='full'>
                                <FormControl id="contactnum" isRequired>
                                    <FormLabel>Contact Number</FormLabel>
                                    <Input type="number" isRequired />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="address1" isRequired>
                            <FormLabel>Address 1</FormLabel>
                            <InputGroup>
                                <Input type='text' />
                            </InputGroup>
                        </FormControl>
                        <FormControl id="address2" isRequired>
                            <FormLabel>Address 2</FormLabel>
                            <InputGroup>
                                <Input type='text' />
                            </InputGroup>
                        </FormControl>
                        <HStack>
                            <Box w='full'>
                                <FormControl id="Country" isRequired>
                                    <FormLabel>Country</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box w='full'>
                                <FormControl id="state" isRequired>
                                    <FormLabel>State</FormLabel>
                                    <Input type="text" isRequired />
                                </FormControl>
                            </Box>
                        </HStack>
                        <HStack>
                            <Box w='full'>
                                <FormControl id="district" isRequired>
                                    <FormLabel>District</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box w='full'>
                                <FormControl id="state" isRequired>
                                    <FormLabel>State</FormLabel>
                                    <Input type="text" isRequired />
                                </FormControl>
                            </Box>
                            <Box w='full'>
                                <FormControl id="pincode" isRequired>
                                    <FormLabel>Pin Code</FormLabel>
                                    <Input type="number" isRequired />
                                </FormControl>
                            </Box>
                        </HStack>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default UserProfileForm;