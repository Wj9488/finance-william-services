"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const OperatingAndCashConversionCycle = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Operating Cycle & Cash Conversion Cycle" pageSubheading="Week 3"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>NWC Measures</mark>
                            <br/>
                            <br/>
                            A firm's <mark>Operating Cycle</mark> measures the time that elapses from the 
                            firm's receipt of raw materials to its collection of cash from the sale
                            of finished goods. 
                            <br/>
                            <br/>
                            A firm's <mark>Cash Conversion Cycle</mark> is the elapsed time 
                            between the points at which a firm pays cash for raw materials and 
                            at which it recieves cash for finished goods. 
                            <br/>
                            <br/>
                            The difference between the Operating Cycle and the Cash Cycle indicates
                            the amount of time for which trade creditors are willing to 
                            extend credit.
                            <br/>
                            <br/>
                            <mark>Cash Conversion Cycle (CCC) main components</mark>
                            <br/>
                            <br/>
                            <mark>Inventory Holding Period</mark>: the average length of time
                            required to convert materials into finished goods and then to sell
                            those goods; it is the amount of time the product remains in
                            inventory in various stages of completion.
                            <br/>
                            <br/>
                            <mark>Trade Recievables Days (TRD)</mark>: the average length of time required
                            to convert the firm’s receivables into cash, that is, the time it takes
                            to collect cash following a sale.
                            <br/>
                            <br/>
                            <mark>Trade Payables Days (TPD)</mark>: the average length of time 
                            between the purchase of raw material and the payment of cash for them.
                            "
                        />
                    </EquationSectionWrapper>
                <SideNav />
            </GenericPageWrapper>
        </main>
    </Transition>
    </>
  )
}

export default OperatingAndCashConversionCycle