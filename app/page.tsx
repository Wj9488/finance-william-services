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
    equationName: "Compounding Interest",
    equationLink: "/week-1/compounding-interest",
  },
  {
    equationName: "Ordinary Annuity",
    equationLink: "/week-1/ordinary-annuity",
  },
  {
    equationName: "Perpetual Annuity",
    equationLink: "/week-1/perpetual-annuity",
  },
  { equationName: "Growing Annuity", equationLink: "/week-1/growing-annuity" },
];
const weekTwoEquations: EquationList[] = [
  {
    equationName: "ORDINARY ANNUITY (COMPOUNDING MORE FREQUENTLY)",
    equationLink: "/week-1/compounding-interest",
  },
  {
    equationName: "OPTIMAL ORDER QUANTITY",
    equationLink: "/week-1/ordinary-annuity",
  },
  {
    equationName: "OPTIMAL ORDER QUANTITY (With stock out)",
    equationLink: "/week-1/perpetual-annuity",
  },
  {
    equationName: "MARKOWITZ FRONTIER",
    equationLink: "/week-1/growing-annuity",
  },
  {
    equationName: "INCREMENTAL STATIC REGENERATION",
    equationLink: "/week-1/growing-annuity",
  },
];
const weekThreeEquations: EquationList[] = [
  {
    equationName: "ORDINARY ANNUITY (COMPOUNDING MORE FREQUENTLY)",
    equationLink: "/week-1/compounding-interest",
  },
  {
    equationName: "OPTIMAL ORDER QUANTITY",
    equationLink: "/week-1/ordinary-annuity",
  },
  {
    equationName: "OPTIMAL ORDER QUANTITY (With stock out)",
    equationLink: "/week-1/perpetual-annuity",
  },
  {
    equationName: "MARKOWITZ FRONTIER",
    equationLink: "/week-1/growing-annuity",
  },
  {
    equationName: "INCREMENTAL STATIC REGENERATION",
    equationLink: "/week-1/growing-annuity",
  },
  {
    equationName: "Ordinary Annuity",
    equationLink: "/week-1/ordinary-annuity",
  },
  {
    equationName: "Perpetual Annuity",
    equationLink: "/week-1/perpetual-annuity",
  },
  { equationName: "Growing Annuity", equationLink: "/week-1/growing-annuity" },
];

const weekEquations: WeekEquations[] = [
  { week: "Week 1", equations: weekOneEquations },
  { week: "Week 2", equations: weekTwoEquations },
  { week: "Week 3", equations: weekThreeEquations },
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
            pageSubheading="All Finance Equations"
          />
          <GenericPageWrapper>
            <ul className="flex gap-2 lg:my-0 my-[5rem]">
              <li><Link className="hover:opacity-50 transition-all duration-200" href={"/about"}>About</Link>{" "},{" "}<Link className="hover:opacity-50 transition-all duration-200" href={"/contact"}>Contact</Link></li>
            </ul>
            <div>
              <p>FIND AN EQUATION</p>
              <input
                type="text"
                className="outline-none bg-transparent uppercase placeholder:opacity-35"
                placeholder="TYPE HERE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="my-[5rem]">
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
