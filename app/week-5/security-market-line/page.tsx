"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const SML = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Security Market Line" pageSubheading="Week 5"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            The Security Market Line (SML) gives the expected return from 
                            an 'inefficient' investment, such as a risky portfolio other than 
                            the market portfolio, more importantly, an investment in the shares
                            of a single company. 
                            <br/>
                            <br/>
                            The expected return on any inefficient investment is determined only by its
                            non-diversifiable risk, so the SML only considers the level of systematic
                            risk, beta. 
                            <br/>
                            <br/>
                            <mark>SML vs CML</mark>
                            <br/>
                            <br/>
                            - Both, CML and SML postulate a linear (straight line) relationship 
                            between risk and return.
                            <br/>
                            - Risk: in CML the risk is defined as the Total Risk and is measured by standard
                            deviation; in SML the risk is defined as systematic risk and is measured by Beta. 
                            <br/>
                            - CML is valid only for efficient portfolios; SML is valid for all portfolios and all 
                            individual securities, whether efficient or inefficient.
                            <br/>
                            - CML is the basis of the Capital Market Theory; SML is the basis of the Capital Asset Pricing
                            Model (CAPM).
                            <br/>
                            - Slope: CML, market portfolio Sharpe ratio; SML market risk premium.
                            <br/>
                            - Definition: CML graph of efficient frontier; SML graph of the CAPM.
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

export default SML