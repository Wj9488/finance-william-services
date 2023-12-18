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
                            <mark>Problems with PB</mark>:
                            <br/>
                            <br/>
                            It is not concerned with increases in wealth - it promotes liquidity
                            rather than increased value. 
                            <br/>
                            <br/>
                            It ignores return after the payback period.
                            <br/>
                            <br/>
                            It ignores the cost of capital and therefore the time value of money.
                            <br/>
                            <br/>
                            There is objective measure as to what length of time should be set as 
                            the minimum payback period.
                            <br/>
                            <br/>
                            <mark>Advantages of PB</mark>:
                            <br/>
                            <br/>
                            - Easy to calculate.
                            <br/>
                            - Easy to understand.
                            <br/>
                            Useful in certain situations like fast changing tech environments. (E.g A quick 
                                PB is essential when scrapping a new plant).
                            <br/>
                            Improving investment conditions (attention is directed
                                towards projects that release funds sooner)
                            <br/>
                            <br/>
                            - It favours projects with a quick return helping 
                            company growth, minimising risk and maximising liquidity.
                            <br/>
                            <br/>
                            It uses cashflows instead of profits.  
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