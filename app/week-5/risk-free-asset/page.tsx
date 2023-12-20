"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const RiskFree = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Risk-free Asset" pageSubheading="Week 5"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            - Provides risk free rate of return, i.e., the return
                            is known for certain and exhibity no variability.
                            <br/>
                            - Has zero standard deviation
                            <br/>
                            - Has zero correlation with all other risky assets.
                            <br/>
                            - Offers risk-free rate or return, which is the minimum return 
                            requried by all investors for an investment whose returns are 
                            certain.
                            <br/>
                            - For example, treasure bills or short-term government bonds.
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

export default RiskFree