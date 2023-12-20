"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const NPV = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Net Present Value" pageSubheading="Week 2 Investment Appraisal Technique"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            <mark>Net Present Value (NPV)</mark>
                            <br/>
                            <br/>
                            NPV is the total present values of each of a project's cash
                            flows (using a prsent value discounting factor) less the initial 
                            investment. 
                            <br/>
                            <br/>
                            The NPV rule states that managers increase shareholders' wealth
                            by taking on projects that are worth more than they cost. (Accept all projects with a positive NPV.) 
                            <br/>
                            <br/>
                            <mark>NPV Decision Rule</mark>
                            <br/>
                            <br/>
                            - If the NPV is positive, accept the project.
                            <br/>
                            - If the NPV is zero - the project breaks even. 
                            <br/>
                            - If the NPV is negative - the project should not 
                            be accepted. 
                            <br/>
                            - For mutually exclusive projects, the company shoudl choose 
                            the one with the highest NPV. 
                            <br/>
                            <br/>
                            <mark>NPV Adjusting for Inflation</mark>
                            <br/>
                            <br/>
                            <mark>REAL cashflows</mark>: Are cashflows not adjusted for inflation.
                            <br/>
                            <mark>Nominal cashflows</mark>: Cashflows adjusted for inflation. 
                            <br/>
                            <br/>
                            Therefore, there are two methods. The Real method and the nominal method. 
                            <br/>
                            <br/>
                            Real Method: Do not inflate cash flows, leave them in real terms and discount
                            using real rate. 
                            <br/>
                            <br/>
                            Nominal Method: multiple cashflows by inflation rate/s and discount using nominal
                            rate. 
                            <br/>
                            <br/>
                            Where general and specific inflation rates are given, use the nominal method. 
                            <br/>
                            <br/>
                            Where general inflation is given, use real method.
                            <br/>
                            <br/>
                            <mark>NPV and corporation tax</mark>
                            <br/>
                            <br/>
                            Corporation tax is charged to company's profits.
                            <br/>
                            <br/>
                            - Operating cashflows will be taxed at corporation tax rate.
                            <br/>
                            - Investment spending attracts capital/written down allowances.
                            <br/>
                            - Tax is normally paid on year in arrears.
                            <br/>
                            <br/>
                            <mark>NPV and Written Down Allowances (WDA)</mark>
                            <br/>
                            <br/>
                            Depreciation is not an allowable expense for tax purposes.
                            <br/>
                            <br/>
                            Cost of assets are deducted from taxable profits in form of a 
                            written down allowance (WDA). 
                            <br/>
                            <br/>
                            WDA are calculated using either straight line depreciation or 
                            reducing balance method of depreciation.
                            <br/>
                            <br/>
                            Total WDAs over life equal to fall in value over period.
                            <br/>
                            <br/>
                            Total WDAs given every year of ownership except final year.
                            <br/>
                            <br/>
                            <mark>NPV advantages</mark>
                            <br/>
                            <br/>
                            - Considers all cashflows of projects.
                            <br/>
                            - Allows for time value of money. 
                            <br/>
                            - Gives an absolute measure, allowing for comparison of projects.
                            <br/>
                            - It is directly related to the objective of maximising 
                            shareholder wealth. 
                            <br/>
                            - It is practical and easy to use once anticipated cashflows have 
                            been identified (something that is hard in reality)
                            <br/>
                            - It gives a clear and unambigious signal to the decision maker.
                            <br/>
                            <br/>
                            <mark>NPV disadvantages</mark>
                            <br/>
                            <br/>
                            - Difficulty obtaining all relevant costs/benefits. 
                            <br/>
                            - Difficult to calculate and to explain to managers. 
                            <br/>
                            - Assumes cashflows occur at annual intervals. 
                            <br/>
                            - The need to estimate a cost of capital.
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

export default NPV