"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const Cash = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="What is cash?" pageSubheading="Week 3"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>CASH (for the purpose of this topic) refers to funds that a firm
                            holds for immediate payment.</mark>
                            <br/>
                            <br/>
                            These funds include:
                            <br/>
                            - Cash (the amount of currency)
                            <br/>
                            and
                            <br/>
                            - Marketable Securities (short-term, high-quality debt
                                instruments that can be easily converted into cash)
                            <br/>
                            <br/>
                            <mark>Motives for holding cash</mark> 
                            <br/>
                            <br/>
                            <mark>Transaction Motive</mark>: to conduct normal business transactions.
                            <br/>
                            <br/>
                            <mark>Compensation Motive</mark>: Firms using bank debt are required to maintain 
                            a compensating balance with the bank from which they have borrowed 
                            money.
                            <br/>
                            <br/>
                            <mark>Precautionary Motive</mark>: Cash flows are unpredictable, hence firms 
                            generally hold cash in reserve for random, unforeseen fluctuations in cash
                            flows.
                            <br/>
                            <br/>
                            <mark>Speculative Motive</mark>: To enable a firm to take advantage of 
                            bargain purchases that might arise. 
                            <br/>
                            <br/>
                            <mark>Cash Models</mark>
                            <br/>
                            <br/>
                            - Basic EOQ Model
                            <br/>
                            - Stock-Out EOQ Model (also called Cash EOQ Model with overdraft)
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

export default Cash