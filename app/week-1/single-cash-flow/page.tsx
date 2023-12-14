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
            <Header pageHeading="Single Cash Flow" pageSubheading="Week 1"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            A single cashflow can be thought of as one lump sum 
                            that you will recieve at a given point in time. 
                            <br/>
                            <br/>
                            FV = Future Value 
                            <br/>
                            CF<sub>0</sub> = Cash flow at time 0
                            <br/>
                            r = Interest rate
                            <br/>
                            m = Frequency of compounding within 1 year (If compounding monthly, m becomes 12 for e.g)
                            <br/>
                            n = Number of compounding years or periods
                            <br/>
                            <br/>
                            Compounding more frequently equation: 
                            <br/>
                            <br/>
                            <code>FV = CF<sub>0</sub> x (1 + r / m) <sup>m x n</sup></code>
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