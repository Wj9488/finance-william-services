"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const DivNonDivRisk = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Diversifiable Vs Non-Diversifiable Risk" pageSubheading="Week 4"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            The total risk of a security can be viewed as consisting of 
                            two parts:
                            <br/>
                            <br/>
                            <code>Total Risk = Systematic Risk + Unsystematic Risk</code>
                            <br/>
                            <br/>
                            <mark>Systematic Risk</mark>: (also called Non-Diversifiable Risk, or Market risk).
                            Refers to the variability of an individual security's returns caused by factors affecting
                            the market as a whole. (e.g., interest rate changes, inflation etc.)
                            <br/> 
                            <br/>
                            <mark>Unsystematic Risk</mark>: (also called Diversifiable Risk or Unique risk).
                            This is risk that is unique to the firm. Factors causing this risk might be 
                            to do with management capabilities and decisions; strikes; the availability of
                            raw materials; foreign competition etc.) It is any variability that is directly caused by factors
                            effecting the specific firm. 
                            <br/>
                            <br/>
                            <Risk Diversification</mark>
                            <br/>
                            <br/>
                            Because, unsystematic risk (firm specific) could be reduced
                            or even eliminated, most investors tend to invest in a group 
                            of assets (portfolios) rather than a single one. 
                            <br/>
                            <br/>
                            Hence, diversification is a strategy designed to reduce risk by spreading
                            the portfolio across many investments. 
                            <br/>
                            <br/>
                            Diversification is mathematically sound:
                            <br/>
                            - Most people are risk averse. 
                            <br/>
                            - People only take risks only if they believe they will be 
                            rewarded accordingly for taking them.
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

export default DivNonDivRisk