"use client";

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
                THIS WEBSITE WAS BUILT BY A FINANCE FOR MANAGERS STUDENT TO
                PROVIDE REVISION MATERIAL FOR STUDENTS. EVERY EQUATION ON THIS
                WEBSITE HAS AN ACCOMPANYING CALCULATOR, SO YOU CAN USE THIS IN
                YOUR LATER LIFE. SHOULD YOU DISCOVER AN ISSUE WITH THE WEBSITE
                OR JUST HAVE QUESTIONS FEEL FREE TO CONTACT ME.
              </p>
            </div>
            <div className="">
              <Link
                className="hover:opacity-50 transition-all duration-200 flex items-center gap-1"
                href={"/contact"}
              >
                Contact
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.50045 8.36074L8.5784 8.36676L8.5784 4.54598L3.63066 9.49372L2.96775 8.8308L7.91549 3.88306L4.10073 3.88909V2.96101H9.50045V8.36074Z"
                    fill="#3A0CA3"
                  />
                </svg>
              </Link>
            </div>
          </GenericPageWrapper>
        </main>
      </Transition>
    </>
  );
};

export default AboutPage;
