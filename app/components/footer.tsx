import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="text-white body-font bg-[#111827]">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-left gap-y-8">
            {/* Section 1 */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                ABOUT US
              </h2>
              <p className="text-gray-400 text-sm">
                Exploring the frontiers of artificial intelligence and its impact on our world.
              </p>
            </div>

            {/* Section 2 */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                QUICK LINKS
              </h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/search" className="text-gray-400 hover:text-white">
                    Search
                  </Link>
                </li>
              </nav>
            </div>

            {/* Section 3 */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                CONTACT
              </h2>
              <p className="text-gray-400 text-sm">
                Email: <span className="text-white">ms5901562@gmail.com</span>
              </p>
              <p className="text-gray-400 text-sm">
                Phone: <span className="text-white">03420032995</span>
              </p>
            </div>

            {/* Section 4 */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex flex-wrap justify-start items-end gap-4">
                <div className="relative w-full sm:w-auto">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="footer-field"
                    name="footer-field"
                    placeholder="Enter your email"
                    className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-600 focus:bg-transparent focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4 text-left">
                Stay updated with the latest trends in AI and technology.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
