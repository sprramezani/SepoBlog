import { Sun, TextAlignStart } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../assets/image/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-5 py-2">
      <div
        className={`mx-auto max-w-[1360px] flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300
        ${
          isHomePage
          ?
          scrolled
            ? "bg-[#1E293B] backdrop-blur-md shadow-lg m-5"
            : "bg-transparent"
          : "bg-[#1E293B] backdrop-blur-md shadow-lg m-5"
        }`}
      >
        <img src={Logo} className="w-32" alt="Logo" />

        <nav className="list-none gap-7 text-white md:flex hidden">
          <li>
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/blogs"> مقالات</Link>
          </li>
          <li>
            <Link to="/authors">نویسندگان</Link>
          </li>
        </nav>
        <div className="w-32">
          <Sun className="text-white ms-auto hidden md:block" />
          <TextAlignStart className="text-white ms-auto md:hidden" />
        </div>
      </div>
    </header>
  );
}

export default Header;
