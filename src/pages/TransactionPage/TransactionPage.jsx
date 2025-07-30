import { Card, Flex, Button, Tag, Stack, InputGroup, InputLeftElement, Input, InputRightElement, Box } from '@chakra-ui/react'
import DashboardLayout from '../../components/DashboardLayout'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from './components/TransactionTable'
import { CiSearch } from "react-icons/ci";
import { color } from 'framer-motion';

function TransactionPage() {

  const tabNames = [{
    name: "All",
    count: 349,
  },
  {
    name: "Deposit",
    count: 114,
  },
  {
    name: "Withdraw",
    count: 213,
  },
  {
    name: "Trade",
    count: 22,
  },
  ]

  return (
    <DashboardLayout>
      <Flex justify="end" mt={6} mb={3} px={{ base: 2, md: 6 }}>
        <Button size={{base:"sm", md:"md"}}>Export CSV</Button>
      </Flex>

      <Card px={{ base: 2, md: 4 }} py={{ base: 2, md: 4 }}>
        <Tabs>
          <TabList pt={4} px={4} display="flex" justifyContent="space-between" alignItems="center" flexDirection={{ base: "column", md: "row" }}>
            <Box display="flex" gap="2" flexWrap="wrap">
              {tabNames.map(
                (tab) => (
                  <Tab key={tab.name} display="flex" gap="2">
                    {tab.name} <Tag colorScheme='gray'>{tab.count}</Tag>
                  </Tab>
                )
              )}
            </Box>

            <InputGroup maxW="200px" paddingY={{base : 2, xl: 3 }} pr={2}  >
              <InputLeftElement
                pointerEvents='none'
                children={<CiSearch color='gray.300' />}
              />
              <Input type='input' placeholder='Search by ID or destination' />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>


        </Tabs>
      </Card>
    </DashboardLayout>
  )
}

export default TransactionPage