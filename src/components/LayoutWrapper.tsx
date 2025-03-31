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
      {/* Main content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
