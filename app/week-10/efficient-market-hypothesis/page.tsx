"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const EfficientMarket = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Efficient Market Hypothesis" pageSubheading="Week 10"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Market Efficiency</mark>
                            <br/>
                            <br/>
                            A well functioning market in which prices reflect all relevant information is said to be 
                            an efficient market. 
                            <br/>
                            <br/>
                            In an efficient market, any new information will be incorporated into the market price of a share
                            quickly and rationally in terms of the size and direction of the share price movement.
                            <br/>
                            <br/>
                            If the stock market is efficient, then the best estimate of the true value of a share is given 
                            by its current market value. In such a market overvalued or undervalued shares would not exist. 
                            <br/>
                            <br/>
                            <mark>Efficient Markets - Competition</mark>
                            <br/>
                            <br/>
                            - It is assumed that in an efficient market, a large number of analysts are assessing the true value of a 
                            firm.
                            <br/>
                            - They try to find the stocks that are mispriced to buy or sell.
                            <br/>
                            - This process drives the market price immediately towards the true value of the security.
                            <br/>
                            - Competition in the stock market drives prices to their true value.
                            <br/>
                            - Stock prices change every day, every hour, and even more frequently as new information
                            flows into the marketplace.
                            <br/>
                            <br/>
                            <mark>Types of market efficiency</mark>
                            <br/>
                            <br/>
                            <mark>Informational (pricing) efficiency:</mark> Refers to the notion or understanding that current market prices
                            instantly and fully reflect all relevant available information often confused for efficient market hypothesis (EMH).
                            <br/>
                            <br/>
                            <mark>Operational Efficiency:</mark> Refers to the level of costs of carrying out transactions in capital markets in the most 
                            cost-effective way. 
                            <br/>
                            <br/>
                            <mark>Allocation efficiency:</mark> Refers to the extent to which capital is allocated to the most profitable enterprise,
                            and should be a product of price efficiency.
                            <br/>
                            <br/>
                            Market is said to be perfectly efficient when it is simultaneously allocationally, operationally and informationally 
                            efficient. 
                            <br/>
                            <br/>
                            Efficient markets are not required to be perfect markets. Perfect markets imply efficient markets.
                            <br/>
                            <br/>
                            <mark>Importance of Market Efficiency</mark>
                            <br/>
                            <br/>
                            The concept of an efficient capital market is of prime importance to a financial manager who is concerned with the maximisation 
                            of shareholder wealth.
                            <br/>
                            <br/>
                            The financial manager relies on the capital market to finance projects, determine the cost of capital and value the company's shares.
                            <br/>
                            <br/>
                            If the stock market were inefficient at pricing shares, then one could not rely on the risk-return messages given by the CAPM and CAPM would no
                            longer by able to provide the financial manager with an NPV discount rate for project appraisal purposes. 
                            <br/>
                            <br/>
                            In an efficient market, information disclosure is a key requirement.
                            <br/>
                            <br/>
                            <mark>Efficient Market Hypothesis (EMH)</mark>
                            <br/>
                            <br/>
                            Widely credited to Eugene Fama, who posits that a market is 'informationally efficient' if market prices
                            'instantly and fully reflects all relevant available information'. 
                            <br/>
                            <br/>
                            Three classifications for EMH: Weak form, Semi-strong Form and Strong Form.
                            <br/>
                            <br/>
                            <mark>Weak Form EMH</mark>
                            <br/>
                            <br/>
                            Suggests that security prices instantly and fully reflect all information contained in the past history of 
                            security prices. 
                            <br/>
                            <br/>
                            i.e. it should not be possible to predict or earn abnormal or excess returns by looking at the history of past price
                            movements. 
                            <br/>
                            <br/>
                            Implies that the security follows the random walk hypothesis. 
                            <br/>
                            <br/>
                            Information taken into account by investors in weak form: 
                            <br/>
                            - Prices of securities
                            <br/>
                            - Volume of trading
                            <br/>
                            - Patterns, trends, such as charts, graphs etc. 
                            <br/>
                            <br/>
                            <mark>Random Walk</mark>
                            <br/>
                            <br/>
                            Random walk is an irregular pattern of numbers that defies prediction.
                            <br/>
                            <br/>
                            <mark>Random walk hypothesis (RWH):</mark> is the concept that stock price movements 
                            do not follow any pattern or trend i.e., share price will fluctuate randomly through time. 
                            <br/>
                            <br/>
                            Converting RWH to Weak Form EMH: 
                            <br/>
                            - Weak Form EMH states that if current market price fully reflects information contained in the share's 
                            historic price and volume sequences, then we can expect changes in price to be independent through time.
                            <br/>
                            <br/>
                            - Weak form EMH is more general than RWH: if RWH holds, it is strongly suggestive that weak form EMH holds; but if 
                            weak form EMH holds, RWH necessarily holds.
                            <br/>
                            <br/>
                            <mark>Testing Weak Form EMH</mark>
                            <br/>
                            <br/>
                            Statistical techniques:
                            <br/>
                            - <mark>Auto correlation:</mark> a test that investigates whether security returns are related through time.
                            Auto correlation analysis tends to confirm that share returns are independent through time and only occasionally 
                            do correlation coefficients have statistical significance. Runs test (A runs test is a nonparametric statistical 
                                technique to test the likelihood that a series of price movements occurred by chance).
                                <br/>
                                <br/>
                            - <mark>Technical Analysis: </mark>: Looking at charts to examine and compare price movements, uses a filter test rule.
                            Classic example of a filter-rule test includes: If price increases by some pre-determined percentage A%, BUY. Hold until price
                            moves down by some other pre-determined percentage B% below the intervening high at which point SELL the share and go SHORT.
                            Maintain until A% moves above the intervening 'low'.
                            <br/>
                            <br/>
                            <mark>Technical Analysis</mark>
                            <br/>
                            <br/>
                            Technical analysis involves the use of bar charts, graphs, etc. to detect trends in the series of security prices
                            and volumes. 
                            <br/>
                            <br/>
                            Chartists believe that patterns repeat themselves over time, which can help them in predicting future security prices.
                            <br/>
                            <br/>
                            Weak Form EMH suggests that reading charts of past prices or patterns should not lead to excess returns except by chance. 
                            Therefore, if Weak Form EMH is valid, then technical analysis becomes ineffective; one would not be able to gain abnormal 
                            returns based on it. 
                            <br/>
                            <br/>
                            <mark>Semi Strong EMH</mark>
                            <br/>
                            <br/>
                            States that security prices instantly and fully reflect all past and present publicly available information. 
                            <br/>
                            <br/>
                            Implies that it is useless to analyse publicly available information as it is rapidly incorporated into security prices. 
                            <br/>
                            <br/>
                            Generally, good news will lead to price rises and vice-versa. 
                            <br/>
                            <br/>
                            What kind of publicly available information: 
                            <br/>
                            - Past price movements and trading volume.
                            <br/>
                            - Company fundamentals: sales, earnings, losses etc.
                            <br/>
                            - Company events: stock splits, dividends, rights issues, director resignations and deaths, mergers etc.
                            <br/>
                            - Macroeconomic information: inflation, interest and exchange rates, unemployment, GDP etc. 
                            <br/>
                            <br/>
                            If semi-strong EMH is valid, then no analysis will help you attain abnormal returns as long as the analysis 
                            is based on publicly available information.
                            <br/>
                            <br/>
                            <mark>Fundamental Analysis</mark>
                            <br/>
                            <br/>
                            Investment analysts who try to estimate or predict a security's future value based on a company's fundamental
                            information. 
                            <br/>
                            <br/>
                            Unlike technical analysts, they rely on many sources of information including: 
                            <br/>
                            - Past price and volume information (technical analysis)
                            <br/>
                            - Company fundamentals: earnings, sales, cashflows, dividends etc. 
                            <br/>
                            - Macroeconomic fundamentals: employment rate, inflation, interest and 
                            exchange rates etc.
                            <br/>
                            <br/>
                            <mark>Testing Semi Strong EMH</mark>
                            <br/>
                            <br/>
                            Semi-strong EMH has mainly been tested through <mark>event studies</mark>. 
                            <br/>
                            <br/>
                            What are they?
                            <br/>
                            - Examine the behaviour of share prices following company announcements such as annual 
                            earnings, dividend changes, mergers, stock splits etc.
                            <br/>
                            <br/>
                            - Returns of a security on day, week or month of the event are compared with returns before and after the event.
                            <br/>
                            <br/>
                            <mark>Empirical Findings on Weak and Semi Strong EMH</mark>
                            <br/>
                            <br/>
                            Empirical results, especially in the developed markets, generally support the weak form and semi-strong 
                            form EMH.
                            <br/>
                            <br/>
                            Some studies also suggest that markets may even have some foresight into the future. E.g. news tends to leak out
                            in advance of public announcements.
                            <br/>
                            <br/>
                            In contrast, studies in emerging markets find evidence against the semi-strong form, indicating that the maturity of the market
                            effects the efficiency.
                            <br/>
                            <br/>
                            <mark>Strong form EMH</mark>
                            <br/>
                            <br/>
                            States that security prices instantly and fully reflect all available past, public and private information.
                            <br/>
                            <br/>
                            It implies that a few privileged company insiders like Directors of CEOs who normally have more information about the firm, 
                            cannot trade or make profit on their private information. 
                            <br/>
                            <br/>
                            Tested by studies based on observing market participants who might reasonably be expected to have access to private information, 
                            or those with the expertise and resources to generate such.
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

export default EfficientMarket