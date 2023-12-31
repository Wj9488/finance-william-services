import Link from "next/link"

const BackButton = () => {
  return (
    <div>
        <Link href={"/"}>
        <div className="flex gap-1 items-center hover:opacity-50 transition-all duration-200 min-w-[10rem]">
        <svg
            width="14"
            height="12"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M7.60085 13.2628L0.974432 6.63636L7.60085 0.00994253L8.87926 1.27415L4.44034 5.71307H15.5909V7.55966H4.44034L8.87926 11.9915L7.60085 13.2628Z"
            fill="#070707"
            className="dark:fill-[#dad7cd]"
            />
        </svg>
        All Content
        </div>
        </Link>
    </div>
  )
}

export default BackButton