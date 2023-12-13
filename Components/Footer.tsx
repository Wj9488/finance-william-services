import Link from "next/link"

const Footer = () => {
  return (
    <footer className="">
        <p className="fixed bottom-2 left-4 w-1/2 lg:w-[fit-content] bg-[#fafafa] py-1 pr-2 lg:py-0 lg:pr-0">© 2023/2024</p>
        <p className="uppercase fixed bottom-2 right-4 w-1/2 lg:w-[fit-content] bg-[#fafafa] py-1 pl-2 lg:py-0 lg:pl-0">made by <Link target="blank" className="hover:opacity-50 transition-all duration-200" href={"https://www.linkedin.com/in/william-jones-450715251/"}>Will Jones</Link></p>
    </footer>
  )
}

export default Footer