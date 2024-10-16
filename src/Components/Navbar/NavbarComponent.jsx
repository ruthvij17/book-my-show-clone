import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It all Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Bangalore
            <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="h-full w-full" />
        </div>
      </div>
    </>
  );
}
function NavMd() {
  return (
    <>
      <div className="w-full h-full flex items-center gap-3 bg:white px-3 py-1 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
        />
      </div>
    </>
  );
}
function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              className="w-full h-full"
              src="https://images.yourstory.com/cs/images/companies/logosC2421575978193576png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff&format=auto&w=1920&q=75"
              alt="logo"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, place, sports and activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Bangalore NCR
            <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

const NavbarComponent = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* Small screen */}
      <div className="md:hidden">
        <NavSm />
      </div>

      {/* Medium screen */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>

      {/* Large screen */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default NavbarComponent;
