import { useState } from 'react';
import Button from './Button';
import Logo from './Logo';
import Nav from './Nav';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <nav className="flex items-center py-10">
        <div className="w-3/12">
          <Logo />
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav scheme="light" flex="row" />
        </div>
        <div className="w-3/12 text-right hidden md:block">
          <Button href="#contact" variant="outline-yellow" pill>
            Contact
          </Button>
        </div>
        <div className="w-9/12 text-right md:hidden">
          <img
            src="/menu.svg"
            className="inline-block"
            onClick={() => setMobileMenu(true)}
          />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div
        className={`fixed bg-white z-10 transition-all ${
          mobileMenu ? 'right-0' : '-right-full'
        } top-0 h-full w-full p-10 md:hidden`}
      >
        <img
          src="/x.svg"
          className="absolute top-10 right-10 w-8"
          onClick={() => setMobileMenu(false)}
        />
        <Nav scheme="dark" flex="col" />
      </div>
    </>
  );
};

export default Navbar;
