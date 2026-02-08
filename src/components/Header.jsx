import { Sun, TextAlignStart, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../assets/image/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        className={`mx-auto max-w-[1360px] flex items-center justify-between px-4 md:px-6 py-4 rounded-xl transition-all duration-300
        ${
          isHomePage
            ? scrolled
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
        <div className="w-32 text-left">
          <Sun className="text-white ms-auto hidden md:block" />
          <button
            className="m-0 p-0 ms-auto w-fit md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <TextAlignStart className="text-white" />
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300
      ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
    `}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 z-50 h-screen w-[70%] bg-[#F8FAFC] shadow-lg p-5 md:hidden
      transition-all duration-300 ease-out
      ${mobileMenuOpen ? "right-[30%] opacity-100" : "right-[90%] opacity-0"}
    `}
      >
        <button
          className="p-0 my-3 ms-auto block"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="text-black" />
        </button>

        <nav className="list-none gap-y-7 text-black flex flex-col items-start font-[YekanBold] p-5">
          <li>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/blogs" onClick={() => setMobileMenuOpen(false)}>مقالات</Link>
          </li>
          <li>
            <Link to="/authors" onClick={() => setMobileMenuOpen(false)}>نویسندگان</Link>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
