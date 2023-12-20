"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const MarkowitzFrontier = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Markowitz Frontier" pageSubheading="Week 4 (Portfolio Theory 1)"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Markowitz Portfolio Theory (1952-1959)
                            <br/>
                            <br/>
                            <mark>The Theory</mark>
                            <br/>
                            <br/>
                            - Is concerned with the contruction of investment
                            portfolios. 
                            <br/>
                            - It makes certain assumptions and it derives an optimal 
                            combination of risky assets given their characteristics. 
                            <br/>
                            - It makes the point that it is not a good idea to have all your 
                            investment funds in one asset. 
                            <br/>
                            <br/>
                            By investing funds in a portfolio (in two or more assets)
                            you increase the possibility of improving Return relative to Risk
                            being taken. 
                            <br/>
                            <br/>
                            More specifically, although the expected return of the investment portfolio
                            is simply a weighted average of the expected returns on the individual investments
                            that go to make up the portfolio, the risk of the portfolio is less than 
                            the weighted average risk of the individual constituent investments. 
                            <br/>
                            Risk can be reduced through diversification without an associated reduction 
                            in returns. 
                            <br/>
                            <br/>
                            <mark>Assumptions</mark>
                            <br/>
                            <br/>
                            Investors make investment decisions in a single time period framework.
                            This can be one week, one month, one year or longer.
                            <br/>
                            Investors prefer more money to less money. 
                            <br/>
                            Investors are risk averse: they require extra return for extra risk.
                            <br/>
                            Investors measure return by expected return and measure risk by standard 
                            deviation of returns. 
                            <br/>
                            <br/>
                            <mark>Definition of a Portfolio</mark>
                            <br/>
                            <br/>
                            A portfolio is a collection of assets (stocks, bonds, commodities etc)
                            <br/>
                            <br/>
                            The most convenient way of describing it is to list the 
                            percentages of the total portfolio's value that are invested in each 
                            portfolio asset.
                            <br/>
                            <br/>
                            The weights should always sum to 100%.
                            <br/>
                            <br/>
                            <mark>Portfolio Dominance & MVE Frontier</mark>
                            <br/>
                            <br/>
                            A situation in which investors universally prefer one 
                            alternative over another. 
                            <br/>
                            - All rational investors will clearly prefer one alternative.
                            <br/>
                            <br/>
                            A portfolio dominates all others if: 
                            <br/>
                            <br/>
                            - For its level of expected return, there is no other portfolio with 
                            less risk.
                            <br/>
                            - For its level of risk, there is no other portfolio with a higher expected
                            return. 
                            <br/>
                            <br/>
                            Those portfolios that are not dominated constitute the Mean Variance Efficient
                            (MVE) Frontier. 
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

export default MarkowitzFrontier