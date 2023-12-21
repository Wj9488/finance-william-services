"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const RiskManagement = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Risk Management" pageSubheading="Week 7"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Some of the risks faced by a firm can be mitigated, or 
                            managed. 
                            <br/>
                            <br/>
                            In the past, risk management has meant the process of 
                            identifying firms specific risk exposures (such as worker's 
                            compensation claims, product recalls, loss from fire or flood etc.)
                            and managing those risks. 
                            <br/>
                            <br/>
                            In recent years, risk management has come to include the process of 
                            identifying, measuring and managing market all types of risk exposures, 
                            such as interest rate and currency risk exposures.
                            <br/>
                            <br/>
                            <mark>Reasons for managing risk</mark>
                            <br/>
                            <br/>
                            - To reduce the chances of financial distress: a condition 
                            where a firm cannot generate sufficient income, hence making it 
                            unable to pay its financial obligations. This is costly and may lead to 
                            the forced liquidation of the firm. Bankruptcy costs are the main costs
                            of financial distress. 
                            <br/>
                            <br/>
                            - To direct management attention toward day-to-day operating matters that 
                            are under their control. This is done through a dedicated risk management team.
                            <br/>
                            <br/>
                            - To assure that firms will have adequate cashflows to make needed investments.
                            For example, a firm which normally has large on-going Research and Development 
                            investment obligations (such as Pharmaceutical Companies). 
                            <br/>
                            <br/>
                            <mark>Risk management strategies</mark>
                            <br/>
                            <br/>
                            - Non Hedging strategies (not using Financial Derivatives)
                            <br/>
                            - Hedging Strategies (Using Financial Derivatives)
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

export default RiskManagement