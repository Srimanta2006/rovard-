import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const shopLinks = [
    { name: "All products", href: "/shop" },
    { name: "Hoodies", href: "/shop/hoodies" },
    { name: "T-Shirts", href: "/shop/tees" },
    { name: "Bottoms", href: "/shop/bottoms" },
    { name: "Sweatshirts", href: "/shop/sweatshirt" },
    { name: "Outerwear", href: "/shop/outwears" },
    { name: "Accessories", href: "/shop/accessories" },
    { name: "Caps", href: "/shop/caps" },
  ];

  const houseLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Bag", path: "/cart" },
    { name: "Wishlist", path: "/wishlist" },
  ];

  // Hide the current page's link.
  const isCurrentPage = (path) => {
    if (path === "/") {
      return currentPath === "/";
    }

    return currentPath === path || currentPath.startsWith(`${path}/`);
  };

  const filteredShopLinks = shopLinks.filter(
    (link) => !isCurrentPage(link.href)
  );

  const filteredHouseLinks = houseLinks.filter(
    (link) => !isCurrentPage(link.path)
  );

  return (
    <footer className="mx-1 overflow-hidden rounded-b-2xl border border-white/15 bg-[#080706] text-[#F5F3EF]">

      {/* Main footer */}
      <div className="grid grid-cols-1 gap-12 px-6 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-[2fr_1fr_1fr] lg:gap-16 lg:px-10 lg:py-12">

        {/* Brand */}
        <div className="flex flex-col items-start gap-3">
          <Link
            to="/"
            aria-label="ROVARD home"
            className="hero-heading text-[clamp(5rem,12vw,15rem)] leading-[0.85] tracking-tight uppercase"
          >
            ROVARD
          </Link>

          <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-hover)]">
            Built for after dark — est. 2021
          </p>
        </div>

        {/* Shop links */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--color-orange)]">
            Shop
          </h2>

          <nav
            aria-label="Shop navigation"
            className="flex flex-col items-start gap-3"
          >
            {filteredShopLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm transition-colors duration-200 hover:text-[var(--color-orange)]"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* House links */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--color-orange)]">
            House
          </h2>

          <nav
            aria-label="Main navigation"
            className="flex flex-col items-start gap-3"
          >
            {filteredHouseLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm transition-colors duration-200 hover:text-[var(--color-orange)]"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col gap-3 border-t border-white/15 px-6 py-5 text-[9px] uppercase tracking-[0.25em] text-[var(--color-hover)] sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© 2026 ROVARD STUDIO</p>

        <p>Demo storefront — no real payments</p>
      </div>
    </footer>
  );
};

export default Footer;