"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const AccountsReceivable = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Accounts Recievable" pageSubheading="Week 3"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Accounts Receivable represent the 
                            currently unpaid element of credit sales.
                            <br/>
                            <br/>
                            Effective management of accounts receivable is an essential 
                            element of sound financial management practice.
                            <br/>
                            <br/>
                            <mark>It is very important because:</mark>
                            <br/>
                            <br/>
                            - Too much Credit is costly in terms of investment in, and 
                            maintenance of, accounts receivable.
                            <br/>
                            - Too little Credit could result in the loss of profitable sales.
                            <br/>
                            <br/>
                            Granting Credit should increase profits hence maximising shareholder 
                            wealth.  
                            <br/>
                            <br/>
                            <mark>Reasons why fims offer credit sales</mark>
                            <br/>
                            <br/>
                            <mark>Industry and Competitive Pressure</mark>: It is difficult for firm to offer
                            credit terms that are less generous than their competitors’ offerings. 
                            <br/>
                            <br/>
                            <mark>Finance</mark>: Certain types of firm have raised finance more 
                            cheaply than others. This competitive advantage can be reflected in offering 
                            generous credit to customers who experience greater difficulties in raising 
                            finance. 
                            <br/>
                            <br/>
                            <mark>Efficiency</mark>:  Information asymmetry exists between buyer and seller.
                            The buyer does not know the quality of the product delivered until it
                            has been thoroughly inspected. The credit period therefore provides
                            a valuable inspection and verification period.
                            <br/>
                            <br/>
                            <mark>The objective of credit management</mark>
                            <br/>
                            <br/>
                            To collect accounts receivable as quickly as possible without 
                            losing sale from high-pressure collection techniques.  
                            <br/>
                            Three main steps:
                            <br/>
                            - Credit Selection and Standards (Don't offer credit to just anyone.)
                            <br/>
                            - Credit Terms (Lay out the terms of the credit precisely)
                            <br/>
                            - Credit Monitoring (Consistently monitor credits)
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

export default AccountsReceivable