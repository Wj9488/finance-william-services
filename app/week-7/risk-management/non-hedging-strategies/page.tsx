"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const NonHedging = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Non-Hedging Strategies" pageSubheading="Week 7 Risk Management Strategies"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Acquisition of additional information</mark>
                            <br/>
                            <br/>
                            - In many cases the risk facing a manager arises because of a 
                            lack of information. Information can be purchased from individuals
                            or firms that posses the knowledge the decision maker seeks.
                            <br/>
                            <br/>
                            - Collecting additional information is costly. Hence, firms that want to 
                            maximise firm value will pay for the additional information only if the marginal 
                            value of that information is expected to exceed the marginal cost of 
                            acquiring it.
                            <br/>
                            <br/>
                            <mark>Diversification</mark>
                            <br/>
                            <br/>
                            - The risk of the diversified portfolio will normally be less than the weighted
                            average risk of the assets in the portfolio.
                            <br/>
                            - Firms should work to diversify their customers and suppliers.
                            <br/>
                            <br/>
                            <mark>Gaining control over the operating environment</mark>
                            <br/>
                            <br/>
                            - The use of patents and copyrights may protect a firm against immediate
                            competition. 
                            <br/>
                            - They secure the intellectual property rights of the developer.
                            <br/>
                            <br/>
                            <mark>Insurance</mark>
                            <br/>
                            <br/>
                            - Commonly available for losses due to fire, fraud, thefts, unforeseen
                            business interruptions etc.
                            <br/>
                            <br/>
                            <mark>Limited use of firm-specific assets</mark>
                            <br/>
                            <br/>
                            - The more general the purpose of the asset employed by a firm, the 
                            more flexibility that firms has to redeploy these assets to other uses.
                             
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

export default NonHedging