"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const Factoring = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Factoring" pageSubheading="Week 3"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Institutions called 'Factors' are mainly 
                            subsidiaries of the major banks and members of the 
                            Factors and Discounters Association.
                            <br/>
                            <br/>
                            These institutions offer 'debt factoring services'
                            <br/>
                            <br/>
                            <mark>Factoring</mark>: Factoring involves raising immediate
                            cash based on the security of the company's debtors, thus accelerating
                            payment from customers. 
                            <br/>
                            <br/>
                            A factor provides three main services:
                            <br/>
                            <br/>
                            <mark>- Sales administration:</mark> a factor manages the various stages of sales, from recording 
                            sales to sending out invoices and reminders and collecting payments. This reduces the in house 
                            administration costs and provides access to more efficient, specialist debtor management team 
                            for the client.
                            <br/>
                            <br/>
                            <mark>- Credit Protection:</mark> Two types of credit protection: 'without recourse' and 'with recourse'.
                            Without recourse services mean that the debtor bears all the risks of bad debts. Without recourse 
                            factors require total control of credit approval, monitors customers' payments and attempts to 
                            collect payment. Under this type of factoring businesses using the factoring facility must pay interest
                            to the factor for the period specified by the factoring agreement. When the business retains
                            responsibility for collection of bad debts, the service is called 'with recourse'. 
                            <br/>
                            <br/>
                            <mark>- Provision for finance:</mark> A factor will also advance funds to a business, up to 
                            80% of approved invoices.
                            <br/>
                            <br/>
                            The factor (usually) pays 80% of the face value of an invoice to 
                            the client immediately and the balance less interest and 
                            charges when the account is finally settled by the customer. 
                            <br/>
                            <br/>
                            <mark>Advantages of Factoring</mark>
                            <br/>
                            <br/>
                            - Admin cost savings
                            <br/>
                            - Reduction in the need for management control
                            <br/>
                            - Good for small and fast growing businesses where the credit control 
                            department may not be able to cope with rapid growth.
                            <br/>
                            - It is an alternative form of financing. Useful in improving liquidity of firms
                            with high level of debtors. 
                            <br/>
                            <br/>
                            <mark>Disadvantages of Factoring</mark>
                            <br/>
                            <br/>
                            - The finance may be more expensive than alternative sources, e.g overdraft facilities.
                            <br/>
                            - In collecting outstanding debts a factor may 'push' a debtor for payment. This may result in 
                            loss of customers. 
                            <br/>
                            - Factoring has a bad reputation and has been associated with failing companies. The use of a factor 
                            can indicate a liquidity problems within a company.
                            <br/>
                            - Once a company starts factoring it is difficult to return to an internal debt collection system.
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

export default Factoring