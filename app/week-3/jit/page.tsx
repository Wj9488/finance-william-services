"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const JIT = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Just In Time System" pageSubheading="Week 3 Inventory Management"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            - Imported from Japan
                            <br/>
                            - Used to minimise inventory holding cost.
                            <br/>
                            - The philosophy is that material should arrive at exactly
                            the time they are needed for production.
                            <br/>
                            - Ideally the firm would have only work-in-progress inventory.
                            <br/>
                            - The system uses no (or very little) safety stock. 
                            <br/>
                            - The goal of JIT systems is to enhance manufacturing efficiency.
                            <br/>
                            - It uses inventory as a tool for attaining efficiency by emphasising
                            quality of materials used and their timely delivery.
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

export default JIT