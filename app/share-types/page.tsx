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
                            Common Shares:<br/><br/>

Description: These are the most prevalent type of shares. Holders of common shares typically have voting rights and receive dividends, which may vary based on the company's profitability.<br/>
Benefits: Voting rights, potential for high dividends.<br/>
Risks: Dividends are not guaranteed; common shares are last to be paid in case of liquidation.<br/><br/>
Preferred Shares:<br/><br/>

Description: Preferred shareholders generally do not have voting rights, but they receive dividends before common shareholders and these dividends are often at a fixed rate.<br/>
Benefits: Higher claim on assets and earnings, fixed dividend payments.<br/>
Risks: Less potential for price appreciation compared to common shares.<br/><br/>
Cumulative Shares:<br/><br/>

Description: A type of preferred share. If dividends are missed, they accumulate and must be paid out before common shareholders receive dividends.<br/>
Benefits: Accumulated dividends ensure payment even after delays.<br/>
Risks: Similar to preferred shares, less potential for growth compared to common shares.<br/><br/>
Non-Cumulative Shares:<br/><br/>

Description: Another type of preferred share where missed dividends do not accumulate. If a dividend is skipped, it is lost forever.<br/>
Benefits: Often have a higher dividend yield than cumulative shares.<br/>
Risks: Risk of losing dividends if the company decides not to pay.<br/><br/>
Redeemable Shares:<br/><br/>

Description: These shares can be bought back by the company at a future date and a set price.<br/>
Benefits: Security of knowing shares can be sold back to the company.<br/>
Risks: The company may choose not to exercise its option to buy back.<br/><br/>
Non-Voting Shares:<br/><br/>

Description: Shareholders do not have voting rights in the company's decisions.<br/>
Benefits: Typically offered at a lower price with potential for dividends.<br/>
Risks: Lack of influence over company decisions.
<br/><br/>
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
