import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface UserDropdownLinkProps extends Omit<LinkProps, 'to'> {
  to?: LinkProps['to'];
}

export const UserDropdownLink: React.FC<UserDropdownLinkProps> = ({ children, to = '', ...rest }) => (
  <Link to={to} className="h-9 px-4 flex items-center text-sm hover:bg-gray-100" {...rest}>
    {children}
  </Link>
);
