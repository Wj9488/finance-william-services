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
            <Header pageHeading="Agency Relationships" pageSubheading="Week 1"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Agency relationships occur when one party, the principal, 
                            employs another party, the agent, to perform a task on 
                            their behalf. 
                            <br/>
                            <br/>
                            Examples of agency relationships: 
                            <br/>
                            <br/>
                            - Managers can be seen as agents of shareholders.
                            <br/>
                            - Employees can be seen as agents of managers. 
                            <br/>
                            Managers and shareholders as the agents of creditors.
                            <br/>
                            <br/>
                            In most of these principal-agent relationships, conflicts of 
                            interest will exist... 
                            <br/>
                            <br/>
                            The most important conflict is that between the interest of 
                            shareholders and managers. 
                            <br/>
                            <br/>
                            The Agency Problem (Costs)
                            <br/>
                            <br/>
                            Shareholders are reliant on the management of the company
                            to understand and pursue the objectives set for them.
                            <br/>
                            <br/>
                            Although shareholders can intervene via resolutions at general
                            meetings, the managers are usually left alone on a day-to-day basis.
                            <br/>
                            <br/>
                            Management are uniquely placed to make decisions to maximise their 
                            own wealth or happiness rather than the wealth of the shareholders. 
                            <br/>
                            <br/>
                            Losses in value from agency problems - or costs incurred to 
                            mitigate such problems - are called agency costs. 
                            <br/>
                            <br/>
                            Jenson and Meckling (1976) define agency costs as the sum of: 
                            'Monitoring expenditures by the principal, bonding expenditures 
                            by the agent, and residual.' 
                            <br/>
                            <br/>
                            How to potentially fix the problem?
                            <br/>
                            <br/>
                            Managerial reward schemes: E.g executive share option scheme.
                            <br/>
                            <br/>
                            - Managerial compensation can be used to align management and shareholder 
                            interests.
                            <br/>
                            The incentive needs to be structured carefully to make sure that they achieve 
                            their intended goal. 
                            <br/>
                            <br/>
                            Corporate Governance Codes
                            <br/>
                            <br/>
                            - Non-executive directors,
                            <br/>
                            - Executive directors,
                            <br/>
                            - Annual general meeting,
                            <br/>
                            <br/>
                            Takeovers
                            <br/>
                            <br/>
                            - The threat of a takeover may result in better management.
                            <br/>
                            <br/>
                            Information requirements
                            <br/>
                            <br/>
                            - There could be greater information presentation 
                            requirements on managers so behaviour not aligned with 
                            shareholders can be spotted more easily.
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