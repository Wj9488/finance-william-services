"use client";

import { useState } from "react";

import Transition from "@/Components/utils/Transition";
import Header from "@/Components/Reusable/Header";
import Link from "next/link";
import SideNav from "@/Components/Reusable/SideNav";
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper";

type WeekEquations = {
  week: string;
  equations: EquationList[];
};

type EquationList = {
  equationName: string;
  equationLink: string;
};

const weekOneEquations: EquationList[] = [
  {
    equationName: "Wealth Maximisation",
    equationLink: "/week-1/wealth-maximisation?osh=true",
  },
  {
    equationName: "Shareholder Vs Stakeholder View",
    equationLink: "/week-1/shareholder-vs-stakeholder",
  },
  {
    equationName: "Agency Relationships",
    equationLink: "/week-1/agency-relationships",
  },
  {
    equationName: "Time Value of Money",
    equationLink: "/week-1/tvm",
  },
  {
    equationName: "Cashflows, Annuities and Perpetuities",
    equationLink: "/week-1/cashflows-annuity-perpetuity",
  },
];
const weekTwoEquations: EquationList[] = [
  {
    equationName: "Interest Rates",
    equationLink: "/week-2/interest-rates",
  },
  {
    equationName: "The investment trade-off",
    equationLink: "/week-2/investment-trade-off",
  },
  {
    equationName: "Payback Period (PB)",
    equationLink: "/week-2/investment-appraisal/pb",
  },
  {
    equationName: "Net Present Value (NPV)",
    equationLink: "/week-2/investment-appraisal/npv",
  },
  {
    equationName: "Internal Rate of Return (IRR)",
    equationLink: "/week-2/investment-appraisal/irr",
  },
];
const weekThreeEquations: EquationList[] = [
  {
    equationName: "Working Capital",
    equationLink: "/week-3/working-capital",
  },
  {
    equationName: "Operating Cycle and Cash Conversion Cycle",
    equationLink: "/week-3/operating-cycle-and-cash-conversion-cycle",
  },
  {
    equationName: "Inventory Management",
    equationLink: "/week-3/inventory",
  },
  {
    equationName: "Just In Time System (JIT)",
    equationLink: "/week-3/jit",
  },
  {
    equationName: "Cash",
    equationLink: "/week-3/cash",
  },
  {
    equationName: "Accounts Receivable",
    equationLink: "/week-3/accounts-receivable",
  },
  {
    equationName: "Factoring",
    equationLink: "/week-3/factoring",
  },
];
const weekFourEquations: EquationList[] = [
  {
    equationName: "Risk-Return Relationship",
    equationLink: "/week-4/risk-return-relationship",
  },
  {
    equationName: "Correlation Coefficient",
    equationLink: "/week-4/correlation-coefficient",
  },
  {
    equationName: "Diversifiable vs Non-Diversifiable risk",
    equationLink: "/week-4/diversifiable-vs-non-diversifiable-risk",
  },
  {
    equationName: "Markowitz Frontier (Portfolio Theory 1)",
    equationLink: "/week-4/markowitz-frontier",
  },
  {
    equationName: "Utility Theory",
    equationLink: "/week-4/utility-theory",
  },
];
const weekFiveEquations: EquationList[] = [
  {
    equationName: "Risk-free Asset",
    equationLink: "/week-5/risk-free-asset",
  },
  {
    equationName: "Capital Market Line",
    equationLink: "/week-5/cml",
  },
  {
    equationName: "Total Risk and Diversification",
    equationLink: "/week-5/total-risk-and-diversification",
  },
  {
    equationName: "Security Market Line",
    equationLink: "/week-5/security-market-line",
  },
  {
    equationName: "Capital Asset Pricing Model",
    equationLink: "/week-5/capm",
  },
];

const weekEquations: WeekEquations[] = [
  { week: "Week 1", equations: weekOneEquations },
  { week: "Week 2", equations: weekTwoEquations },
  { week: "Week 3", equations: weekThreeEquations },
  { week: "Week 4", equations: weekFourEquations},
  { week: "Week 5", equations: weekFiveEquations}
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const equationSearchData: EquationList[] = [
    ...weekOneEquations,
    ...weekTwoEquations,
    ...weekThreeEquations,
  ];

  const filteredWeeks: WeekEquations[] = weekEquations
    .map((week) => ({
      week: week.week,
      equations: week.equations.filter((equation) =>
        equation.equationName.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((week) => week.equations.length > 0); // Keep only weeks with matching equations

  return (
    <>
      <Transition>
        <main className="">
          <Header
            pageHeading="Finance For Managers"
            pageSubheading="All Module Theory (Part B in the final exam)"
          />
          <GenericPageWrapper>
            <ul className="lg:hidden flex gap-2 lg:my-0 my-[5rem]">
              <Link
                className="hover:opacity-50 transition-all duration-200 flex items-center gap-1"
                href={"/about"}
              >
                About
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.50045 8.36074L8.5784 8.36676L8.5784 4.54598L3.63066 9.49372L2.96775 8.8308L7.91549 3.88306L4.10073 3.88909V2.96101H9.50045V8.36074Z"
                    fill="#3A0CA3"
                    className="dark:fill-[#cae9ff]"
                  />
                </svg>
              </Link>
              <Link
                className="hover:opacity-50 transition-all duration-200 flex items-center gap-1"
                href={"/contact"}
              >
                Contact
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.50045 8.36074L8.5784 8.36676L8.5784 4.54598L3.63066 9.49372L2.96775 8.8308L7.91549 3.88306L4.10073 3.88909V2.96101H9.50045V8.36074Z"
                    fill="#3A0CA3"
                    className="dark:fill-[#cae9ff]"
                  />
                </svg>
              </Link>
            </ul>
            <div>
              <p>Find Content</p>
              <input
                type="text"
                className="outline-none bg-transparent placeholder:opacity-35 text-[#390ca376] dark:text-[#cae9ff]"
                placeholder="Type here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="mt-[5rem] lg:mt-0 mb-[5rem]">
              <div>
                {filteredWeeks.length > 0 ? (
                  filteredWeeks.map((week, weekIndex) => (
                    <div key={weekIndex}>
                      <p className="">{week.week}</p>
                      <ul className="ml-8">
                        {week.equations.map((equation, equationIndex) => (
                          <li key={equationIndex}>
                            <Link
                              href={equation.equationLink}
                              className="hover:opacity-50 transition-all duration-200"
                            >
                              {equation.equationName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <p>No equation found</p>
                )}
              </div>
            </div>
            <SideNav />
          </GenericPageWrapper>
        </main>
      </Transition>
    </>
  );
}

// Header should have static nav items like the clock, but then have dynamic items like each title.
