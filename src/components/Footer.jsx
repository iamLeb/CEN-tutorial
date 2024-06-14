import React from "react";
import logo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-neutral-900 text-white p-6 border-2">
      <div className="container mx-auto text-center">
        {/* Logo and Links Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-40">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img src={logo} alt="Logo" className="max-w-xs mx-auto" />
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-8">
            {/* Links List 1 - Company */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://cencadian.ca/#"
                    className="hover:underline transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://cencadian.ca/home/page/2263"
                    className="hover:underline transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://cencadian.ca/home/album"
                    className="hover:underline transition-colors duration-300"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Links List 2 - Support */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://cencadian.ca/home/page/2247"
                    className="hover:underline transition-colors duration-300"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="https://cencadian.ca/home/contact"
                    className="hover:underline transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://cencadian.ca/home/page/2265"
                    className="hover:underline transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Links List 3 - Connect */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="hover:underline transition-colors duration-300"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/home"
                    className="hover:underline transition-colors duration-300"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="hover:underline transition-colors duration-300"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-md">
          &copy; {new Date().getFullYear()} Cencadian Education Incorporated.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
