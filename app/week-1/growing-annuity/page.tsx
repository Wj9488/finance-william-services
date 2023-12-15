"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const GrowingAnnuityPage = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Growing Annuity" pageSubheading="Week 1 - Annuities"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Annuities are at equal periods and are only for a fixed number of periods.
                            <br/>
                            <br/>
                            A growing annuity starts from time 1. 
                            <br/>
                            <br/>
                            FV = Future Value 
                            <br/>
                            CF<sub>1</sub> = Cash flow at time 1
                            <br/>
                            r = Interest rate
                            <br/>
                            n = Number of compounding years or periods
                            <br/>
                            g = Growth Rate
                            <br/>
                            <br/>
                            Future Value of a growing annuity equation: 
                            <br/>
                            <br/>
                            <code>FV = CF<sub>1</sub> x ( (1 + r)<sup>n</sup> - (1 + g)<sup>n</sup> / r - g )</code>
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

export default GrowingAnnuityPage