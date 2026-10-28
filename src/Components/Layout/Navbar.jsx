import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinkStyle = ({ isActive }) =>
    `relative py-2 text-md font-medium uppercase tracking-wider
    transition-colors duration-300
    after:absolute after:bottom-0 after:left-0 after:h-[2px]
    after:bg-[var(--color-orange)]
    after:transition-all after:duration-300
    ${
      isActive
        ? "text-[var(--color-orange)] after:w-full"
        : "text-[var(--color-text)] after:w-0 hover:text-[var(--color-orange)] hover:after:w-full"
    }`;

  const iconStyle =
    "relative text-[var(--color-text)] transition-all duration-300 hover:-translate-y-1 hover:text-[var(--color-orange)]";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-white/10 bg-[var(--color-bg)] px-5 py-5 md:px-10">

      {/* Left: Navigation */}
      <div className="flex items-center gap-4 md:gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={navLinkStyle}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Center: Brand */}
      <Link
        to="/"
        aria-label="Rovard home"
        className="absolute left-1/2 -translate-x-1/2"
      >
        <h1 className="text-4xl text-[(--color-text)] transition-colors duration-300 hover:text-[var(--color-orange)] md:text-5xl">
          rovard
        </h1>
      </Link>

      {/* Right: Wishlist and Cart */}
      <div className="ml-3 flex items-center gap-4 md:gap-7">
        <Link
          to="/wishlist"
          aria-label="Wishlist"
          className={iconStyle}
        >
          <FaRegHeart size={23} />
        </Link>

        <Link
          to="/cart"
          aria-label="Shopping cart"
          className={iconStyle}
        >
          <IoCartOutline size={27} />
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;