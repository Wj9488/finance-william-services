"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const DebtCapital = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Financial Debt Capital" pageSubheading="Week 8"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Financial Debt Capital</mark>
                            <br/>
                            <br/>
                            - Includes bank loans, debentures and other loans.
                            <br/>
                            - Debt is something that has to be repaid.
                            <br/>
                            - Debt finance is less expensive than equity. The cost of raising 
                            the funds is relatively lower. The annual return required to attract investors
                            is less. 
                            <br/>
                            - Lenders do not, generally, share in the value created by an extraordinarily 
                            successful business. 
                            <br/>
                            - Absence of voting power.
                            <br/>
                            - When a company pays interest the tax authorities regard this as a cost of doing business
                            and it can be used to reduce the taxable profit.
                            <br/>
                            - Creditors are able to claim some or all of the assets of the firm in the event of 
                            non-compliance with the terms of the loan.
                            <br/>
                            <br/>
                            <mark>Debenture and Loan Stock</mark>
                            <br/>
                            <br/>
                            In the UK, debentures are secured by either a fixed or a floating charge but in the US
                            debentures are unsecured. 
                            <br/>
                            <br/>
                            Loan stock is usually unsecured.
                            <br/>
                            <br/>
                            If liquidation occurs, unsecured loan stockholders rank beneath debenture holders. 
                            <br/>
                            <br/>
                            Both debenture and laon stock are usually fixed-interest securities.
                            <br/>
                            <br/>
                            <mark>Bonds</mark>
                            <br/>
                            <br/>
                            A bond is long-term contract in which the bondholders lend money to a company. 
                            <br/>
                            <br/>
                            The company usually promises to pay the bond owners a series of interest payments, known as 
                            coupons, until the bond matures.
                            <br/>
                            <br/>
                            At maturity the bondholder receives a specified principle sum called the par (face or optimal)
                            value of the bond. 
                            <br/>
                            <br/>
                            Types of bonds. 
                            <br/>
                            - Plain vanilla bonds: redeemed on a fixed maturity date and pay a fixed rate of interest.
                            <br/>
                            - Zero coupon bonds: no periodic payment; sold at a discount. 
                            <br/>
                            Floating-rate are variable rate bonds. 
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

export default DebtCapital