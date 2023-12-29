"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const AffectingCOC = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Factors affecting cost of capital" pageSubheading="Week 8"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Factors the firm cannot control</mark>
                            <br/>
                            <br/>
                            - The level of interest rates: higher interest rates incrase the cost of debt 
                            because firms will have to pay debt holders more to obtain debt capital. 
                            <br/>
                            <br/>
                            - Tax rates: tax rates are used in the calculation of cost of debt. 
                            <br/>
                            <br/>
                            <mark>Factors the firm CAN control</mark>
                            <br/>
                            <br/>
                            - Capital structure policy: changing capital structure will affect a firm's cost of capital.
                            <br/>
                            <br/>
                            - Dividend policy: it affects the level of retained earnings. Firms consider cost of capital 
                            when they establish their dividend policy.
                            <br/>
                            <br/>
                            - Investment policy: Most firms usually invest in assets similar to those they currently operate.
                            If a firm invests in an entirely new line of business, then its marginal cost of capital should reflect the riskiness
                            of that new business. 
                            <br/>
                            - This may change the nature of the risk of the company in a way that might also influence its cost of capital.
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

export default AffectingCOC