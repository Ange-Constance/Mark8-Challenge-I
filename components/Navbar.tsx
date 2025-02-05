import Logo from "./Logo";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

const Navbar: React.FC = () => {
  return (
    <header className=" bg-white text-[#0C0F0F] px-20 py-[10px] shadow-sm border-b-2 border-gray-100 ">
      <div className="  flex flex-row items-center justify-between  ">
        {/* Left: Logo */}
        <Logo />
        <Menu />
        {/* Center: Search Bar */}
        <SearchBar />

        {/* Right: User Menu */}
        <UserMenu />
      </div>
    </header>
  );
};

export default Navbar;
