"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const UtilityTheory = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Utility Theory" pageSubheading="Week 4"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            Generally, the notion of utility provides a means of 
                            expressing individual tastes and preferences.
                            <br/>
                            <br/>
                            Utility is the level of satisfaction that an individual derives from 
                            desirable factors, such as going away on holiday, eating caviar or having 
                            wealth.
                            <br/>
                            <br/>
                            Utility and differing levels of it are frequently represented graphically
                            by using utility curves, each one showing a constant level of utility or 
                            satisfaction for differing combinations of related factors.
                            <br/>
                            <br/>
                            <mark>Indifference Curves</mark>
                            <br/>
                            <br/>
                            An investor's utility curves can be defined as the combinations of expected return and 
                            risk that are equally preferable to the investor.
                            <br/>
                            <br/>
                            There is a utility curve for each level of utility. 
                            <br/>
                            <br/>
                            THe investor is indifferent to every point on a particular utility curve,
                            because every point generates the same utility for the investor.
                            <br/>
                            <br/>
                            <mark>Investor Utility</mark>
                            <br/>
                            <br/>
                            Portfolio theory assumes that investors are risk-averse. 
                            <br/>
                            <br/>
                            According to the utility theory, the shape of an investor's utility 
                            curves depends on the investor's risk aversion.
                            <br/>
                            <br/>
                            A more risk-averse investor requires a larger increase in expected 
                            return to compensate for bearing extra units of risk. Hence the utility curves for 
                            this investor would be steeper.
                            <br/>
                            <br/>
                            A less risk-averse investor requires a smaller increase in expected 
                            return to compensate for bearing an extra unit of risk. Hence, the 
                            utility curves for this investor would be shallower.
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

export default UtilityTheory