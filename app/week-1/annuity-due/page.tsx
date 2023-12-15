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
                            This also means that the first payment of this annuity will already be at
                            the present value.
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
                            Future Value of an annuity due equation: 
                            <br/>
                            <br/>
                            <code>FV = CF<sub>0</sub> x <sup>(1 + r)</sup> (1 + r)<sup>n</sup>- 1 / r </code>
                            <br/>
                            <br/>
                            Discounting factor to find the present value of an Annuity Due
                            <br/>
                            <br/>
                            <code>DF = 1 / r [ 1 - 1 / ( 1 + r )<sup>n</sup> ]</code>
                            <br/>
                            <br/>
                            The first cashflow is already at PV, so only cashflows from time 1 need to be discounted.
                            <br/>
                            <br/>
                            To work out an Annuity Due, first apply the discounting factor to the cashflow at time 1. Then,
                            add all the cashflows after time 1 up and then finally add the cashflow at time 0. 
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