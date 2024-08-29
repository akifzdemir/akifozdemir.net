"use client";

import ReactLenis from "lenis/react";
import React from "react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      options={{
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}
