import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react"
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const PortfolioSection = () => {
    return (
        <HStack bg="white" borderRadius="xl" p={6} justifyContent="space-between"
            flexDirection={{
                base: "column",
                xl: "row"
            }}
            align={{
                base: "flex-start",
                xl: "center"
            }}
        >
            <HStack spacing={{
                base: 0,
                xl: 16,
            }} flexDirection={{
                base: "column",
                xl: "row"
            }}
                align={{
                    base: "flex-start",
                    xl: "center"
                }}>
                <Stack>
                    <HStack>
                        <Text fontWeight={500} fontSize="14px" color="#535D66">Total Portfolio Value</Text>
                        <Icon as={CiCircleInfo} size="14px" />
                    </HStack>
                    <Text fontSize="24px" fontWeight={500}>₹ 112,312.24</Text>
                </Stack>
                <Stack>
                    <HStack>
                        <Text fontWeight={500} fontSize="14px" color="#535D66">Wallet Balances</Text>
                    </HStack>
                    <HStack spacing={6} flexDirection={{
                        base: "column",
                        sm: "row"
                    }}
                        align={{
                            base: "flex-start",
                            sm: "center"
                        }}>
                        <HStack>
                            <Text fontSize="24px" fontWeight={500}>22.39401000</Text><Tag colorScheme='gray'>BTC</Tag>
                        </HStack>
                        <HStack>
                            <Text fontSize="24px" fontWeight={500}>₹ 1,300.00</Text><Tag colorScheme='gray'>INR</Tag>
                        </HStack>
                    </HStack>
                </Stack>
            </HStack>

            <HStack>
                <Button
                    leftIcon={
                        <Icon as={FaArrowDown} />
                    }
                >Deposit</Button>
                <Button leftIcon={<Icon as={FaArrowUp} />}>Withdraw</Button>
            </HStack>
        </HStack>
    )
}

export default PortfolioSection