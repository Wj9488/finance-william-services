"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const TotalRiskAndDiversification = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Total Risk and Diversification" pageSubheading="Week 5"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <code>Total Risk = Systematic Risk + Non-systematic Risk</code>
                            <br/>
                            <br/>
                            Analysis indicates, that as more securities are added to a portfolio, 
                            the unsystematic risk is reduced. For a very well diversified portfolio, unsystematic risk tends to become zero
                            and the only relevant risk is systematic risk. 
                            <br/>
                            <br/>
                            Hence, the risk-return relationship is not based simply on the total 
                            risk of individual investments (the variability of their possible returns) but 
                            on just one part of that risk: the systematic risk (this is market risk).
                            <br/>
                            <br/>
                            <mark>Investor Risk Bearing</mark>
                            <br/>
                            <br/>
                            Investors will only be compensated for bearing systematic risk.
                            <br/>
                            <br/>
                            In other words, the market would not provide a reward (in terms of 
                            an increased expected return) for that part of an investment's risk 
                            that could be eliminated by holding it as part of a well-diversified 
                            portfolio.
                            <br/>
                            <br/>
                            For instance, we can expect that in a portfolio, the bad luck associated 
                            with one company will be balanced by better luck for others. However, an increase 
                            in the level of corporate taxation or a rapid rise in interest rates will adversely
                            affect all firms and there is no offsetting effect.
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

export default TotalRiskAndDiversification