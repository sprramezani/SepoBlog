import { ChevronsDown, Search } from "lucide-react";
import BgHero from "../../assets/image/herosectionbg.jpg";

function HeroSection() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={BgHero}
        className="absolute inset-0 w-full h-full object-cover scale-105 blur-sm"
        alt="Hero Background"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-4xl font-[yekanExtraBold] text-white drop-shadow-lg">
          سپوبلاگ | وبلاگ مقالات عمومی و آموزشی
        </h2>

        <p className="text-white mt-8 text-sm max-w-xl leading-7">
          با سپوبلاگ مجموعه‌ای از مقالات عمومی، مطالب آموزشی و دانستنی‌های مفید
          روز را مطالعه کنید
        </p>

        {/* Search Box */}
        <div className="bg-white flex px-4 w-full max-w-md justify-between items-center rounded-xl my-10 shadow-lg">
          <input
            type="text"
            className="py-4 outline-none w-full text-sm"
            placeholder="دنبال چه مطلبی میگردی؟"
          />
          <Search className="text-blue-500" />
        </div>
      </div>

      {/* Animated Wave */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-10">
        <svg
          className="block w-full h-[160px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#F8FAFC">
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
              M0,140
              C240,260 480,60 720,120
              C960,180 1200,300 1440,200
              L1440,320
              L0,320
              Z;

              M0,180
              C240,80 480,260 720,180
              C960,100 1200,240 1440,140
              L1440,320
              L0,320
              Z;

              M0,140
              C240,260 480,60 720,120
              C960,180 1200,300 1440,200
              L1440,320
              L0,320
              Z
              "
            />
          </path>
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
