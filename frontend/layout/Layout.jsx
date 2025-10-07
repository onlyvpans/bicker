import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";
// import shadcn

export function Layout() {
  const [title, setTitle] = useState("");

  return (
    <div className="app-layout">
      <h1>{title}</h1>

      <nav></nav>
      <main>
        <SignedOut to="/sign-in" replace />
        <SignedIn>
          <Outlet context={{ title, setTitle }} />
        </SignedIn>
      </main>
      <footer className="layout-footer">i am a foot</footer>
    </div>
  );
}
