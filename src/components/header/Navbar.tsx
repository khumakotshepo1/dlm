import { ModeToggle } from "../toggle-mode";
import { DesktopNav } from "./desktop-nav";
import MobileNav from "./MobileNav";
const Navbar = () => {
  return (
    <nav className="flex items-center gap-4 lg:gap-8">
      <MobileNav />
      <DesktopNav />
      <ModeToggle />

    </nav>
  );
};

export default Navbar;
