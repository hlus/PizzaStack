import React, { PropsWithChildren } from "react";

interface Props {
  href: string;
}

export const FooterLink: React.FC<PropsWithChildren<Props>> = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="font-bold text-sm text-gray-400 hover:text-gray-300 hover:underline"
    >
      {children}
    </a>
  </li>
);
