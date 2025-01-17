import type { ReactNode } from "react";

interface TextoProps {
  children: ReactNode;
}

export default function Texto({ children }: TextoProps) {
  return <p>{children}</p>;
}
