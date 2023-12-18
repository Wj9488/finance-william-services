"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const ShareholderVsStakeholder = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Shareholder Vs Stakeholder View" pageSubheading="Week 1"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Typical stakeholders for an organisation in addition to
                            shareholders would include: 
                            <br/>
                            <br/>
                            Employees, Suppliers, Customers, The Community etc.
                            <br/>
                            <br/>
                            Many argue that businesses must adopt a stakeholder view, 
                            which involves: 
                            <br/>
                            <br/>
                            - Balancing the competing claims of a wide range of stakeholders.
                            <br/>
                            - Taking into account the broader economic and social responsibilities. 
                            <br/>
                            <br/>
                            Studies show that corporations with good business ethics and good 
                            corporate governance generally generate higher stock returns. 
                            <br/>
                            <br/>
                            One Overriding Objective: 
                            <br/>
                            <br/>
                            Still, maximising shareholder wealth is the overriding objective for 
                            most corporations.
                            <br/>
                            <br/>
                            By focusing on a single objective clear decisions can be made.
                            <br/>
                            <br/>
                            This objective leads to the development of products that consumers need. E.g, new 
                            jobs, technology and efficient services. 
                            <br/>
                            <br/>
                            Looking after shareholders does mean overlooking other stakeholders. 
                            <br/>
                            <br/>
                            In BEA3008 we assume that the primary objective of a business is to maximise
                            shareholder wealth. 
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

export default ShareholderVsStakeholder