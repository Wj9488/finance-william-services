"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const DFPVPage = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Present Value and Discounting Factor" pageSubheading="Fundamentals"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            The Present Value is used to bring a future cashflow or lump sum into the present.
                            <br/>
                            <br/>
                            A Discounting Factor is what is applied to get the present value of the cashflow.
                            To find out the Present Value of something you need to use a Discounting Factor to find it. 
                            <br/>
                            <br/>
                            DF = Discounting Factor
                            <br/>
                            PV= Present Value
                            <br/>
                            r = Interest Rate
                            <br/>
                            n = Number of Periods
                            <br/>
                            <br/>
                            Discounting Factor for a Single Cashflow:
                            <br/>
                            <br/>
                            <code>DF = 1 / ( 1 + r )<sup>n</sup></code>  
                            <br/>
                            <br/>
                            Discounting Factor for an Annuity:
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

export default DFPVPage