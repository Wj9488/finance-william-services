"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const GearingLeverageBankruptcy = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Gearing, Leverage and Bankruptcy" pageSubheading="Week 9"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Gearing and leverage</mark>
                            <br/>
                            <br/>
                            Refers to the financing decision.
                            <br/>
                            <br/>
                            In simple terms, it means equity (gearing) vs debt (leverage).
                            <br/>
                            <br/>
                            Usually it is defined as the ratio of the total market value of 
                            a company's debt capital to the total market value of its equity capital
                            (or total assets).
                            <br/>
                            <br/>
                            The distinction between debt and equity is important because each type 
                            of capital bears a different level of risk.
                            <br/>
                            <br/>
                            - Debt is less risky than equity from a lender's perspective
                            <br/>
                            <br/>
                            This risk differential results from the fact that debt capital has first
                            claim: 
                            <br/>
                            - On a company's earnings and over equity capital (in liquidation). 
                            <br/>
                            <br/>
                            This is why debt capital is easier to raise. Lenders are more likely to lend to a company
                            for a fixed interest rate and the claim over a company's assets should they breach 
                            the terms of the loan contract. Shareholders do not have this power and get paid AFTER lenders.
                            <br/>
                            <br/>
                            <mark>Costs of Bankruptcy</mark>
                            <br/>
                            <br/>
                            A firm is bankrupt when it cannot meet its debt obligations. 
                            <br/>
                            <br/>
                            High leverage makes it more likely that a firm will be unable to make interest and principal 
                            payments when cashflows are low. 
                            <br/>
                            <br/>
                            Creditors can claim the firms' assets
                            <br/>
                            <br/>
                            <mark>Direct costs</mark>: Include fees paid to lawyers, investment bankers, accountants
                            and other professionals in the process of bankuptcy. 
                            <br/>
                            <br/>
                            <mark>Indirect Costs</mark>: Represent the economic losses resulting from bankruptcy (e.g 
                                loss of customers, key suppliers, employees, top management's time spent to manage the 
                                bankruptcy process).
                                <br/>
                                <br/>
                            <mark>Business Risk</mark>
                            <br/>
                            <br/>
                            The business risk of a company relates to the systematic risk of the net
                            cash flows that result from the operation of the company's assets.
                            <br/>
                            <br/>
                            Both equity and debt holders in a company bear this risk.
                            <br/>
                            <br/>
                            <mark>Financial Risk</mark>
                            <br/>
                            <br/>
                            Refers to some additional systematic risk which is borne only by the equity holders of a 
                            geared company. 
                            <br/> 
                            <br/> 
                            - As interest payments to debt holders must legally be paid in ful by the company 
                            before any dividend payments can be made, the greater the proportion of debt capital within a comopany's
                            capital structure, the greater the probability that the company will have no cash remaining
                            with which to pay the dividend.
                            <br/> 
                            <br/>  
                            - This risk of a reduced or zero dividend, which is borne by ordinary shareholders
                            , is termed financial risk, and its severity is likely to increase as a company increases its level
                            of gearing. 
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

export default GearingLeverageBankruptcy