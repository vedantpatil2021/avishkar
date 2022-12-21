import React from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useUserAuth } from '../context/UserAuthContext';
import { createUserDoc } from '../firebase/Firebase';

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    const toast = useToast()
    let navigate = useNavigate();


    const handleSubmit = async (e) => {
        const otherData = {
            displayName: name,
        }
        e.preventDefault();
        setError("");
        try {
            const user = await signUp(email, password);
            await createUserDoc(user, otherData);
            navigate("/login");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Sign up
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool features ✌️
                        </Text>
                    </Stack>
                    {error && <Button
                        onClick={() =>
                            toast({
                                title: `${error}`,
                                status: error,
                                variant: 'top-accent',
                                isClosable: true,
                            })
                        }
                    >
                        Show {error} toast
                    </Button>}
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}
                    >
                        <Stack spacing={4}>
                            <form onSubmit={handleSubmit}>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" onChange={(e) => setName(e.target.value)} />
                                </FormControl>
                                <FormControl id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                                </FormControl>
                                <FormControl id="password" isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
                                        <InputRightElement h={'full'}>
                                            <Button
                                                variant={'ghost'}
                                                onClick={() =>
                                                    setShowPassword((showPassword) => !showPassword)
                                                }>
                                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        loadingText="Submitting"
                                        size="lg"
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }} type="submit">
                                        Sign up
                                    </Button>
                                </Stack>
                                <Stack pt={6}>
                                    <Text align={'center'}>
                                        Already a user? <Link href='/login' color={'blue.400'}>Login</Link>
                                    </Text>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </div>
    )
}

export default Register