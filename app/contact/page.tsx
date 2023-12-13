"use client";

import Header from "@/Components/Reusable/Header";
import Link from "next/link";
import Transition from "@/Components/utils/Transition";
import GenericPageWrapper from "@/Components/Reusable/GenericPageWrapper";

const ContactPage = () => {
  return (
    <>
      <Transition>
        <main>
          <Header pageHeading="CONTACT ME" pageSubheading="BEA3008" />
          <GenericPageWrapper>
            <div>
              <div className="flex gap-1 items-center hover:opacity-50 transition-all duration-200">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.60085 13.2628L0.974432 6.63636L7.60085 0.00994253L8.87926 1.27415L4.44034 5.71307H15.5909V7.55966H4.44034L8.87926 11.9915L7.60085 13.2628Z"
                    fill="black"
                  />
                </svg>
                <Link href={"/"}>BACK</Link>
              </div>
            </div>
            <div className="">
              <p>
                <Link
                  className="hover:opacity-50 transition-all duration-200"
                  href={"/about"}
                >
                  About
                </Link>
              </p>
            </div>
          </GenericPageWrapper>
        </main>
      </Transition>
    </>
  );
};

export default ContactPage;
