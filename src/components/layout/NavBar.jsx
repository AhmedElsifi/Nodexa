import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData";
import SearchModal from "./SearchModal";
import MobileDrawer from "./MobileDrawer";

const navLinks = [
  { label: "Home", path: "/", icon: "home" },
  { label: "Sections", path: "/sections", icon: "book" },
  { label: "Progress", path: "/progress", icon: "bar_chart" },
  { label: "Resources", path: "/resources", icon: "link" },
];

export default function NavBar() {
  const location = useLocation();
  const { userData } = useUserData();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const navRefs = useRef({});

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  useLayoutEffect(() => {
    const activePath = navLinks.find((l) =>
      l.path === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(l.path),
    )?.path;
    if (activePath && navRefs.current[activePath]) {
      const el = navRefs.current[activePath];
      setIndicator({
        left: el.offsetLeft,
        width: el.getBoundingClientRect().width,
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="bg-surface/80 backdrop-blur-2xl fixed top-0 w-full z-50 border-b border-outline-variant/20">
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-md h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-[20px]">
                terminal
              </span>
            </div>
            <span className="font-headline-md text-[20px] leading-7 font-bold text-on-surface hidden sm:block">
              Edu<span className="text-primary">Node</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center relative gap-1 bg-surface-container-high/50 rounded-full px-1 py-0.5 border border-outline-variant/20">
            <span
              className="absolute top-0.5 bottom-0.5 bg-primary rounded-full z-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{ left: indicator.left, width: indicator.width }}
            />
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                ref={(el) => {
                  navRefs.current[link.path] = el;
                }}
                className={`relative z-10 px-4 py-1.5 rounded-full font-sans text-code-block leading-5 font-medium transition-colors duration-300 ${isActive(link.path) ? "text-on-primary" : "text-on-surface-variant hover:text-on-surface"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 rounded-full transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
            </button>
            {userData.userName && (
              <span className="font-sans text-code-block leading-5 text-on-surface-variant hidden sm:block">
                Hi,{" "}
                <span className="text-on-surface font-medium">
                  {userData.userName}
                </span>
              </span>
            )}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 rounded-full transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-[22px]">
                menu
              </span>
            </button>
          </div>
        </div>
      </nav>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onSearch={() => setSearchOpen(true)}
        userName={userData.userName}
        isActive={isActive}
      />
      <SearchModal
        key={searchOpen ? "open" : "closed"}
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
