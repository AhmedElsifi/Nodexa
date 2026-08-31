export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-xl mt-auto border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center px-lg max-w-[1280px] mx-auto gap-md">
        <div className="font-headline-md text-[24px] leading-[32px] font-bold text-primary flex items-center gap-xs">
          <span className="material-symbols-outlined">terminal</span>
          Node.js Developers
        </div>
        <div className="flex flex-wrap items-center justify-center gap-md">
          <a
            className="font-code text-[12px] leading-[16px] tracking-wider text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Documentation
          </a>
          <a
            className="font-code text-[12px] leading-[16px] tracking-wider text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-code text-[12px] leading-[16px] tracking-wider text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Community Discord
          </a>
          <a
            className="font-code text-[12px] leading-[16px] tracking-wider text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
        <div className="font-code text-[12px] leading-[16px] tracking-wider text-on-surface-variant opacity-80">
          &copy; 2024 Node.js Developers Community
        </div>
      </div>
    </footer>
  );
}
