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
                            A Delayed Annuity starts beyond time 1. E.g at time 3.  
                            <br/>
                            <br/>
                            DF = Discounting Factor 
                            <br/>
                            CF<sub>2</sub> = Cash flow at time 2 (Could be any period)
                            <br/>
                            r = Interest rate
                            <br/>
                            n = Number of compounding years or periods
                            <br/>
                            <br/>
                            Discounting Factor to find the Present Value of an Delayed Annuity
                            <br/>
                            <br/>
                            <code>DF = 1 / r [ 1 - 1 / ( 1 + r )<sup>n</sup> ]</code>
                            <br/>
                            <br/>
                            To find the value of a Delayed Annuity, we turn it into an Ordinary Annuity. 
                            <br/>
                            <br/>
                            If a cashflow starts at time 2 for example, we first use the discounting factor above
                            to find its value at time 1. 
                            <br/>
                            <br/>
                            <code>Value at time one = CF<sub>2</sub> x DF Above</code>
                            <br/>
                            <br/>
                            Then, we use the single cashflow Discounting Factor to bring the time 1 value to the Present Value. 
                            <br/>
                            <br/>
                            <code>DF = 1 / ( 1 + r )<sup>n</sup></code>  
                            <br/>
                            <br/>
                            Therefore: 
                            <br/>
                            <br/>
                            <code>PV = Value at time one x 1 / ( 1 + r )<sup>n</sup></code>  
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