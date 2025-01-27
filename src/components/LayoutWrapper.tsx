// src/components/LayoutWrapper.tsx
import React, { ReactNode } from "react";

interface LayoutWrapperProps {
  children: ReactNode;
}

/**
 * LayoutWrapper is an optional site-wide wrapper
 * that can contain a header, footer, etc.
 * This is separate from the Next.js "root layout".
 */
export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full p-4 film-gradient">
        <h1 className="text-xl font-pinyon">Portfolio</h1>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="w-full p-4 text-center film-gradient">
        <small className="font-noto">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </small>
      </footer>
    </div>
  );
}
