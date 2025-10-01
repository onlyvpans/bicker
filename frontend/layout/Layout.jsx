import "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Outlet, Link, Navigate } from "react-router-dom";
// import shadcn

export function Layout() {
  return (
    <div className="app-layout">
      <nav></nav>
      <main>
        <SignedOut to="/sign-in" replace />
        <SignedIn>
          <Outlet />
        </SignedIn>
      </main>
      <footer className="layout-footer"></footer>
    </div>
  );
}
