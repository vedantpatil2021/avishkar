import { FcGoogle } from 'react-icons/fc';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Link,
    Heading,
    Text,
    useColorModeValue,
    Divider,
    Center,
    // useToast
} from '@chakra-ui/react';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from '../context/UserAuthContext';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();
    // const toast = useToast()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/dashboard");
        } catch (error) {
            console.log(error.message);
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
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                        </Text>
                    </Stack>
                    {/* {error && <Button
                        onClick={() =>
                            toast({
                                title: {error},
                                status: error,
                                variant: 'top-accent',
                                duration: 9000,
                                isClosable: true,
                            })
                        }
                    >
                        Show {error} toast
                    </Button>} */}
                    {error && <h1>{error}</h1>}
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <form onSubmit={handleSubmit}>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" onChange={(e) => setPassword(e.target.value)} />
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{ base: 'column', sm: 'row' }}
                                        align={'start'}
                                        justify={'space-between'} mt='2'>
                                        <Checkbox>Remember me</Checkbox>
                                    </Stack>
                                    <Button
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }} type='submit'>
                                        Sign in
                                    </Button>
                                    <Divider m='0' />
                                    <Center>
                                        <Button
                                            w={'full'}
                                            maxW={'md'}
                                            variant={'outline'}
                                            leftIcon={<FcGoogle />}
                                            onClick={handleGoogleSignIn}>
                                            <Center>
                                                <Text>Sign in with Google</Text>
                                            </Center>
                                        </Button>
                                    </Center>
                                    <Stack>
                                        <h6 style={{ textAlign: 'center' }}>Don't have an account?  <Link href='/register' color={'blue.400'}>Register here</Link></h6>
                                    </Stack>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </div>
    )
}

export default Login