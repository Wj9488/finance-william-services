"use client"

import Header from "@/Components/Reusable/Header";
import Link from "next/link";
import Transition from "@/Components/utils/Transition";
import BackButton from "@/Components/Reusable/BackButton";
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper";

const AboutPage = () => {
  return (
    <>
    <Transition>
    <main>
      <Header pageHeading="About" pageSubheading="BEA3008" />
      <GenericPageWrapper>
        <BackButton />
        <div className="lg:w-1/2 lg:my-0 my-[5rem]">
            <p>
            THIS WEBSITE WAS BUILT BY A FINANCE FOR MANAGERS STUDENT TO PROVIDE REVISION MATERIAL FOR STUDENTS. 
            EVERY EQUATION ON THIS WEBSITE HAS AN ACCOMPANYING CALCULATOR, SO YOU CAN USE THIS IN YOUR LATER LIFE. SHOULD YOU 
            DISCOVER AN ISSUE WITH THE WEBSITE OR JUST HAVE QUESTIONS FEEL FREE TO CONTACT ME. 
            </p>
        </div>
        <div className="">
            <p><Link className="hover:opacity-50 transition-all duration-200" href={"/contact"}>Contact</Link></p>
        </div>
        </GenericPageWrapper>
    </main>
    </Transition>
    </>
  );
};

export default AboutPage;
