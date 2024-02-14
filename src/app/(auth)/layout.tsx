import React from "react";

type Props = { children: React.ReactNode };

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex items-center justify-center h-full mt-20">
      {children}
    </div>
  );
}
