import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 px-10 mt-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-white text-lg font-bold mb-5">
              CS — Ticket System
            </h2>
            <p className="text-sm leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">Contact Sales</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#">Products & Services</a>
              </li>
              <li>
                <a href="#">Customer Stories</a>
              </li>
              <li>
                <a href="#">Download Apps</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Information</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Join Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Social Links</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-[10px] font-bold">
                  <i class="fa-brands fa-x-twitter"></i>
                </span>
                <span className="truncate">@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-[10px] font-bold">
                  <i class="fa-brands fa-linkedin-in"></i>
                </span>
                <span className="truncate">@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-[10px] font-bold">
                  <i class="fa-brands fa-facebook-f"></i>
                </span>
                <span className="truncate">@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-[10px] font-bold">
                  <i class="fa-regular fa-envelope-open"></i>
                </span>
                <span className="truncate">support@cst.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
