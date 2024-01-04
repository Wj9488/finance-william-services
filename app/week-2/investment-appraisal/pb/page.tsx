"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const PB = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Payback Period" pageSubheading="Week 2"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Payback Period (PB)</mark>
                            <br/>
                            <br/>
                            PB of a project is the number of years it takes before 
                            the cumulative forecasted cash flow equals the initial outflow.
                            <br/>
                            <br/>
                            The payback rule says: 
                            <br/>
                            <br/>
                            - Only projects which pay back within the specified time 
                            period will be selected. 
                            <br/>
                            - Choose between options on the basis of the fastest payback. 
                            <br/>
                            <br/>
                            This method ignores later year cash flows and the time value of future 
                            cash flows. 
                            <br/>
                            <br/>
                            <mark>Advantages of PB</mark>:
                            <br/>
                            <br/>
                            - Easy to calculate.
                            <br/>
                            - Easy to understand.
                            <br/>
                            - Useful in certain situations like fast changing tech environments. (E.g A quick 
                            PB is essential when scrapping a new plant).
                            <br/>
                            - Can also be useful if a company predicts better investment opportunities in the future. A fast 
                            payback would mean the company has the cash to reinvest faster. 
                            <br/>
                            - Protects against the risk of time. PB decision rule says to choose projects with the fastest payback period 
                            meaning capital is exposed for the least amount of time possible to potential risks arising from having 
                            cash invested in a project. (E.g unforeseen opportunity costs)
                            <br/>
                            - It favours projects with a quick return helping 
                            company growth, minimising risk and maximising liquidity.
                            <br/>
                            - It uses cashflows instead of profits.  
                            <br/>
                            <br/>
                            <mark>Problems with PB</mark>:
                            <br/>
                            <br/>
                            - It ignores return after the payback period.
                            <br/>
                            - It ignores the cost of capital and therefore the time value of money.
                            <br/>
                            - There is no objective measure as to what length of time should be set as 
                            the minimum payback period.
                            <br/>
                            - Does not consider scale, and therefore might not be aligned with shareholder wealth maximisation. 
                            Projects returning capital the fastest will be prioritised, not projects increasing shareholder wealth 
                            the most. Therefore it is not concerned with increases in wealth and only promotes increased liquidity.
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

export default PB