"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const IRR = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Internal Rate of Return" pageSubheading="Week 2 Investment Appraisal Technique"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Internal Rate of Return (IRR)</mark>
                            <br/>
                            <br/>
                            The Internal Rate of Return (IRR) is a financial metric used to evaluate 
                            the profitability of an investment or project. It represents the 
                            interest rate at which the net present value (NPV) of all the cash 
                            flows (both positive and negative) from a project or investment 
                            equals zero.  
                            <br/>
                            <br/>
                            The IRR should exceed the cost of capital to the organisation. E.g if 
                            a company is paying a 7% cost of capital (to borrow money) then an IRR of 
                            6% would make the project unprofitable. 
                            <br/>
                            <br/>
                            We always need to get to 0 when using IRR. IRR is used to determine if 
                            a project is profitable for the company. It is guess work and is often calculated
                            using an algorithm. 
                            <br/>
                            <br/>
                            In IRR we are trying to find the specific discount rate that makes the NPV
                            equal zero. 
                            <br/>
                            <br/>
                            The IRR is the rate that produces a 0 NPV. When we have a 0 NPV we have a 
                            break even point. When the IRR exceeds cost of capital the project will make money 
                            because the NPV is is positive.     
                            <br/>
                            <br/>
                            A higher IRR than the cost of capital indicates that the project is 
                            expected to generate returns greater than the cost of financing the operation.
                            The opposite is true when the IRR is lower than the cost of capital.
                            <br/>
                            <br/>
                            <mark>IRR Decision Rule</mark>
                            <br/>
                            <br/>
                            Accept an investment project if the opportunity cost of 
                            capital is less than the internal rate of return (IRR).
                            <br/>
                            It is called an opportunity cost because if the company decides 
                            to invest in this project, it will forgo other similar investment
                            opportunities.
                            <br/>
                            <br/>
                            <mark>IRR advantages</mark>
                            <br/>
                            <br/>
                            - Represents a break-even point.
                            <br/>
                            - Takes into account time value of money. 
                            <br/>
                            - Considers all cashflows of projects.
                            <br/>
                            - Is a percentage and is therefore easily understood. 
                            <br/>
                            - A company selecting projects where the IRR exceeds the 
                            cost of capital should increase shareholders' wealth.
                            <br/>
                            <br/>
                            <mark>IRR disadvantages</mark>
                            <br/>
                            <br/>
                            - It is not a measure of absolute profitability. 
                            <br/>
                            - May conflict with NPV decision. 
                            <br/>
                            - Non-conventional cashflows may give rise to no IRR or multiple IRRs. 
                            <br/>
                            - Fails to recognise value; it is only concerned with percentage returns.
                            <br/>
                            - Assumes cash invested at IRR.
                            <br/>
                            - It is not possible to compare projects if scales of their
                            investments are different because a small scale project may
                            have a high IRR but actually increase wealth by very little in absolute
                            terms.
                            <br/>
                            <br/>
                            <mark>IRR Disadvantages (Mutually Exclusive Projects)</mark>
                            <br/>
                            <br/>
                            These are projects in which acceptance of one project excludes the 
                            others from consideration.
                            <br/>
                            <br/>
                            - Since NPV is an absolute measure, it will rank a project adding more value 
                            higher regardless of the initial investment amount required.
                            <br/>
                            <br/>
                            - IRR, on the other hand, is a relative measure, and it will rank projects
                            offering higher return regardless of the total value added. 
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

export default IRR