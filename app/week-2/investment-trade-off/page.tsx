"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const InvestmentTradeOff = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="The Investment Trade Off" pageSubheading="Week 2"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            The financial manager of a firm has to decide whether or not to 
                            invest in a proposed project.
                            <br/> 
                            <br/>
                            If the financial manager decides not to invest, then the corporation 
                            can pay this extra cash out to its shareholders, say as an 
                            extra dividend. 
                            <br/>
                            <br/>
                            The shareholders would vote for the company to invest in the new project, 
                            if the rate of return offered by the investment project is higher than 
                            the rate of return that shareholders can get by investing on their own.
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

export default InvestmentTradeOff