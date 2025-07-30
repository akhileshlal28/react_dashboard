import { Stack, HStack, Text, Icon, Button, Flex, Image, Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import React from 'react'
import { CustomCard } from "../../../chakra/CustomCard"
import { CgArrowTopRight } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";


const PriceSection = () => {

    const timestamps = ["7:15 AM", "8:55 AM", "9:10 AM", "10:15 AM", "11:25 AM"];
    return (
        <CustomCard>
            <Flex justify="space-between" align="start">
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
                            <Text fontSize="24px" fontWeight={500}>22.39401000</Text>
                            <HStack fontWeight="medium" color="green.500">
                                <Icon as={CgArrowTopRight} />
                                <Text fontSize="sm" fontWeight={500}>22%</Text>
                            </HStack>
                        </HStack>
                    </HStack>
                </Stack>
                <HStack>
                    <Button
                        leftIcon={
                            <Icon as={IoMdAddCircleOutline} />
                        }
                    >Buy</Button>
                    <Button leftIcon={<Icon as={GrSubtractCircle} />}>Sell</Button>
                </HStack>
            </Flex>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <Flex justify="end">
                    <TabList p="3px">
                        <Tab>1H</Tab>
                        <Tab>1D</Tab>
                        <Tab>1W</Tab>
                        <Tab>1M</Tab>
                    </TabList>
                </Flex>

                <TabPanels>
                    <TabPanel>
                        <Image mt="48px" src='/Graph.svg'></Image>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>four!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <HStack justify="space-between">
                {timestamps.map((timestamp) => (
                    <Text key={timestamp} fontSize="sm" color="black.80">{timestamp}</Text>
                ))}
            </HStack>
        </CustomCard>
    )
}

export default PriceSection