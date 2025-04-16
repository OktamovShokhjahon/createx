import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaInstagram,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import phone from "../assets/phone.svg";
import inbox from "../assets/inbox.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#1E212C] text-white py-12 font-lato">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-5 gap-6">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              CREATE<span className="text-red-500">X</span>
            </h2>
            <p className="text-sm text-gray-300 mb-6">
              CreateX Online School is a leader in online teaching. We have lots
              of courses and programs from the main market experts. We provide
              certificates, diplomas to online learning, internships and
              employment in the largest companies in the country.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTelegram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">SITE MAP</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">COURSES</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  HR & Recruiting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Development
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <div className="space-y-2 text-sm text-gray-300 mb-6">
              <p className="flex items-center">
                <span className="mr-2">
                  <img src={phone} alt="" />
                </span>
                (405) 555-0128
              </p>
              <p className="flex items-center">
                <span className="mr-2">
                  <img src={inbox} alt="" />
                </span>
                hello@createx.com
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">
              SIGN UP TO OUR NEWSLETTER
            </h3>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="bg-[#2B2F3C] text-white px-4 py-2 flex-grow focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#2B2F3C] text-white px-3 py-2"
                >
                  <FiArrowRight />
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-400">
              *Subscribe to our newsletter to receive communications and early
              updates from CreateX SEO Agency.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 flex items-center">
            © All rights reserved. Made with
            <span className="text-red-500 mx-1">
              <FaHeart />
            </span>
            by CreateX Studio
          </p>
          <button
            onClick={scrollToTop}
            className="text-sm text-gray-400 hover:text-white mt-4 md:mt-0 transition-colors"
          >
            GO TO TOP
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
