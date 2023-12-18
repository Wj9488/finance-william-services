"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const WealthMaximisation = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Wealth Maximisation" pageSubheading="Week 1"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Wealth is the market value (current market price) of 
                            ordinary shares, as these reflect the future returns
                            shareholders will expect to recieve, taking into account 
                            the level of risk. 
                            <br/>
                            <br/>
                            Hence, corporation managers try to increase the share price. 
                            As the share prices increases, the shareholders' wealth
                            increases.
                            <br/>
                            <br/>
                            A business can maximise shareholder wealth by accepting all
                            projects with Net Present Values. 
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

export default WealthMaximisation