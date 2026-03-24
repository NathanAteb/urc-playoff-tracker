import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const linkCls =
  "text-sm font-medium text-neutral-600 transition hover:text-[#0ea5e9]";

const SiteNav = () => (
  <nav
    className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-neutral-200 pb-3"
    aria-label="Main"
  >
    <NavLink
      to="/"
      className={({ isActive }) =>
        cn(linkCls, isActive && "text-[#0ea5e9] underline decoration-2 underline-offset-4")
      }
      end
    >
      Playoff tracker
    </NavLink>
    <NavLink
      to="/fixtures"
      className={({ isActive }) =>
        cn(linkCls, isActive && "text-[#0ea5e9] underline decoration-2 underline-offset-4")
      }
    >
      Fixtures
    </NavLink>
  </nav>
);

export default SiteNav;
