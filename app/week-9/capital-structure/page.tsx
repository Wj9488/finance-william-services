"use client"

import BackButton from "@/Components/Reusable/BackButton"
import EquationPageBody from "@/Components/Reusable/EquationPageBody"
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper"
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper"
import Header from "@/Components/Reusable/Header"
import SideNav from "@/Components/Reusable/SideNav"
import Transition from "@/Components/utils/Transition"

const CapitalStructure = () => {
  return (
    <>
    <Transition>
        <main>
            <Header pageHeading="Capital Structure" pageSubheading="Week 9"/>
            <GenericPageWrapper>
                <BackButton />
                    <EquationSectionWrapper>
                        <EquationPageBody 
                            equationExplanation="
                            The capital structure of companies can be seperated into 
                            two types. Companies can have: 
                            <br/>
                            <br/>
                            - A capital structure which consists entirely of equity capital
                            (all equity financed companies)
                            <br/>
                            <br/>
                            - A mixed capital structure, where debt capital and equity capital 
                            are held in varying proportions.
                            <br/>
                            <br/>
                            <mark>Capital structure question</mark> 
                            <br/>
                            <br/>
                            Refers to the financing decision of equity (gearing) vs debt (leverage). 
                            <br/>
                            <br/>
                            Key theories: 
                            <br/>
                            - Modigliani and Miller (theoretical, algebraic)
                            <br/>
                            - Traditional (discursive)
                            <br/>
                            - Trade-off (discursive)
                            <br/>
                            - Pecking order (discursive) (SUPER IMPORTANT)
                            <br/>
                            - Signalling (discursive)
                            <br/>
                            - Agency (discursive)
                            <br/>
                            <br/>
                            <mark>Modigliani and Miller (1958, 1963)</mark><sup>May 2018 Exam Question</sup>
                            <br/>
                            <br/>
                            <a href='https://ele.exeter.ac.uk/pluginfile.php/2163257/mod_resource/content/2/BEA3008%20-%20May%202018%20questions.pdf' target='_blank' class='hover:opacity-50 transition-all duration-200' style='color:#fb5607'>Exam Paper Link (2018)</a>
                            <br/>
                            <br/>
                            In the absence of taxation, the market value of a firm is 
                            independent of its capital structure and is given by the present
                            value of its expected net operating income. 
                            <br/>
                            <br/> 
                            In the presence of corporate taxation, the market value of a levered firm 
                            exceeds the value of the equivalent unlevered firm by an amount equal to the market 
                            value of its debt multiplied by the corporation tax rate it faces. 
                            <br/> 
                            <br/> 
                            In the absence of taxation, a firm's cost of equity increases linearly with increasing
                            leverage (as measured by the ratio of market value of its debt to market 
                                value of its equity); the slope of the increase being the excess of the all equity 
                                financed rate (ρ) appropriate to its risk class above the cost of debt. 
                            <br/>
                            <br/>
                            Similarly in the presence of corporate taxation, but with the slope of increase of the firm’s
                            cost equity being reduced by a factor of (1-tc) as compared to the “no taxation” case. 
                            <br/>
                            <br/>
                            In the absence of taxation, a firm’s weighted average cost of capital is equal to the all
                            equity financed rate (ρ) appropriate to its risk class.
                            <br/>
                            <br/>
                            In the presence of corporate taxation, a firm’s WACC decreases with increasing leverage
                            (as measured by the ratio of market value of its debt to total market value of the firm);
                            asymptotically towards a limit being the all equity financed rate (ρ) appropriate to its risk
                            multiplied by one minus the corporation tax rate it faces.
                            <br/>
                            <br/>
                            <mark>Pecking Order Theory</mark><sup>(Comes up in nearly all past exams)</sup> 
                            <br/>
                            <br/>
                            <a href='https://ele.exeter.ac.uk/pluginfile.php/2163255/mod_resource/content/2/BEA3008%20-%20May%202019%20Questions.pdf' target='_blank' class='hover:opacity-50 transition-all duration-200' style='color:#fb5607'>Exam Paper Link (2019)</a>
                            <br/>
                            <br/>
                            The pecking order theory states that firms prefer to issue debt rather than equity if 
                            internal finance is insufficient. Myers and Malijuf (1984) provide justification for the Pecking 
                            order that is based on asymmetric information. They make two assumptions about managers: 
                            <br/>
                            <br/>
                            - A firm's managers know more about the company's current earnings and investment opportunities 
                            than do outside investors. 
                            <br/>
                            - Managers act in the interest of existing shareholders. 
                            <br/>
                            <br/>
                            Directors have more information about retained earnings, debt and equity. Shareholders use director's actions
                            (signals) to give them information about the company, therefore to buy and or sell
                            shares. Directors would use retained earnings because it gives no signal at all, and shareholders would not
                            buy or sell shares. A company's cost debt can be seen as consisting of two elements: 
                            <br/>
                            <br/>
                            - The risk free rate of interest and
                            <br/>
                            - A risk premium (which is a function of the financial markets perceived risk of default)
                            <br/>
                            <br/>
                            Suppose that a company's managers consider that debt finance is cheap (i.e the 
                                interest cost is lower than it should be because lenders are underestimating the risk of 
                                default); managers will want to issue more debt to take advantage of its cheapness. Suppose
                            that the management believe that the cost of debt is too high because lenders are overestimating 
                            the risks of default, managers will not want to issue any debt, but will prefer to issue equity.
                            Lenders will read signals into new issues of debt; they may view an issue of new debt as indicating
                            that management view debt as cheap because the risk of default is underestimated by the market forces.
                            Hence, the financial market will revise its view of the perceived risk of default and raise the company's 
                            cost of debt. 
                            <br/>
                            <br/>
                            Managers will like to raise new equity finance when their shares are highly priced, but issue
                            debt when the share price is low. The decision by companies to take the timing factor into account 
                            may be very sensible because of the presence of 'asymmetrical information'. This is
                            consistent with 'The Market Timing Theory'. Baker and Wurgler (2002) argue that equity market
                            timing has a persistent effect on the capital structure of the firm, and conclude that the capital
                            structure of a firm is the cumulative outcome of past attempts to time the equity market. Thus,
                            management may be able to correctly identify situations where the stock market is mispricing
                            (either overvaluing, or undervaluing) the company’s shares. Investors will be aware of these
                            management thought processes and so will see an issue of new equity by a company as a
                            signal that the management believe the shares to be overvalued. As a result, investors may
                            start to sell the company’s shares, causing the price to fall. 
                            <br/>
                            <br/>
                            Hence, management face a dilemna: if they issue equity there is a risk the market will interpret this 
                            as a signal that the shares are overvalued and so will start to sell the company's shares, causing 
                            the share price to fall. If they issue debt, the market will interpret this as a signal that management
                            believe that the market is underestimating the company's risk of default, and so will respond
                            by raising the company's cost of debt (by raising the required risk premium). The solution to this financing
                            dilemna is simple: rely as much as possible on internally generated finance (retained earnings) and 
                            so avoid the possible adverse signals given out by either equity or debt financing. The reasoning above 
                            leads to the pecking order: 
                            <br/>
                            <br/>
                            - Rule 1: Finance the company as much as possible through the use of retained earnings. 
                            <br/>
                            <br/>
                            - Rule 2: If external finance has to be used (because the management have identified more profitable positive NPV investments
                                than can be financed with retained earnings alone), issue debt until debt capacity is reached and 
                                only then, if positive NPV projects still remain to be financed, issue equity. 
                                <br/>
                            <br/>
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

export default CapitalStructure