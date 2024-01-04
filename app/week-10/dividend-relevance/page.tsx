"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const DividendRelevance = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Dividend Relevance Theory" pageSubheading="Week 10"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Relevance theories consider dividend decision to be relevant as it can 
                            affect the value of a firm through investor's preferences. It is possible that investors
                            do prefer one dividend policy over another; if so, a firm's dividend policy is irrelevant.
                            <br/>
                            <br/>
                            Once we move away from the assumption of a perfect capital market and a tax-free world, dividend 
                            decision becomes much more problematic.
                            <br/>
                            <br/>
                            In particular, there are a number of different capital market imperfections which are likely to interfere
                            seriously with the hypothesis of dividend irrelevancy. 
                            <br/>
                            <br/>
                            Capital market imperfections such as transaction costs, differential interest rates, and 
                            information asymmetry, all interfere with this process. 
                            <br/>
                            <br/>
                            These capital market imperfections mean that an individual cannot costlessly adjust their dividend
                            pattern to fit their preferred consumption pattern.
                            <br/>
                            <br/>
                            <mark>Practical Issues concerning dividend</mark>
                            <br/>
                            <br/>
                            <mark>Legal constraints:</mark> 
                            <br/>
                            - Dividend can only be paid from accumulated net realised profits. 
                            <br/>
                            - Regulations such as accounting standards define the meaning of 
                            distributable profits. 
                            <br/>
                            - Governments may impose restrictions on dividend payments.
                            <br/>
                            - Restrictions may also be imposed on dividend payments by loan agreements or covenants. 
                            <br/>
                            <br/>
                            <mark>Liquidity:</mark>
                            <br/>
                            - Dividends are cash payments so managers need to consider the effect on liquidity 
                            of proposed dividend payments. 
                            <br/>
                            - High levels of profit may not mean large dividends, as profit is not the same as cash. 
                            <br/>
                            <br/>
                            <mark>Interest payment obligations:</mark> funds available for dividend payments will be reduced
                            if gearing is at a high level.
                            <br/>
                            <br/>
                            <mark>Investment opportunities:</mark> Whether dividends are cut provide funds for 
                            investment depends on: 
                            <br/>
                            - Attitude of shareholders and markets to a cut in dividends. 
                            <br/>
                            - Availability and cost of external finance. 
                            <br/>
                            - Amount of funds required compared to amount of distributable profits. 
                            <br/>
                            <br/>
                            <mark>Bird in Hand argument</mark>
                            <br/>
                            <br/>
                            The traditional view of the dividend decision is that at any particular point of time £1 
                            of dividend is somehow more valuable than £1 retained cash flow - even though the cash flow 
                            may have been retained for investment in a project yielding a substantial NPV.
                            <br/>
                            <br/>
                            The early payment of dividends may not actually change a company's business risk level, but it can 
                            favourably alter an investor's perception of the level of risk (but based on erroneous assumption that 
                            increased dividends make a firm less risky.)
                            <br/>
                            <br/>
                            Thus, current dividends are viewed as more valuable than retained earnings because the investor's 
                            perception of risk is imperfect and this may lead them to undervalue the future dividend stream that the 
                            retained earnings will generate.
                            <br/>
                            <br/> 
                            If this is true, shares of companies paying higher dividends will be more valuable than shares 
                            of companies paying lower dividends; hence, dividend policy is seen as a key factor in determining 
                            the share price (but what really matters should be the free cash flows of the firm). 
                            <br/>
                            <br/>
                            <mark>Clientele Effect / Theory</mark>
                            <br/>
                            <br/>
                            Shareholders may prefer companies to supply them with a dividend pattern which matches
                            their desired consumption pattern, thereby relieving them of having to adjust this cash flow 
                            themselves. 
                            <br/>
                            <br/>
                            In practice, companies often do this by following a stable and easily identifiable dividend policy.
                            <br/>
                            <br/>
                            <mark>Dividends as Signals</mark>
                            <br/>
                            <br/>
                            Capital markets could be imperfect in that information is neither costless nor universally available, and 
                            so decisions have often to be made on the basis of imperfect and incomplete information. 
                            <br/>
                            <br/>
                            Thus, a company's dividend declaration which is free and universally available is often thought to signal 
                            information about its future performance. 
                            <br/>
                            <br/>
                            If the stock market places such importance on dividend policy, a company cannot ignore its impact. 
                            <br/>
                            <br/>
                            Dividend decisions could be interpreted by the market as signals for availability of positive NPV projects, 
                            growth, or business life-cycle.
                            <br/>
                            <br/>
                            <mark>Tax Considerations</mark>
                            <br/>
                            <br/>
                            Taxation could significantly interfere with dividend irrelevance
                            <br/>
                            - Differential rates of personal income tax.
                            <br/>
                            - A taxation distinction between income and capital gains. 
                            <br/>
                            - A company might have both private and corporate shareholders. 
                            <br/>
                            <br/>
                            Some may prefer home made dividends (through selling part of their shareholding) because the rate of capital gains tax may be lower than their 
                            marginal income tax rate, which would be imposed upon company distributed dividends. 
                            <br/>
                            <br/>
                            Others may prefer company-distributed dividends because their marginal tax rate results in less
                            tax being paid than the combined effect of capital gains tax and transaction costs incurred in the 
                            process of providing home made dividends. 
                            <br/>
                            <br/>
                            Again, if a company follows a widely recognised, consistent dividend policy, then it can attract that class of shareholders whom 
                            the particular dividend policy chosen has the most favourable taxation effects. 
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

export default DividendRelevance