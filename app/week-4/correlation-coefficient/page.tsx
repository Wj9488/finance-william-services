"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const CorrelationCoefficient = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Correlation Coefficient" pageSubheading="Week 4"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Covariance can be used to understand the 
                            direction of the relationship between variables. 
                            It can range from positive infinity to negative infinity. 
                            <br/>
                            <br/>
                            A function of the covariance, the correlation coefficient
                            measures both the direction and strength and the linear 
                            relationship between two variables.
                            <br/>
                            <br/>
                            Correlation coefficients are standardised: a perfect linear 
                            relationship result in a coefficient of 1, and a perfect inverse
                            relationship in a coefficient of -1.
                            <br/>
                            <br/>
                            A correlation of +1 indicates a perfect positive correlation, such that the 
                            returns of the two shares will vary in perfect lock step.
                            <br/>
                            <br/>
                            A negative correlation coefficient (less than 0 but greater than -1),
                            indicates that there is a tendency for the returns to move in opposite directions. 
                            <br/>
                            <br/>
                            A correlation coefficient of 0 indicates that there is no relationship between 
                            the two assets in terms of the variability of their returns. 
                            <br/>
                            <br/>
                            In practice, almost all shares are positively correlated with each other.
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

export default CorrelationCoefficient