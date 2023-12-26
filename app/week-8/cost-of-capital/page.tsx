"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const CostOfCapital = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Cost of Capital" pageSubheading="Week 8"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Cost of Capital:</mark> is the minimum risk-adjusted
                            rate of return that a project must make in order to be acceptable to investors.
                            <br/>
                            <br/>
                            If risk is held constant, projects with a rate of return above the 
                            cost of capital will increase the value of the firm.
                            <br/>
                            <br/>
                            Any investment that does not voer the firm's cost of capital will reduce 
                            shareholder wealth.
                            <br/>
                            <br/>
                            If a firm uses both debt and equity financing, the cost of capital must include the 
                            cost of each, weighted to the proportion of each (debt and equity) in the firm's capital 
                            structure. 
                            <br/>
                            <br/>
                            We can determine the individual costs of capital and the weights (measured in market value)
                            to calculate the weighted average cost of capital. 
                            <br/>
                            <br/>
                            <mark>Why do firms need to know their cost of capital?</mark>
                            <br/>
                            <br/>
                            a) Capital budgeting analysis: Firms invest in new plants and equipment, research
                            and development etc. These investments are financed by various sources of finance including 
                            ordinary shares, preference shares and debt.
                            <br/>
                            <br/>
                            b) Capital structure choice: the cost of capital depends on the costs of the various 
                            individual capital sources, the mixture of which may influence the cost of capital. Hence, 
                            to maximise firm value, firms should select the mix of capital that gievs the lowest overall cost 
                            of capital.
                            <br/>
                            <br/>
                            c) Performance assessment: cost of capital is useful in evaluating shareholder management performance.
                            Good management would add to shareholder wealth by consistently producing a return on capital 
                            which is higher than the firm's cost of capital.
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

export default CostOfCapital