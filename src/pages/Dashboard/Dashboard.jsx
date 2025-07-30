import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'
import { Grid, GridItem } from "@chakra-ui/react";
import Transactions from './components/Transactions';
import Infocard from './components/Infocard';

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2,1fr)",
        }}
        gap={6}
      >
        <GridItem colSpan={{
          base: 1,
          xl: 2,
        }}>
          <PortfolioSection />
        </GridItem>

        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <Infocard inverted={false} imgUrl="/Visual1.svg" tagText="Loan" text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"/>
        </GridItem>
        <GridItem colSpan={1}>
          <Infocard inverted={true} imgUrl="/Visual2.svg" tagText="Contact" text="Learn more about our real estate, mortgage, and  corporate account services"/>
        </GridItem>
      </Grid>


    </DashboardLayout>
  )
}

export default Dashboard