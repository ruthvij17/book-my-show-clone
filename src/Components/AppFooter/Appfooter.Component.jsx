import React from "react";
import { GiBarracksTent } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrTicket } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import {
  FaFacebook,
  FaInstagramSquare,
  FaPinterest,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const AppFooter = () => {
  return (
    <footer className="bg-darkBackground-800 text-gray-500">
      {/* Top Section */}
      <div className="hidden lg:flex items-center gap-3 px-6 py-10">
        <GiBarracksTent fontSize={50} className="text-white" />
        <div className="flex-1">
          <h3 className="font-bold text-lg text-white">List your Show</h3>
          <p className="text-sm">
            Got a show, Event, Activity, or a Great Experience? Partner with us
            & get listed on BookMyShow.
          </p>
        </div>
        <button className="bg-red-700 text-white px-4 py-2 rounded-sm">
          Contact Today!
        </button>
      </div>

      {/* Middle Section */}
      <div className="bg-darkBackground-700 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 text-center">
          <div className="hover:text-white cursor-pointer flex flex-col items-center gap-2">
            <RiCustomerService2Line fontSize={50} />
            <h3 className="text-sm">24/7 CUSTOMER CARE</h3>
          </div>
          <div className="hover:text-white cursor-pointer flex flex-col items-center gap-2">
            <GrTicket fontSize={50} />
            <h3 className="text-sm">RESEND BOOKING CONFIRMATION</h3>
          </div>
          <div className="hover:text-white cursor-pointer flex flex-col items-center gap-2">
            <TfiEmail fontSize={50} />
            <h3 className="text-sm">NEWSLETTER</h3>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="px-6 py-8">
        <div className="text-sm">
          <h2 className="text-gray-300 font-semibold">COUNTRIES</h2>
          <p>
            <span className="hover:text-white">Indonesia</span> |{" "}
            <span className="hover:text-white">Singapore</span> |{" "}
            <span className="hover:text-white">UAE</span> |{" "}
            <span className="hover:text-white">Sri Lanka</span> |{" "}
            <span className="hover:text-white">West Indies</span>
          </p>
        </div>
        <div className="mt-4 text-sm">
          <h2 className="text-gray-300 font-semibold">Help</h2>
          <p>
            <span className="hover:text-white">About Us</span> |{" "}
            <span className="hover:text-white">Contact Us</span> |{" "}
            <span className="hover:text-white">Careers</span> |{" "}
            <span className="hover:text-white">Press</span> |{" "}
            <span className="hover:text-white">FAQs</span> |{" "}
            <span className="hover:text-white">Terms</span> |{" "}
            <span className="hover:text-white">Privacy Policy</span>
          </p>
        </div>
        <div className="mt-4 text-sm">
          <h2 className="text-gray-300 font-semibold">BOOKMYSHOW EXCLUSIVES</h2>
          <p>
            <span className="hover:text-white">Lollapalooza India</span> |{" "}
            <span className="hover:text-white">Super Star</span> |{" "}
            <span className="hover:text-white">Book A Change</span> |{" "}
            <span className="hover:text-white">Gift Cards</span> |{" "}
            <span className="hover:text-white">Offers</span>
          </p>
        </div>
      </div>

      {/* Divider and Logo */}
      <div className="flex justify-center items-center py-6">
        <div className="w-11/12 h-px bg-gray-500" />
        <img
          src="https://in.bmscdn.com/webin/common/icons/logo.svg"
          alt="BookMyShow Logo"
          className="absolute bg-darkBackground-800 px-5"
        />
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 text-2xl mb-6">
        <FaFacebook className="hover:text-white cursor-pointer" />
        <FaSquareXTwitter className="hover:text-white cursor-pointer" />
        <FaInstagramSquare className="hover:text-white cursor-pointer" />
        <FaYoutubeSquare className="hover:text-white cursor-pointer" />
        <FaPinterest className="hover:text-white cursor-pointer" />
        <FaLinkedin className="hover:text-white cursor-pointer" />
      </div>

      {/* Footer Text */}
      <div className="text-center text-xs text-gray-500 px-6">
        <p>
          Copyright 2024 @ Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        </p>
        <p>
          Content and images used on this site are copyright protected and are
          intended for promotional use only. Unauthorized use is punishable by
          law.
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
