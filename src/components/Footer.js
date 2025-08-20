import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 dark:bg-gray-300 text-center text-lg-start text-muted pt-5 pb-10 px-10 sm:px-4 xs:px-2 relative mt-16">
      {/* Main Content Section */}
      <section className="">
        <div className="container mx-auto px-4 text-center mt-5">
          <div className="grid grid-cols-3 sm:grid-cols-1 gap-8 sm:gap-6 mt-3 max-w-4xl mx-auto">

            {/* Programs Column */}
            <div className="mx-auto mb-4 sm:mb-6">
              <h6 className="text-uppercase font-bold mb-4 text-left sm:text-sm">Our Programs</h6>
              <p className="mb-2 text-left text-sm sm:text-xs">
                <Link href="/programs/journey-to-belonging-home" className="text-dark/75 hover:text-dark dark:hover:text-light transition-colors">
                  Journey to Belonging Home
                </Link>
              </p>
              <p className="mb-2 text-left text-sm sm:text-xs">
                <Link href="/programs/early-care-haven" className="text-dark/75 hover:text-dark dark:hover:text-light transition-colors">
                  Early Care Haven
                </Link>
              </p>
              <p className="mb-2 text-left text-sm sm:text-xs">
                <Link href="/programs/nurturing-mothers" className="text-dark/75 hover:text-dark dark:hover:text-light transition-colors">
                  Nurturing Mothers Program
                </Link>
              </p>
              <p className="mb-2 text-left text-sm sm:text-xs">
                <Link href="/programs/foster-kinship-care" className="text-dark/75 hover:text-dark dark:hover:text-light transition-colors">
                  Foster/Kinship Care
                </Link>
              </p>
            </div>

            {/* Useful Links Column */}
            <div className="mx-auto mb-4 sm:mb-6">
              <h6 className="text-uppercase font-bold mb-4 text-left sm:text-sm">Useful Links</h6>
              <p className="mb-2 text-left text-sm sm:text-xs">
                <Link href="/" className="text-dark/75 hover:text-dark dark:hover:text-light transition-colors">
                  Home
                </Link>
              </p>
              <p className="mb-2 text-left text-sm sm:text-xs">
                <Link href="/about" className="text-dark/75 hover:text-dark dark:hover:text-light transition-colors">
                  About Us
                </Link>
              </p>
              <p className="mb-2 text-left text-sm sm:text-xs">
                <Link href="/programs" className="text-dark/75 hover:text-dark dark:hover:text-light transition-colors">
                  Our Programs
                </Link>
              </p>
              <p className="mb-2 text-left text-sm sm:text-xs">
                <Link href="/contact" className="text-dark/75 hover:text-dark dark:hover:text-light transition-colors">
                  Contact Us
                </Link>
              </p>
            </div>

            {/* Contact Column */}
            <div className="mx-auto mb-4 sm:mb-6">
              <h6 className="text-uppercase font-bold mb-4 text-left sm:text-sm">Contact</h6>
              <p className="mb-2 flex items-start text-sm sm:text-xs">
                <svg className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>23 Taralea Bay NE<br />
                Calgary, AB T3J 5H1</span>
              </p>
              <p className="mb-2 flex items-start text-sm sm:text-xs">
                <svg className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="break-all">info@plumingeaglelodge.com</span>
              </p>
              <p className="mb-2 flex items-center text-sm sm:text-xs">
                <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                (403) 807-6088
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <div className="text-center p-4 bg-gray-300 dark:bg-gray-300 w-full sm:p-2">
        <span className="text-sm sm:text-xs">© {new Date().getFullYear()} Copyright:
        <Link href="/" className="text-dark font-bold ml-1">
          Pluming Eagle Lodge
        </Link></span>
      </div>
    </footer>
  );
};

export default Footer;
