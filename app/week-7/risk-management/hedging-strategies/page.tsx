"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const HedgingStrategies = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Hedging Strategies" pageSubheading="Week 7 Risk Management Strategies"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            In the financial market, individuals and firms 
                            deal in financial assets such as shares, bonds, foreign currency,
                            loans, etc.
                            <br/>
                            <br/>
                            The prices of these financial assets often fluctuate on a 
                            continuous basis. 
                            <br/>
                            <br/>
                            These fluctuations create uncertainty regarding the future prices 
                            of these assets, and expose the dealers to considerable risk.
                            <br/>
                            <br/>
                            When the firm reduces its risk exposure with the use of derivatives
                            it is said to be hedging. 
                            <br/>
                            <br/>
                            A <mark>hedge</mark> is a transaction that limits the risk associated with fluctuations in 
                            the price of a commodity, currency, or financial instrument. 
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

export default HedgingStrategies