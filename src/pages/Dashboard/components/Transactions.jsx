import { Flex, Text, Stack, Icon, Grid, Divider, Button, Image, Box } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import { CustomCard } from "../../../chakra/CustomCard"
import { MdCurrencyRupee } from "react-icons/md";
import { FaBtc } from "react-icons/fa";


const Transactions = () => {
  const Transactions = [
    {
      id: "1",
      icon: MdCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM"
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM"
    },
    {
      id: "3",
      icon: MdCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM"
    },
  ]
  return (
    <CustomCard h="full">
      <Text fontSize="sm" color="#535D66" mb="6">
        Recent Transactions
      </Text>
      <Stack>
        {Transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider />}
            <Flex gap="4" py="2">
              <Grid placeItems="center" bg="#F3F3F7" boxSize={10} borderRadius="full">
                <Icon as={transaction.icon} boxSize={5} />
              </Grid>
              <Flex justify="space-between" align="center" width="full">
                <Stack spacing={0}>
                  <Text fontSize="sm" color="#171717">{transaction.text}</Text>
                  <Text fontSize="xs" color="#797E82">{transaction.timestamp}</Text>
                </Stack>
                <Text fontSize="sm" color={transaction.amount.startsWith('+') ? 'green.400' : 'red.400'} fontWeight="medium">
                  {transaction.amount}
                </Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" colorScheme='gray' mt="6">View All</Button>
    </CustomCard>
  )
}

export default Transactions