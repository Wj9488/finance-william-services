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
            <Header pageHeading="Ordinary Annuity" pageSubheading="Week 1 - Annuities"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Annuities are at equal periods and are only for a fixed number of periods.
                            <br/>
                            <br/>
                            An Ordinary Annuity starts from time 1. 
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
                            <br/>
                            Future Value of an ordinary annuity equation: 
                            <br/>
                            <br/>
                            <code>FV = CF<sub>1</sub> x (1 + r)<sup>n</sup> - 1 / r </code>
                            <br/>
                            <br/>
                            Discounting Factor to find the Present Value of an Ordinary Annuity
                            <br/>
                            <br/>
                            <code>DF = 1 / r [ 1 - 1 / ( 1 + r )<sup>n</sup> ]</code>
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