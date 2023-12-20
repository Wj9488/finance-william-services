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
            <Header pageHeading="Risk-Return Relationship" pageSubheading="Week 4"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Importance of the Risk-Return relationship</mark>
                            <br/>
                            <br/>
                            Understanding the relation between risk and return is important
                            for the following reasons:
                            <br/>
                            <br/>
                            - To determine appropriate risk-adjusted discount rates for NPV analysis.
                            <br/>
                            - Useful for investors across a broad range of investment vehicles.
                            <br/>
                            Useful for corporations that issue shares to finance themselves. 
                            <br/>
                            Useful for financial intermediaries that lend, invest, borrow on behalf of
                            clients. 
                            <br/>
                            <br/>
                            <mark>What is return?</mark>
                            <br/>
                            <br/>
                            Return is the total gain or loss experienced on an investment over a given 
                            period of time.
                            <br/>
                            <br/>
                            For instance, we hold a share to benefit from the return that it offers. 
                            <br/>
                            <br/>
                            Investors receive their returns from shares in the form of dividends and capital
                            gains or losses. 
                            <br/>
                            <br/>
                            <mark>What is risk?</mark>
                            <br/>
                            <br/>
                            Most financial assets will exhibit risk in their returns. 
                            <br/>
                            <br/>
                            Risk is defined as the possibility that actual future returns will deviate 
                            from expected returns (i.e., risk represents the variability of returns). 
                            <br/>
                            <br/>
                            <mark>How to measure risk?</mark>
                            <br/>
                            <br/>
                            Risk of an investment can be measured by the variance or standard deviation
                            of possible returns around the expected return. 
                            <br/>
                            <br/>
                            The greater the dispersion, the greater the risk, the greater the variance or 
                            standard deviation.
                            <br/>
                            <br/>
                            Where there is no dispersion of possible returns, then the expected
                            return is certain and there is no risk. Both variance and standard deviation
                            give a measure of 0.
                            <br/>
                            <br/>
                            <mark>Risk Free and Risky Assets</mark>
                            <br/>
                            <br/>
                            Risk Free asset example: 
                            <br/>
                            - Government bonds held to maturity.
                            <br/>
                            <br/>
                            Risky Asset example: 
                            <br/>
                            - A share investment, which offers a return in the form of a 
                            dividend and capital gain (both the dividend and the future 
                                sale price of stock are uncertain, making it risky). 
                            <br/>
                            <br/>
                            <mark>Risk preferences</mark>
                            <br/>
                            <br/>
                            Risk loving: investors that enjoy gambling.
                            <br/>
                            <br/>
                            Risk neutral: investors who are indifferent to risk. 
                            <br/>
                            <br/>
                            Risk averse: investors who are to risk. 
                            <br/>
                            <br/>
                            Risk lovers will always pick the project with the highest 
                            risk. Risk neutral would have no preference. Risk averse would 
                            choose the project with the least amount of risk.
                            <br/>
                            <br/>
                            <mark>Risk Aversion</mark>
                            <mark>Importance of the Risk-Return relationship</mark>
                            <br/>
                            <br/>
                            Understanding the relation between risk and return is important
                            for the following reasons:
                            <br/>
                            <br/>
                            - To determine appropriate risk-adjusted discount rates for NPV analysis.
                            <br/>
                            - Useful for investors across a broad range of investment vehicles.
                            <br/>
                            Useful for corporations that issue shares to finance themselves. 
                            <br/>
                            Useful for financial intermediaries that lend, invest, borrow on behalf of
                            clients. 
                            <br/>
                            <br/>
                            <mark>What is return?</mark>
                            <br/>
                            <br/>
                            Return is the total gain or loss experienced on an investment over a given 
                            period of time.
                            <br/>
                            <br/>
                            For instance, we hold a share to benefit from the return that it offers. 
                            <br/>
                            <br/>
                            Investors receive their returns from shares in the form of dividends and capital
                            gains or losses. 
                            <br/>
                            <br/>
                            <mark>What is risk?</mark>
                            <br/>
                            <br/>
                            Most financial assets will exhibit risk in their returns. 
                            <br/>
                            <br/>
                            Risk is defined as the possibility that actual future returns will deviate 
                            from expected returns (i.e., risk represents the variability of returns). 
                            <br/>
                            <br/>
                            <mark>How to measure risk?</mark>
                            <br/>
                            <br/>
                            Risk of an investment can be measured by the variance or standard deviation
                            of possible returns around the expected return. 
                            <br/>
                            <br/>
                            The greater the dispersion, the greater the risk, the greater the variance or 
                            standard deviation.
                            <br/>
                            <br/>
                            Where there is no dispersion of possible returns, then the expected
                            return is certain and there is no risk. Both variance and standard deviation
                            give a measure of 0.
                            <br/>
                            <br/>
                            <mark>Risk Free and Risky Assets</mark>
                            <br/>
                            <br/>
                            Risk Free asset example: 
                            <br/>
                            - Government bonds held to maturity.
                            <br/>
                            <br/>
                            Risky Asset example: 
                            <br/>
                            - A share investment, which offers a return in the form of a 
                            dividend and capital gain (both the dividend and the future 
                                sale price of stock are uncertain, making it risky). 
                            <br/>
                            <br/>
                            <mark>Risk preferences</mark>
                            <br/>
                            <br/>
                            Risk loving: investors that enjoy gambling.
                            <br/>
                            <br/>
                            Risk neutral: investors who are indifferent to risk. 
                            <br/>
                            <br/>
                            Risk averse: investors who are to risk. 
                            <br/>
                            <br/>
                            Risk lovers will always pick the project with the highest 
                            risk. Risk neutral would have no preference. Risk averse would 
                            choose the project with the least amount of risk.
                            <br/>
                            <br/>
                            <mark>Risk-Return Approaches</mark>
                            <br/>
                            <br/>
                            <mark>The historical approach</mark>: this approach is based off historical data
                            (e.g., historical stock returns)
                            <br/>
                            <br/>
                            <mark>The probabilistic approach</mark>: Based on the concept of probability distributions.
                            A probability distribution shows the possible unique outcomes and their associated
                            probabilities.
                            <br/>
                            <br/>
                            <mark>The Risk-based approach</mark>: This uses the Capital Asset Pricing Model (CAPM)
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