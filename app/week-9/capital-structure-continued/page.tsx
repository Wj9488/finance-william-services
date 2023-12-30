"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const CapitalStructureCont = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Capital Structure Continued" pageSubheading="Week 9"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Agency Theory (re: Capital Structure)</mark>
                            <br/>
                            <br/>
                            Jenson and Meckling, 1976. 
                            <br/>
                            <br/>
                            Cashflow generated is not independent of the actions
                            of owners (shareholders). 
                            <br/>
                            <br/>
                            Debt holders might may find their funds are not being used as they would like, therefore, 
                            prospective lenders might insist on expensive legal safeguards.
                            <br/>
                            <br/>
                            Debt suppliers often impose very strict conditions (or covenants) on loan agreements
                            that constrain manager's freedom of action.
                            <br/>
                            <br/>
                            Shareholders also face losses owning to the fact that managers may maximise their own utility. 
                            <br/>
                            <br/>
                            Monitoring costs incurred by/on behalf of shareholders also reduce the value of the firm, and 
                            these costs tend to increase and the link between ownership and control becomes weaker (as more 
                                equity is issued.)
                                <br/>
                                <br/>
                            Therefore, aim for capital structure in which these agency costs are minimised.
                            <br/>
                            <br/>
                            <mark>Signalling theory</mark>
                            <br/>
                            <br/>
                            Ross, 1977.
                            <br/>
                            <br/>
                            Modify Modigliani and Miller (1958, 1963) assumptions by incorporating information 
                            asymmetry into the argument: what if all market participants are not equally informed.
                            <br/>
                            <br/>
                            Managers are likely to be better informed about the profitability and cash flow prospects of their firm 
                            than outside investors. 
                            <br/>
                            <br/>
                            The market may not be able to distinguish firms with rosy prospects from those with less 
                            prosporous outlooks.
                            <br/>
                            <br/>
                            Absent reliable data about the differences among firms, the market will tend to price firms about 
                            equally, to the detriment of high-quality companies and their shareholders.
                            <br/>
                            <br/>
                            Form values are set in the market with reference to expected future earnings; therefore, if changes
                            in capital structure give new information that allows a re-assessment of the firm's earnings prospects, then 
                            there may be an effect on valuation.
                            <br/>
                            <br/>
                            Assuming information asymmetry between the managers of a company and external perties suggests that changes
                            in the firm's level of financial leverage can be used by managers to signal information.
                            <br/>
                            <br/>
                            For example, managers can signal that they have an optimistic view of the firm's future value
                            by increasing the level of debt relative to equity (implying the firm can support higher fixed costs
                                of interest payments). 
                            <br/>
                            <br/>
                            Managers of firms which do not anticipate increasing cashflows cannot imitate this signal without 
                            incurring the risk of going bankrupt from over leveraging. 
                            <br/>
                            <br/>
                            Note that in order for this signalling mechanism to work, managers must be prohibited from 
                            trading on their insider information; otherwise, they may falsely signal the market in order to create
                            opportunity to trade. E.g the managers of a high-quality firm may signal that it is low quality and then
                            buy undervalued shares to enrich themselves. 
                            <br/>
                            <br/>
                            
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

export default CapitalStructureCont