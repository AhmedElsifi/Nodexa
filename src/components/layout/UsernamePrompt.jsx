import { useState } from "react";
import { useUserData } from "../../hooks/useUserData";

export default function UsernamePrompt() {
  const { userData, setUserName } = useUserData();
  const [name, setName] = useState("");
  const [exiting, setExiting] = useState(false);

  if (userData.userName) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed) {
      setExiting(true);
      setTimeout(() => {
        setUserName(trimmed);
      }, 600);
    }
  };

  return (
    <div
      className={`min-h-screen bg-background flex flex-col items-center justify-center p-md ${exiting ? "username-exit" : ""}`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 flex items-center justify-center">
        <span className="material-symbols-outlined text-[40vw] text-primary">
          data_object
        </span>
      </div>

      <div className="z-10 w-full max-w-fit flex flex-col items-center">
        {/* Logo */}
        <div className="mb-lg flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[28px]">
              terminal
            </span>
          </div>
          <span className="font-headline-lg text-[32px] leading-[40px] font-bold text-on-surface">
            Node<span className="text-primary">X</span>a
          </span>
        </div>

        {/* Card */}
        <div className="w-full bg-surface border border-outline-variant rounded-2xl p-xl shadow-2xl">
          <div className="mb-lg text-center">
            <h1 className="font-headline-md text-[24px] leading-[32px] font-bold text-on-surface mb-xs">
              Welcome to NodeXa
            </h1>
            <p className="font-sans text-[16px] leading-[24px] text-on-surface-variant">
              Enter your name to get started
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-md">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoFocus
              className="w-full px-md py-sm bg-surface-container-high border border-outline-variant rounded-lg font-sans text-[16px] leading-[24px] text-on-surface placeholder:text-on-surface-variant/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
            />
            <button
              type="submit"
              disabled={!name.trim()}
              className={`w-full py-sm rounded-lg font-code text-[14px] leading-[20px] tracking-wider font-semibold transition-all active:scale-95 ${
                name.trim()
                  ? "bg-primary text-on-primary-container hover:bg-primary-fixed shadow-[0_0_15px_rgba(119,221,109,0.3)]"
                  : "bg-surface-container-high text-on-surface-variant cursor-not-allowed"
              }`}
            >
              Get Started
            </button>
          </form>
        </div>

        <p className="font-code text-[12px] leading-[16px] tracking-wider text-on-surface-variant/50 mt-md">
          ITI Summer Code Camp &mdash; Node.js Track
        </p>
      </div>
    </div>
  );
}
