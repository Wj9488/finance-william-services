"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const CAPM = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Capital Asset Pricing Model (CAPM)" pageSubheading="Week 5"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>How useful is the CAPM model?</mark>
                            <br/>
                            <br/>
                            - The CAPM model is one of the most important
                            models in all finance.
                            <br/>
                            - Financial managers use the model to establish required rates
                            of return on all types of investment projects.
                            <br/>
                            - The model helps managers understand what returns the market requires 
                            on projects having different risk levels. 
                            <br/>
                            - This is important knowledge to improve the quality of corporate investment 
                            decisions. 
                            <br/>
                            <br/>
                            <mark>CAPM Limitations</mark>
                            <br/>
                            <br/>
                            - It is a single factor model. 
                            <br/>
                            - It makes unrealistic assumptions.
                            <br/>
                            - The parameters of the model cannot be estimated 
                            precisely (for example, parameters used in determining 
                                risk free rate of return and beta value). 
                            <br/>
                            - The model assumes a linear relationship between its variables.
                            <br/>
                            <br/>
                            <mark>CAPM Critical Analysis</mark>
                            <br/>
                            <br/>
                            - There does appear to be a positive linear relationship between beta and the
                            investment’s return. So, fundamentally, we could conclude the CAPM does appear
                            to be correct: high beta shares give high returns, and low beta shares give low
                            returns
                            <br/>
                            <br/>
                            -  Despite the above, the arguments should be kept in perspective. Although the
                            CAPM is not perfect, it probably is a fairly good predictor of returns and it is
                            certainly better than anything else that is available.
                            <br/>
                            <br/>
                            - Although there may be a number of other factors (e.g. company size and dividend
                                policy) which go towards determining returns, it still appears that relative
                                systematic risk (beta) is by far the most important of these factors.
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

export default CAPM