import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-between p-3 items-center lg:flex-col">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
