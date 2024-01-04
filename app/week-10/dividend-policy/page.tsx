"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const DividendPolicy = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Dividend Policy" pageSubheading="Week 10"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Dividend policy refers to the policy that managers formulate in regard
                            to earnings for distribution as dividend among shareholders.
                            <br/>
                            <br/>
                            <mark>Dividend Decisions:</mark>
                            <br/>
                            <br/>
                            <mark>1.</mark> To retain earnings for capital investment and other purposes, or
                            <br/>
                            <br/>
                            <mark>2.</mark> To distribute earnings in the form of a dividend among shareholders.
                            <br/>
                            <br/>
                            <mark>3.</mark> To retain some earnings and to distribute remaining earnings to shareholders.
                            <br/>
                            <br/>
                            Dividend policy decision is not merely concerned with dividends to be paid in one year, but is concerned
                            with the continious course of action to be followed over a period of several years. 
                            <br/>
                            <br/>
                            Further, it is considered a financing decision because retained profits are an important source of financing 
                            available to a firm.       
                            <br/>
                            <br/>
                            <mark>Dividend Vs Capital Gains</mark>
                            <br/>
                            <br/>
                            When deciding how much cash to distribute to shareholders, financial managers must keep in mind that the 
                            firm's objective is to maximise shareholder value. 
                            <br/>
                            <br/>
                            Hence, the decision should be based on the shareholders' preferences for dividends versus capital gains. 
                            Do investors prefer to have the firm:
                            <br/>
                            <br/>
                            <mark>a)</mark> distribute income as cash dividends, or
                            <br/>
                            <br/>
                            <mark>b)</mark> repurchase stock, or else invest the earnings, both of which should result in capital gains.
                            <br/>
                            <br/>
                            This preference can be considered in terms of the constant growth stock valuation model.
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

export default DividendPolicy