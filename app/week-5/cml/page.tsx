"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const CML = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Capital Market Line (CML)" pageSubheading="Week 5"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            The CML provides a risk-return relationship and a measure
                            of risk for all efficient portfolios (i.e., portfolios that do 
                            not posses any diversifiable risk).
                            <br/>
                            <br/>
                            The appropriate measure of risk for an efficient portfolio is the standard
                            deviation of return of the portfolio.
                            <br/>
                            <br/>
                            There is a linear relationship between the risk as measured by the 
                            standard deviation and the expected return for these efficient portfolios.
                            <br/>
                            <br/>
                            - All efficient portfolios would lie along the CML. 
                            <br/>
                            - All portfolios other than the efficient ones will lie below the CML.
                            <br/>
                            - The CML does not describe the risk-return relationship of inefficient 
                            portfolios or of individual securities.
                            <br/>
                            - The market portfolio represents the point on the efficient frontier that 
                            maximises the slope of the CML.
                            <br/>
                            <br/>
                            <mark>Capital Market Line Assumptions</mark>
                            <br/>
                            <br/>
                            1. The investor's objective is to maximize wealth.
                            <br/>
                            2. Investors make choices on the basis of risk and return. 
                            Return is measured by the arithmetic mean return from a portfolio 
                            of assets, and risk is measured by the standard deviation of those returns.
                            <br/>
                            3. All investors can lend and borrow unlimited amounts of cash at the risk-free 
                            interest rate. 
                            <br/>
                            4. No taxation, transaction costs or other market imperfections.
                            <br/>
                            5. All investors have the same knowledge and expectations about the future
                            and have access to the complete range of investment opportunities. Investors 
                            are all price takers and have free access to all relevant information.
                            <br/>
                            6. All investors have the same decision-making time horizon.
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

export default CML