import { NAV_LINKS } from "@/lib/constants";
import Navlink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="bg-background text-foreground p-md flex items-center justify-between">
      <p>ROOFING</p>
      <ul className="gap-x-lg flex">
        {NAV_LINKS.map((link) => (
          <Navlink key={link.label} label={link.label} href={link.href} />
        ))}
      </ul>
    </nav>
  );
}
