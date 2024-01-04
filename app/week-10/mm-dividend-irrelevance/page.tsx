"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const MMDividendIrrelevance = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Dividend Irrelevance Theory" pageSubheading="Week 10"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Consider dividend decision to be irrelevant as it does not affect
                            the value of the firm. <span class='italic'>Note - dividends themselves
                            aren't irrelevant; it is the pattern of the dividends which is irrelevant.</span>
                            <br/>
                            <br/>
                            Argue that the value of a firm should be determined by the basic earning power and business
                            risk of the firm, in which case value depends on the income (cash) produced, not on how the income 
                            is split between dividends and retained earnings.
                            <br/>
                            <br/>
                            <br/>Proponents of this line of reasonings would contend that investors care only about the total returns 
                            they receive, not whether they receive those returns in the form of a dividend, capital gain or 
                            both.
                            <br/>
                            <br/>
                            Hence, if this theory is correct, there exists no optimal dividend policy because dividend policy 
                            does not affect the value of the firm.
                            <br/>
                            <br/>
                            <mark>Modigliani and Miller (1961) assumptions</mark>
                            <br/>
                            <br/>
                            Perfect capital market:
                            <br/>
                            - No information asymmetry
                            <br/>
                            - No transaction costs 
                            <br/>
                            - The investors are free to buy and sell shares
                            <br/>
                            - No investor is large enough to affect the market price of a share
                            <br/>
                            - Investors behave rationally
                            <br/>
                            <br/>
                            - Assume a fixed dividend policy, no taxes, no risk. 
                            <br/>
                            <br/>
                            For simplicity, and to avoid capital structure effects, assume firms
                            are all equity financed.
                            <br/>
                            <br/>
                            <mark>Understanding the M&M argument</mark>
                            <br/>
                            <br/>
                            They also argued that any shareholder can in theory construct their own
                            dividend policy. 
                            <br/>
                            <br/>
                            If a firm does not pay dividends, a shareholder who wants a dividend can create it 
                            by selling part of his stock.
                            <br/>
                            <br/>
                            Conversely, if a firm pays a higher dividend than what an investor desires, 
                            the investor can use the unwanted diivdends to buy additional shares of a firm's stock.
                            <br/>
                            <br/>
                            If, therefore, investors could buy and sell shares and create their own dividend policy without 
                            incurring costs, then the firm's dividend policy would be irrelevant. 
                            <br/>
                            <br/>
                            <mark>M&M 1961 assumptions</mark>
                            <br/>
                            <br/>
                            - Share value depends on corporate earnings; corporate earnings reflect investment 
                            policy of company.
                            <br/>
                            - Share value is independent of the pattern of dividend payments. 
                            <br/>
                            - Rational investors are indifferent between capital gains and dividends;
                            the optimal investment policy is to invest in all projects with a positive NPV.
                            <br/>
                            - The market value of the company icnreases to reflect expected future dividends, and it 
                            does not depend on its dividend policy. 
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

export default MMDividendIrrelevance