import React from "react";
import { useLocation } from "react-router-dom";

const Loader = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className={`flex flex-row gap-2 w-full justify-center items-center py-10 ${isHomePage ? '' : 'mt-35'}`}>
      <div className="w-4 h-4 rounded-full bg-blue-500/50 animate-bounce [animation-delay:.7s]" />
      <div className="w-4 h-4 rounded-full bg-blue-500/50 animate-bounce [animation-delay:.3s]" />
      <div className="w-4 h-4 rounded-full bg-blue-500/50 animate-bounce [animation-delay:.7s]" />
    </div>
  );
};

export default Loader;
