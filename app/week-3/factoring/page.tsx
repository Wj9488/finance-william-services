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
                            - Sales administration
                            <br/>
                            - Credit Protection
                            <br/>
                            - Provision for finance
                            <br/>
                            <br/>
                            The factor (usually) pays 80% of the face value of an invoice to 
                            the client immediately and the balance less interest and 
                            charges when the account is finally settled by the customer. 
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