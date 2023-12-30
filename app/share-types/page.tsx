"use client";

import BackButton from "@/Components/Reusable/BackButton";
import EquationPageBody from "@/Components/Reusable/EquationPageBody";
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper";
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper";
import Header from "@/Components/Reusable/Header";
import SideNav from "@/Components/Reusable/SideNav";
import Transition from "@/Components/utils/Transition";

const DFPVPage = () => {
  return (
    <>
      <Transition>
        <main>
          <Header pageHeading="Share Types" pageSubheading="Fundamentals" />
          <GenericPageWrapper>
            <BackButton />
            <EquationSectionWrapper>
              <EquationPageBody
                equationExplanation="
                            <mark>Ordinary Shares:</mark><br/><br/>

These are the most prevalent type of shares. Holders of common shares typically have voting rights and receive dividends, which may vary based on the company's profitability.<br/>
<br/>
Benefits: Voting rights, potential for high dividends.<br/>
Risks: Dividends are not guaranteed; common shares are last to be paid in case of liquidation.<br/><br/>
<mark>Preference Shares:</mark><br/><br/>

Preferred shareholders generally do not have voting rights, but they receive dividends before common shareholders and these dividends are often at a fixed rate.<br/>
<br/>
Benefits: Higher claim on assets and earnings, fixed dividend payments.<br/>
Risks: Less potential for price appreciation compared to common shares.<br/><br/>

                            "
              />
            </EquationSectionWrapper>
            <SideNav />
          </GenericPageWrapper>
        </main>
      </Transition>
    </>
  );
};

export default DFPVPage;
