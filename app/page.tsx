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
const ReadingWeek: EquationList[] = [
  {
    equationName: "Reading Week",
    equationLink: "/#?reading-week",
  },
];
const weekSixEquations: EquationList[] = [
  {
    equationName: "Understanding Risk",
    equationLink: "/week-7/understanding-risk",
  },
  {
    equationName: "Risk Management",
    equationLink: "/week-7/risk-management",
  },
  {
    equationName: "Non-Hedging Strategies",
    equationLink: "/week-7/risk-management/non-hedging-strategies",
  },
  {
    equationName: "Hedging Strategies",
    equationLink: "/week-7/risk-management/hedging-strategies",
  },
  {
    equationName: "Financial Derivatives",
    equationLink: "/week-7/financial-derivatives",
  },
  {
    equationName: "Options",
    equationLink: "/week-7/options",
  },
];
const weekEightEquations: EquationList[] = [
  {
    equationName: "Why firms need finance and sources of finance",
    equationLink: "/week-8/why-firms-need-finance-and-sources-of-finance?osh=true",
  },
  {
    equationName: "Ordinary Shares (Equity Capital)",
    equationLink: "/week-8/ordinary-shares?osh=true",
  },
  {
    equationName: "Preference Shares",
    equationLink: "/week-8/preference-shares?osh=true",
  },
  {
    equationName: "Financial Debt Capital",
    equationLink: "/week-8/financial-debt-capital",
  },
  {
    equationName: "Cost of Capital",
    equationLink: "/week-8/cost-of-capital",
  },
  {
    equationName: "Factors affecting cost of capital.",
    equationLink: "/week-8/factors-affecting-cost-of-capital",
  },
];
const weekNineEquations: EquationList[] = [
  {
    equationName: "Gearing, Leverage and Bankruptcy",
    equationLink: "/week-9/gearing-leverage-bankruptcy?osh=true",
  },
  {
    equationName: "Capital Structure",
    equationLink: "/week-9/capital-structure",
  },
  {
    equationName: "Capital Structure Continued",
    equationLink: "/week-9/capital-structure-continued",
  },
]
const weekTenEquations: EquationList[] = [
  {
    equationName: "Dividend Policy",
    equationLink: "/week-10/dividend-policy",
  },
  {
    equationName: "Dividend Irrelevance Theory",
    equationLink: "/week-10/mm-dividend-irrelevance",
  },
  {
    equationName: "Dividend Relevance Theory",
    equationLink: "/week-10/dividend-relevance",
  },
  {
    equationName: "Dividend Policy in Practice",
    equationLink: "/week-10/dividend-policy-in-practice",
  },
  {
    equationName: "Efficient Market Hypothesis",
    equationLink: "/week-10/efficient-market-hypothesis",
  },
  {
    equationName: "Why care about Market Efficiency?",
    equationLink: "/week-10/market-efficiency-importance",
  },
]

const weekEquations: WeekEquations[] = [
  { week: "Week 1", equations: weekOneEquations },
  { week: "Week 2", equations: weekTwoEquations },
  { week: "Week 3", equations: weekThreeEquations },
  { week: "Week 4", equations: weekFourEquations },
  { week: "Week 5", equations: weekFiveEquations },
  { week: "Week 6", equations: ReadingWeek },
  { week: "Week 7", equations: weekSixEquations },
  { week: "Week 8", equations: weekEightEquations },
  { week: "Week 9", equations: weekNineEquations},
  { week: "Week 10", equations: weekTenEquations}
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
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
                    fill="#070707"
                    className="dark:fill-[#ebebeb]"
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
                    fill="#070707"
                    className="dark:fill-[#ebebeb]"
                  />
                </svg>
              </Link>
            </ul>
            <div>
              <p>Find Content</p>
              <input
                type="text"
                className="outline-none bg-transparent placeholder:opacity-35 text-[#fb5607] dark:text-[#fb5607] placeholder-[#07070786] dark:placeholder-[#ebebeb85]"
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
                      <p className="text-[#fb5607] underline">{week.week}</p>
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
                  <p className="">No results match your search.</p>
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

