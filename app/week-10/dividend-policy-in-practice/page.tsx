"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const DividendPolicyPractice = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Dividend Policy in Practice" pageSubheading="Week 10"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            In practice, dividend should be influenced by investment opportunities 
                            and by the availability of funds with which to finance new investments. 
                            <br/>
                            <br/>
                            This policy implies that dividends should be paid only out of 'leftover' earnings, which 
                            are the earnings that remain after capital budgeting funding requirements are satisfied. 
                            <br/>
                            <br/>
                            The basis of this policy is the fact that investors prefer to have the firm retain and reinvest
                            earnings rather than pay them out in dividends if the rate of return the firm can earn on 
                            reinvested earnings exceeds the rate investors, on average, can themselves earn on other investments
                            of comparable risk. 
                            <br/>
                            <br/>
                            <mark>Empirical Evidence</mark> 
                            <br/>
                            <br/>
                            Appears to confirm the view that in actual practice companies believe that the dividend decision is important
                            and cannot be treated simply as a by-product of investment and financing decisions. 
                            <br/>
                            <br/>
                            Management appear to go to some lengths to ensure that dividends are only raised when they are fairly certain that 
                            they will be able to maintain at least that new level of dividends in the future. The fear is that, if they 
                            were forced to reduce dividends after an over-optimistic increase in the previous year, the market would read this signal 
                            and price shares unfavourably. 
                            <br/>
                            <br/>
                            Share prices are shown to react to unexpected changes in dividend policy, lending support 
                            to the argument that dividends are seen by investors as a means of sending signals. 
                            <br/>
                            <br/>
                            Evidence on the clientele effect shows that tax has an impact and some investors would prefer to receive their returns in 
                            the form of capital gains rather than dividends, whilst other investors would prefer the reverse. 
                            <br/>
                            <br/>
                            Also, shareholders in high dividend paying companies have lower tax rates than shareholders in low dividend paying companies.
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

export default DividendPolicyPractice