import React from 'react'
import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Heading,
    Stack,
    useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon} from '@chakra-ui/icons';
import DrawerComp from './Drawer';

function Navbar(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Flex justifyContent='center' alignItems='center' gap='2rem'>
                            {props.drawer === 'true' ? <DrawerComp/> : null}
                            <Heading fontSize='lg'>Logo</Heading>
                        </Flex>
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </div>
    )
}

export default Navbar
