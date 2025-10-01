"use client";
import React from "react";
import "./Topbar.css";
import Link from "next/link";
import HomeButton from "./HomeButton";
import { usePathname } from "next/navigation";

function TopBar({ title }) {
  const pathname = usePathname();
  const links = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/cards", label: "Cards" },
  ];

  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="topbar-title">{title}</span>
        <nav className="topbar-links">
          {links.map(
            (link) =>
              pathname !== link.href && (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              )
          )}
        </nav>
      </div>
      <div className="topbar-home">
        <HomeButton />
      </div>
    </div>
  );
}

export default TopBar;
