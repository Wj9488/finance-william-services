"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const InterestRates = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Interest Rates" pageSubheading="Week 2"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Think of an interest rate as the exchange rate 
                            between points in time. 
                            <br/>
                            <br/>
                            An interest rate is also called: 
                            <br/>
                            <br/>
                            - Discount Rate: when moving future values back to the present.
                            <br/>
                            - Rate of return: when looking for at an investment from the lenders POV.
                            <br/>
                            - Cost of Capital: from the borrower's perspective (e.g the cost of equity,
                                cost of debt, weighted average cost of capital (WACC)). 
                            <br/>
                            <br/>
                            <mark>Components of Interest Rates</mark>
                            <br/>
                            <br/>
                            <mark>Pure time preference</mark>: Price of time (reward for giving up 
                                consumation of cash today.)
                            <br/>
                            <br/>
                            <mark>Risk Premium</mark>: Additional layer of from perspective of riskiness. It 
                            is the risk/return trade-off.
                            <br/>
                            <br/>
                            <mark>Inflation Premium</mark>: Compensation needed to offset the devaluation of money.
                            Additional layer from the perspective of inflation.
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

export default InterestRates