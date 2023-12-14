"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const SingleCashFlow = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Annuity Due" pageSubheading="Week 1 - Annuities"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Annuities are at equal periods and are only for a fixed number of periods.
                            <br/>
                            <br/>
                            An Annuity Due starts from time 0. 
                            <br/>
                            <br/>
                            FV = Future Value 
                            <br/>
                            CF<sub>0</sub> = Cash flow at time 0
                            <br/>
                            r = Interest rate
                            <br/>
                            n = Number of compounding years or periods
                            <br/>
                            <br/>
                            Future Value of an ordinary annuity equation: 
                            <br/>
                            <br/>
                            <code>FV = CF<sub>0</sub> x <sup>(1 + r)</sup> (1 + r)<sup>n</sup>- 1 / r </code>
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

export default SingleCashFlow