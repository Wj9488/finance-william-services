"use client";

import BackButton from "@/Components/Reusable/BackButton";
import CalcHeader from "@/Components/Reusable/CalcHeader";
import EquationPageBody from "@/Components/Reusable/EquationPageBody";
import EquationSectionWrapper from "@/Components/Reusable/EquationSectionWrapper";
import EquationWrapperDiv from "@/Components/Reusable/EquationWrapper";
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper";
import Header from "@/Components/Reusable/Header";
import SideNav from "@/Components/Reusable/SideNav";
import Transition from "@/Components/utils/Transition";

import { useState } from "react";

const SingleCashFlow = () => {
      // State for Calculator 1
  const [pv, setPv] = useState<number | ''>('');
  const [futureValueFactor, setFutureValueFactor] = useState<number | ''>('');
  const [futureValue, setFutureValue] = useState<number | ''>('');

  // State for Calculator 2
  const [fv, setFv] = useState<number | ''>('');
  const [presentValueFactor, setPresentValueFactor] = useState<number | ''>('');
  const [presentValue, setPresentValue] = useState<number | ''>('');

  // Handler for Calculator 1
  const calculateFutureValue = () => {
    if (typeof pv === 'number' && typeof futureValueFactor === 'number') {
      setFutureValue(pv * futureValueFactor);
    }
  };

  // Handler for Calculator 2
  const calculatePresentValue = () => {
    if (typeof fv === 'number' && typeof presentValueFactor === 'number') {
      setPresentValue(fv * presentValueFactor);
    }
  };
  return (
    <>
      <Transition>
        <main>
          <Header
            pageHeading="Compounding vs Discounting"
            pageSubheading="Week 1"
          />
          <GenericPageWrapper>
            <BackButton />
            <EquationSectionWrapper>
              <EquationPageBody
                equationExplanation="
                Compounding and discounting are two ways of finding the present values of cashflows. 
                <br/>
                <br/>
                To find the present value of a future cashflow, we use discounting.
                <br/>
                <br/>
                To find the value of a present cashflow in the future, we use compounding.
                <br/>
                <br/>
                Both mechanisms apply factors to change these cashflows from present to future
                or from future to present.
                <br/>
                <br/>
                Future Value Factor: brings present cashflows to the future.
                <br/>
                <br/>
                Present Value Factor: brings future cashflows to the present.
                <br/>
                <br/>
                <code>FV = PV x Future Value Factor</code>
                <br/>
                <br/>
                <code>PV = FV x Present Value Factor</code>
                "
              />
            <EquationWrapperDiv>
              <div>
                <CalcHeader heading="Future Value Calculator"/>
                <input
                  type="number"
                  className="calc_input"
                  placeholder="Present Value (PV)"
                  value={pv}
                  onChange={(e) => setPv(Number(e.target.value))}
                />
                <input
                  type="number"
                  className="calc_input"
                  placeholder="Future Value Factor"
                  value={futureValueFactor}
                  onChange={(e) => setFutureValueFactor(Number(e.target.value))}
                />
                <button className="calc_button" onClick={calculateFutureValue}>Calculate FV</button>
                <p>Future Value: {futureValue}</p>
              </div>

              <div>
                <CalcHeader heading="Present Value Calculator"/>
                <input
                  type="number"
                  className="calc_input"
                  placeholder="Future Value (FV)"
                  value={fv}
                  onChange={(e) => setFv(Number(e.target.value))}
                />
                <input
                  type="number"
                  className="calc_input"
                  placeholder="Present Value Factor"
                  value={presentValueFactor}
                  onChange={(e) => setPresentValueFactor(Number(e.target.value))}
                />
                <button className="calc_button" onClick={calculatePresentValue}>Calculate PV</button>
                <p>Present Value: {presentValue}</p>
              </div>
            </EquationWrapperDiv>
            </EquationSectionWrapper>
            <SideNav />
          </GenericPageWrapper>
        </main>
      </Transition>
    </>
  );
};

export default SingleCashFlow;
