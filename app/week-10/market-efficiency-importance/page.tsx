"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const MarketEfficiencyImportance = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="The importance of market efficiency" pageSubheading="Week 10"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Importance regarding Investing Decisions</mark>
                            <br/>
                            <br/>
                            Investment decisions of the managers of any firms are based on a large extent on signals 
                            they get from the capital market. 
                            <br/>
                            <br/>
                            If the market is efficient, the cost of acquiring capital will accurately reflect the prospects for each 
                            firm. 
                            <br/>
                            <br/>
                            This means the firms with the most attractive investment opportunities will be able to obtain capital at a 
                            fair price which reflects their true potential. 
                            <br/>
                            <br/>
                            <mark>Importance in Financing Decisions</mark>
                            <br/>
                            <br/>
                            If the market is efficient, you know that financing requires a rate of return that is fair because 
                            the price has already reflected all available information. 
                            <br/>
                            <br/>
                            If the market is efficient, you would not feel your firm's stock being under or over valued at any point in time. 
                            There is therefore no timing decision needed in issuing equity.
                            <br/>
                            <br/>
                            More profoundly, if the market is efficient, every alternative way of raising capital would require the same 
                            rate of return for the same project, and no one capital raising method is superior to the other. 
                            <br/>
                            <br/>
                            <mark>Importance on Marketing Decisions</mark>
                            <br/>
                            <br/>
                            You may consider advertising in the Financial times about how impressive your company's earnings were throughout the 
                            past few years. 
                            <br/>
                            <br/>
                            However, in an efficient market, this would be like burning money as the share price would already reflect these 
                            good earnings. 
                            <br/>
                            <br/>
                            <mark>Importance on Accounting Decisions</mark>
                            <br/>
                            <br/>
                            Accounting decisions will have no effect on the opinions of analysts or on the stock price of the firm in an 
                            efficient market.
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

export default MarketEfficiencyImportance