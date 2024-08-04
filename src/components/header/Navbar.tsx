import { DesktopNav } from "./desktop-nav";
import MobileNav from "./MobileNav";
const Navbar = () => {
  return (
    <nav>
      <MobileNav />
      <DesktopNav />
    </nav>
  );
};

export default Navbar;
