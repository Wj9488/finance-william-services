"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const UnderstandingRisk = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Understanding Risk" pageSubheading="Week 7"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Defining Risk:</mark> 'The possiblity that the 
                            actual cashflows from an investment or any other 
                            business transactions will be different from the 
                            expected cash flows' (McGuigan et al., 2008)
                            <br/>
                            <br/>
                            A central point in finance is that risk is undesirable.
                            <br/>
                            <br/>
                            A firm is exposed to many risks, which are classified in to 
                            the following types: 
                            <br/>
                            - Technological risks
                            <br/>
                            - Economical risk
                            <br/>
                            - Financial risks
                            <br/>
                            - Performance risks
                            <br/>
                            - Legal risks
                            <br/>
                            <br/>
                            Firms make choices every day about the types of risk and how much 
                            risk they are willing to assume at any point in time.
                            <br/>
                            <br/>
                            For instance, firms that export or import their products internationally protect
                            themselves from unfavourable currency exchange rate swings.
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

export default UnderstandingRisk