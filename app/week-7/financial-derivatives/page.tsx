"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const FinancialDerivatives = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Financial Derivatives" pageSubheading="Week 7"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Financial derivatives</mark> are risk management tools that 
                            help an organisation to effectively transfer risk.
                            <br/>
                            <br/>
                            A derivative has an underlying asset, its value is derived from 
                            the underlying asset, and it provides protection against adverse
                            movements in the prices of underlying assets.
                            <br/>
                            <br/>
                            For example, derivatives include, forwards, futures, options and the 
                            underlying assets to which they relate include: stocks,
                            bonds, foreign currencies and stock market indices.
                            <br/>
                            <br/>
                            <mark>A financial derivative may be described as: </mark>
                            as a financial contract whose value is derived from the performance
                            of financial assets, interest rates, currency exchange rates or stock 
                            market indices. 
                            <br/>
                            <br/>
                            Derivatives may also be defined as a contract that specifies the rights
                            and obligations between the issuer of the derivative and the holder thereof
                            to receive and deliver future cash flows based on some future event. 
                            <br/>
                            <br/>
                            Some derivatives give the right to sell or buy the underlying asset 
                            at some point in the future for a predetermined price.
                            <br/>
                            <br/>
                            <mark>How are financial derivatives traded?</mark>
                            <br/>
                            <br/>
                            <mark>Standardised derivative contracts</mark> (e.g futures) are traded 
                            or transacted on organised exchanges and these are known as 
                            exchange-traded derivates. 
                            <br/>
                            <br/>
                            Other derivative contracts that are privately negotiated between parties 
                            (e.g forwards) are known as over-the-counter derivatives (OTC Derivatives)
                            as they are not transacted on organised exchanges but are instead privately traded.
                            <br/>
                            <br/>
                            Derivatives are normally issued in the secondary market rather than the 
                            primary market (the first opportunity that investors have to buy a newly issued 
                            security). 
                            <br/>
                            <br/>
                            - A <mark>secondary market</mark> is the market where investors buy securities from 
                            other investors rather than from an issuing company. All stock exchanges are 
                            part of the secondary market.
                            <br/>
                            <br/>
                            <mark>Forward Contracts</mark>
                            <br/>
                            <br/>
                            A forward contract is an agreement to buy or sell an asset at 
                            some date in the future at a price agreed today. 
                            <br/>
                            <br/>
                            A forward contract is not an option; both the buyer and the seller 
                            are obligated to perform under the terms of the contract. 
                            <br/>
                            <br/>
                            The specified price is called <mark>Delivery Price</mark> and it 
                            remains fixed during the term of the contract.
                            <br/>
                            <br/>
                            The current price of the asset is called the <mark>Spot Price</mark>
                            <br/>
                            <br/>
                            <mark>Futures Contracts</mark>
                            <br/>
                            <br/> 
                            A futures contract is a standardised contract, traded on an organised exchange, 
                            to buy or sell an asset at a specified future time at a specified future 
                            price.
                            <br/>
                            <br/>
                            The specified price is called <mark>Delivery Price</mark> and it 
                            remains fixed during the term of the contract.
                            <br/>
                            <br/>
                            The current price of the asset is called the <mark>Spot Price</mark>
                            <br/>
                            <br/>
                            <mark>Forwards and Futures Similarities</mark>
                            <br/>
                            <br/>
                            - Both forward and futures contracts lock in a price today for 
                            the purchase or sale of something in a future time period.
                            <br/>
                            - Forward and futures commit both parties to the contract to take 
                            a specified action.
                            <br/>
                            - Forward and futures contracts involve only one future transaction.
                            <br/>
                            - The party who has a 'short position' in forward or futures contract
                            has committed to sell the good at the specified price in the future.
                            <br/>
                            - Having a 'long position' means you are committed to buy the good 
                            at the specified time in the future. 
                            <br/>
                            - No money changes hands between the long and short parties at the initial 
                            time the contracts are made.
                            <br/>
                            - Only at the maturity of the forward or futures contract will the long 
                            party pay money to the short party and the short party will provide 
                            the good to the long party. 
                            <br/>
                            <br/>
                            <mark>Forwards and Futures Differences</mark>
                            <br/>
                            <br/>
                            - Forward contracts specify precise delivery date.
                            <br/>
                            - Future contracts are typically short-term and the seller can choose
                            any delivery date during the specified delivery month.
                            <br/>
                            - Futures contracts are traded on an exchange.
                            <br/>
                            - Since there is an organised market, futures contracts are more 
                            liquid than forward contracts; buyers of futures contracts can 'net-out'
                            their position by selling a similar futures contract. For instance, a 
                            buyer that has a June contract to buy cotton and a June contract to sell the 
                            same amount of cotton does not bear any risk.
                            <br/>
                            - Forward contracts are traded OTC (over the counter) and not 
                            on an organised exchange. 
                            <br/>
                            - Futures have less credit risk than forward contracts, because the prices
                            of futures contracts are marked to the market daily (for instance, futures 
                            contracts require daily settlement between the buyer and the seller for gains 
                            and losses). The losers must pay the winners each day.
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

export default FinancialDerivatives