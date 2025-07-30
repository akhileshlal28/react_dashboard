import React from 'react'
import { FaUser } from "react-icons/fa";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
    Container,
    Heading,
    Button,
    HStack,
    Box,
    Icon
} from '@chakra-ui/react'
import { FiMenu } from "react-icons/fi";

function Topnav( {title, onOpen} ) {
    return (
        <Box px={4} bg="white">
            <HStack maxW="70rem" h="16" justifyContent="space-between" mx="auto">
                <Icon as={FiMenu} onClick={onOpen} display={{
                    base: 'block',
                    lg:'none'
                }}/>
                <Heading fontWeight="medium" fontSize="28px">{ title }</Heading>
                <Menu>
                    <MenuButton as={Button}>
                        <Icon as={FaUser} size="xl"/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Log out</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    )
}

export default Topnav