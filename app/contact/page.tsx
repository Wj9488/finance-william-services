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
              <Link
                className="hover:opacity-50 transition-all duration-200 flex items-center gap-1"
                href={"/about"}
              >
                About
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

export default ContactPage;
