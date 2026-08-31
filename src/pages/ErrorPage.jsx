import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-sans antialiased">
      <main className="grow flex items-center justify-center px-md py-xl relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-5 flex items-center justify-center">
          <span className="material-symbols-outlined text-[40vw] text-primary">
            data_object
          </span>
        </div>

        <div className="z-10 w-full max-w-4xl flex flex-col items-center text-center">
          {/* Terminal Graphic */}
          <div className="w-full mb-xl bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden shadow-lg">
            <div className="bg-surface-container border-b border-outline-variant px-md py-xs flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="ml-auto font-code text-label-sm leading-[16px] tracking-wider text-on-surface-variant">
                server.js
              </span>
            </div>
            <div className="p-lg text-left font-code text-code-block leading-5.5 text-on-surface-variant bg-[#0D1117] space-y-2">
              <p>
                <span className="text-secondary">$</span> node server.js
              </p>
              <p className="text-error">
                Error: Cannot find module &apos;./routes/current-page&apos;
              </p>
              <p className="text-on-surface-variant opacity-70">
                &nbsp;&nbsp;&nbsp;&nbsp;at Function.Module._resolveFilename
                (internal/modules/cjs/loader.js:880:15)
              </p>
              <p className="text-on-surface-variant opacity-70">
                &nbsp;&nbsp;&nbsp;&nbsp;at Function.Module._load
                (internal/modules/cjs/loader.js:725:27)
              </p>
              <p className="text-primary mt-4">
                &gt;{" "}
                <span className="text-on-surface">
                  Initiating fallback routing...
                </span>
                <span className="terminal-cursor"></span>
              </p>
            </div>
          </div>

          {/* Typography & Messaging */}
          <h1 className="font-headline-xl text-[80px] leading-22 text-primary mb-sm tracking-tighter font-bold">
            404
          </h1>
          <h2 className="font-headline-lg text-headline-lg leading-[40px] font-semibold text-on-surface mb-md">
            Module Not Found
          </h2>
          <p className="font-sans text-body-lg leading-7 text-on-surface-variant max-w-fit mx-auto mb-xl">
            The page you&apos;re looking for has moved, been renamed, or
            doesn&apos;t exist in our current directory. Check the URL or head
            back home.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-md">
            <Link
              to="/"
              className="px-lg py-sm bg-primary text-on-primary font-sans font-semibold rounded-lg hover:bg-primary-fixed-dim active:scale-95 transition-all duration-200 w-full sm:w-auto text-center flex items-center justify-center gap-2 glow-hover shadow-lg shadow-primary/10"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                home
              </span>
              Back to Dashboard
            </Link>
            <Link
              to="/sections"
              className="px-lg py-sm bg-surface-container-low border border-outline-variant text-on-surface font-sans rounded-lg hover:bg-surface-variant/50 hover:text-primary hover:border-primary/50 active:scale-95 transition-all duration-200 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "20px" }}
              >
                search
              </span>
              Search Sections
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
