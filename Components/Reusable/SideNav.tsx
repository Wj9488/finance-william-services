
"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SideNav = () => {
  const searchParams = useSearchParams();
  const requiresCalcLink = searchParams.get("cl");
  const requiresShareHelp = searchParams.get("osh")

  return (
    <div>
      <ul className="hidden lg:flex gap-2 lg:my-0 my-[5rem] ">
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
              fill="#070707"
              className="dark:fill-[#ebebeb]"
            />
          </svg>
        </Link>
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
      </ul>
      {requiresCalcLink && (
        <Link
          className="mt-[2.5rem] hover:opacity-50 transition-all duration-200 flex items-center gap-1"
          href={"#calculator"}
        >
          Calculator
        </Link>
      )}
      {requiresShareHelp && (
        <Link
          className="mt-[2.5rem] lg:mb-0 mb-[5rem] hover:opacity-50 transition-all duration-200 flex items-center gap-1"
          href={"/share-types"}
        >
          Share Types
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
      )}
    </div>
  );
};

export default SideNav;
