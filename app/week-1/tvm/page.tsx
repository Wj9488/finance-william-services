"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const AgencyRelationships = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Time Value of Money" pageSubheading="Week 1"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Money has a time value because money recieved
                            today is worth more than the same amount recieved 
                            in the future.
                            <br/>
                            <br/>
                            There are three main reasons: 
                            <br/>
                            <br/>
                            - Potential for earning interest on cash now.
                            <br/>
                            - Impact of inflation.
                            <br/>
                            - Effect of risk
                            <br/>
                            <br/>
                            Compounding and Discounting:
                            <br/>
                            <br/>
                            Discounting is used to calculate the present value of 
                            future cashflows. 
                            <br/>
                            <br/>
                            Compounding specifies how a given amount of money grows
                            over time at a particular rate of interest. This will 
                            work out the future values of current cashflows.
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

export default AgencyRelationships