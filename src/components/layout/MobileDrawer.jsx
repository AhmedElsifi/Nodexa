import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/", icon: "home" },
  { label: "Sections", path: "/sections", icon: "book" },
  { label: "Progress", path: "/progress", icon: "bar_chart" },
  { label: "Resources", path: "/resources", icon: "link" },
];

export default function MobileDrawer({ open, onClose, onSearch, userName, isActive }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-72 bg-surface border-l border-outline-variant shadow-2xl flex flex-col animate-slide-in">
        <div className="flex items-center justify-between px-md h-16 border-b border-outline-variant/30">
          <span className="font-headline-md text-[18px] leading-[24px] font-bold text-on-surface">Menu</span>
          <button onClick={onClose} className="w-9 h-9 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 rounded-full transition-colors">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        {userName && (
          <div className="px-md py-sm border-b border-outline-variant/30">
            <p className="font-sans text-[14px] leading-[20px] text-on-surface-variant">
              Hi, <span className="text-on-surface font-medium">{userName}</span>
            </p>
          </div>
        )}
        <div className="flex-1 overflow-y-auto py-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={`flex items-center gap-sm mx-sm px-sm py-sm rounded-lg transition-colors ${
                isActive(link.path) ? "bg-primary/10 text-primary" : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
              <span className="font-sans text-[16px] leading-[24px] font-medium">{link.label}</span>
              {isActive(link.path) && <span className="ml-auto w-2 h-2 rounded-full bg-primary" />}
            </Link>
          ))}
        </div>
        <div className="px-md py-sm border-t border-outline-variant/30">
          <button
            onClick={() => { onClose(); onSearch(); }}
            className="w-full flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
            <span className="font-sans text-[14px] leading-[20px]">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
