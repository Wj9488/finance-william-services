"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const AgencyRelationships = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Key cashflow types" pageSubheading="Week 1"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Cashflows:</mark> 
                            <br/>
                            <br/>
                            Single Cashflows: A lump sum of money given at a point in time.
                            <br/>
                            <br/>
                            <mark>Multiple Cashflows:</mark> 
                            <br/>
                            <br/>
                            - Uneven cashflows
                            <br/>
                            - Regular cashflows
                            <br/>
                            - Infinite regular cashflows
                            <br/>
                            - Annual cashflows, more frequent cashflows etc.
                            <br/>
                            <br/>
                            <mark>Conventional Cashflow:</mark>
                            <br/>
                            <br/>
                            Typically structured as an initial outlay or outflow, followed
                            by a number of inflows over a period of time. 
                            <br/>
                            <br/>
                            <mark>Non-Conventional cashflows:</mark>
                            <br/>
                            <br/>
                            Cash flows that change more than once during a project's
                            lifetime.
                            <br/>
                            <br/>
                            <mark>Annuity:</mark>
                            <br/>
                            <br/>
                            A series of equal payments or receipts that occur at 
                            evenly spaced intervals.
                            <br/>
                            <br/>
                            Examples: Rental payment, regular deposits to a 
                            savings account, monthly home mortgage payment etc.
                            <br/>
                            <br/>
                            An annuity can occur at the beginning or the end of 
                            each period. 
                            <br/>
                            <br/>
                            <mark>Ordinary Annuity:</mark> The payment or receipt occurs at the end of each period.
                            <br/>
                            <br/>
                            <mark>Annuity Due</mark>: The payment or receipt occurs at the beginning of each period. 
                            <br/>
                            <br/>
                            <mark>Delayed Annuity</mark>: An annuity with the first payment or receipt starting after year 1.
                            <br/>
                            <br/>
                            <mark>Growing Annuity</mark>: The payment or recepit increases each period at a constant percentage (g).    
                            <br/>
                            <br/>
                            <mark>Perpetuities:</mark>
                            <br/>
                            <br/>
                            This is an annuity that continues indefinitely. A constant stream
                            of identical casflows with no end.
                            <br/>
                            <br/>
                            The concept of perpetuity is used often in financial theory, such as the
                            dividend discount model (DDM), by Gordon Growth, used for stock
                            valuation. 
                            <br/>
                            <br/>
                            <mark>Ordinary Perpetuity:</mark> A regular perpetual stream of payments starting at the end of the period.
                            <br/>
                            <br/>
                            <mark>Delayed Perpetuity</mark>: A perpetuity with the first payment starting after year 1. (E.g Four years from now).
                            <br/>
                            <br/>
                            <mark>Growing Perpetuity</mark>: A perpetuity where the annual payment increases each year at a constant percentage (g). 
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

export default AgencyRelationships