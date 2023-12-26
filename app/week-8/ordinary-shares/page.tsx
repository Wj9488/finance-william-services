"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const OrdinaryShares = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Ordinary Shares (Equity Capital)" pageSubheading="Week 8"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Ordinary Shares (Equity Capital)</mark>
                            <br/>
                            <br/>
                            Ordinary shares represent the equity share capital of the firm; by 
                            purchasing a share of the ownership of a firm, an investor becomes a shareholder
                            with some degree of control over a company. 
                            <br/>
                            <br/>
                            Shareholder returns are not guaranteed; risk and the creditor heirarchy 
                            in the event of a payout or liquidiation: 
                            <br/>
                            <br/>
                            1. Secured Creditors
                            <br/>
                            2. Unsecured Creditors
                            <br/>
                            3. Preference Shareholders
                            <br/>
                            4. Ordinary Shareholders
                            <br/>
                            <br/>
                            Ordinary shareholders bear the greatest risk, but also enjoy the fruits of 
                            success in the form of higher dividends and or capital gains.
                            <br/>
                            <br/>
                            Cost of equity is higher than cost of debt or preference shares.
                            <br/>
                            <br/>
                            <mark>Shareholder Rights</mark>
                            <br/>
                            <br/>
                            - To attend geenral meetings of the company
                            <br/>
                            - Vote on appointment of directors
                            <br/>
                            - Vote on appointment, remuneration and removal of auditors
                            <br/>
                            - Receive annual accounts of the company and the report of its auditors
                            <br/>
                            - Receive a share of any dividend paid.
                            <br/>
                            - Receive a share of assets remaining after the company has been liquidated.
                            <br/>
                            - Vote on important issues such as permitting repurchase of shares, using shares
                            in a takeover bid.
                            <br/>
                            - Participate in a new issue of shares of a company.
                            <br/>
                            <br/>
                            <mark>Pros and Cons of Ordinary Shares (from the firm perspective)</mark>
                            <br/>
                            <br/>
                            Advantages: 
                            <br/>
                            - Usually there is no obligation to pay dividends
                            <br/>
                            - The capital does not have to be repaid
                            <br/>
                            <br/>
                            Disadvantages:
                            <br/>
                            - High cost. There is a direct cost of issuance and there
                            is then a requirement to satisfy shareholders with a return on thier 
                            investment.
                            <br/>
                            - Loss (dilution) of control. 
                            <br/>
                            - Dividends cannot be used to reduce taxable profits.
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

export default OrdinaryShares