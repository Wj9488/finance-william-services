"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const WorkingCapital = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Working Capital" pageSubheading="Week 3"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Financial Management Objectives</mark>
                            <br/>
                            <br/>
                            - We should not assume that financial management concerns only long-term
                            financial decisions. 
                            <br/>
                            - In reality, much of financial management addresses issues of short term 
                            duration such as short term financing and working capital management. 
                            <br/>
                            <br/>
                            <mark>Working Capital (WCM) (Main Components)</mark>
                            <br/>
                            <br/>
                            Short-term (Current) Assets: 
                            <br/>
                            <br/>
                            - Inventory
                            <br/>
                            - Accounts recievable (Trade Debtors)
                            <br/>
                            - Cash, and short-term securities
                            <br/>
                            <br/>
                            Short-term (Current) Liabilities:
                            <br/>
                            <br/>
                            - Accounts payable (trade creditors)
                            <br/>
                            - Short term debt
                            <br/>
                            <br/>
                            <mark>WCM Objectives</mark>
                            <br/>
                            <br/>
                            - To reduce the amount of inventory held without 
                            endangering production.
                            <br/>
                            - To determine the optimal cash balance.
                            <br/>
                            - To collect money from customers as quickly as possible.
                            <br/>
                            - To maintain a good relationship with customers & to take as 
                            much credit as possible without endangering supplies. 
                            <br/>
                            <br/>
                            <mark>WCM trade-off: Liquidity vs. Profitability</mark>
                            <br/>
                            <br/>
                            Profitability: is related to the goal of shareholder wealth
                            maximisation, so investment in current assets should be made only if 
                            acceptable return is obtained. 
                            <br/>
                            <br/>
                            Liquidity: is needed for a company to continue in business, a company may 
                            choose to hold more cash than is needed for operational or 
                            transaction needs, for example precautionary or speculative reasons.
                            <br/>
                            <br/>
                            The twin goals of profitability and liquidity will often 
                            conflict since liquid assets give the lowest returns. 
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

export default WorkingCapital