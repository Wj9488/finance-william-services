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
                This website was built by a finance for managers student to
                provide revision material for students. Every equation on this
                website has an accompanying calculator. 
                Should you discover an issue with the website
                or just have questions feel free to <Link className="underline" href={"/contact"}>contact me</Link>.
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
                    fill="#070707"
                    className="dark:fill-[#ebebeb]"
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
