import React from 'react';

import { isLoggedInReactive } from '../../store/reactive-vars';
import { useOnClickOutside } from '@app/common/hooks/use-on-click-outside.hook';
import { ReactComponent as UserSolidIcon } from '@app/assets/icons/user-solid.svg';
import { UserDropdownLink } from '../user-dropdown-link/user-dropdown-link.component';

export const UserDropdown: React.FC = () => {
  const userDropdownRef = React.useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdownState = () => setIsDropdownOpen((isOpened) => !isOpened);

  const logout = () => {
    toggleDropdownState();
    localStorage.removeItem('jwt');
    isLoggedInReactive(false);
  };

  useOnClickOutside(userDropdownRef, () => {
    if (!isDropdownOpen) {
      return;
    }

    toggleDropdownState();
  });

  return (
    <div className="relative h-6" ref={userDropdownRef}>
      <button onClick={toggleDropdownState}>
        <UserSolidIcon className="w-6 h-6 [&>*]:fill-gray-900" />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 top-7.5 bg-white border border-gray-200 shadow-lg rounded-md py-1.5 w-49">
          <UserDropdownLink to="/profile" onClick={toggleDropdownState}>
            Your profile
          </UserDropdownLink>
          <UserDropdownLink onClick={logout}>Logout</UserDropdownLink>
        </div>
      )}
    </div>
  );
};
