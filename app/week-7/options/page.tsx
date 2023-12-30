"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const Options = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Options" pageSubheading="Week 8"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Understanding Options</mark>
                            <br/>
                            <br/>
                            Options are the right to do something but not the 
                            obligation. 
                            <br/>
                            <br/>
                            We concentrate on the right to buy or sell company shares. 
                            <br/>
                            <br/>
                            Options are enforceable contracts. 
                            <br/>
                            <br/>
                            Options can be used to provide protection against an invsetment's downside, and 
                            at the same time, take advantage of its upside potential. 
                            <br/>
                            <br/>
                            <mark>What defines an option?</mark>
                            <br/>
                            <br/>
                            - Identity of underlying asset (stock)
                            <br/>
                            - Number of units covered
                            <br/>
                            - Exercise price: if the owner decides to take up their right to 
                            buy or sell this is known as exercising the option. This price is known 
                            in advance.
                            <br/>
                            - Expiration: the right expires on the option's expiry date.
                            <br/>
                            <br/>
                            <mark>Option terminology</mark>
                            <br/>
                            <br/>
                            Exercise date: 
                            <br/>
                            - American options can be exercised at any time up to the option's expiry date.
                            <br/>
                            - European options can only be exercised on their epiry date.
                            <br/>
                            <br/>
                            <mark>The right to buy (call option) or sell (put option)</mark>
                            <br/>
                            <br/>
                            Call Option: the owner of an equity call option has the right but not the obligation 
                            to buy a specific quantity of shares in a particular company at a fixed price.
                            <br/>
                            <br/>
                            Put Option: the owner of a put option has the right but not the obligation to 
                            sell a specific quantity of a particular share at a fixed exercise price. 
                            <br/>
                            <br/>
                            <mark>Option Cost / Value</mark>
                            <br/>
                            <br/>
                            There is an 'original cost' to gaining the rights under an option contract paid by the 
                            buyer to the seller when the seller sells a call or put option.
                            <br/>
                            <br/>
                            The rights under the option contract can be traded in the market. The person with the rights
                            can sell them on to a third party in an options market. 
                            <br/>
                            <br/>
                            <mark>Option Pricing Model Assumptions</mark>
                            <br/>
                            <br/>
                            - No transaction costs
                            <br/>
                            - No taxes
                            <br/>
                            - Constant risk free interest rate
                            <br/>
                            - Stocks pay no dividends 
                            <br/>
                            - The option is European type 
                            <br/>
                            - No restriction on short sales
                            <br/>
                            - Markets open continuously
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

export default Options