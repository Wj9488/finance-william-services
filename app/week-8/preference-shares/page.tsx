"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const PreferenceShares = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Preference Shares" pageSubheading="Week 8"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Preference Shares</mark>
                            <br/>
                            <br/>
                            Preference shares usually offer their owners a fixed rate of dividend 
                            per year. 
                            <br/>
                            <br/>
                            However, if the firm has insufficient profits the amount paid would be reduced
                            and sometimes be 0. 
                            <br/>
                            <br/>
                            The dividend on preference shares is paid before anything is paid out to ordinary shareholders. 
                            <br/>
                            <br/>
                            <mark>Pros and Cons of Preference Shares (From the firm perspective)</mark>
                            <br/>
                            <br/>
                            Advantages:
                            <br/>
                            - No need to pay out a dividend if profits are poor.
                            <br/>
                            - Do not dilute the ownership of the company.
                            <br/>
                            - Unsecured, so preserve debt capacity. 
                            <br/>
                            <br/>
                            Disadvantages:
                            <br/>
                            - Higher cost compared to debt due to tax inefficiency. 
                            <br/>
                            <br/>
                            <mark>Special types of preference shares</mark>
                            <br/>
                            <br/>
                            - Convertible: preference shares can be converted into ordinary shares at 
                            some future date. 
                            <br/>
                            <br/>
                            - Cumulative: if a dividend is missed, it will be carried forward for payment at some 
                            future date. 
                            <br/>
                            <br/>
                            - Redeemable: holders will eventually be repaid their capital, usually at par.
                            <br/>
                            <br/>
                            - Participating: in an exceptionally good year, the director may decide to declare an 
                            extra dividend for these preference shareholders above the regular fixed return. Holders 
                            participate in the profits otherwise attributable to ordinary shareholders. 
                            <br/>
                            <br/>
                            Preference shares are therefore called 'hybrids' exhibiting both characteristics of 
                            equity and debt. 
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

export default PreferenceShares