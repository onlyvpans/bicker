import "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Outlet, Link, Navigate, useOutletContext } from "react-router-dom";
// import shadcn

export function Layout() {
  const { title } = useOutletContext() || {};

  console.log("title", title);

  return (
    <div className="app-layout">
      <nav></nav>
      <main>
        <h1>{title}</h1>
        <SignedOut to="/sign-in" replace />
        <SignedIn>
          <Outlet />
        </SignedIn>
      </main>
      <footer className="layout-footer">i am a foot</footer>
    </div>
  );
}
