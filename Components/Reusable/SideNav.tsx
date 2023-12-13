import Link from "next/link"

const SideNav = () => {
  return (
    <ul className="hidden lg:flex gap-2 lg:my-0 my-[5rem]">
    <li><Link className="hover:opacity-50 transition-all duration-200" href={"/about"}>About</Link>{" "},{" "}<Link className="hover:opacity-50 transition-all duration-200" href={"/contact"}>Contact</Link></li>
    </ul>
  )
}

export default SideNav