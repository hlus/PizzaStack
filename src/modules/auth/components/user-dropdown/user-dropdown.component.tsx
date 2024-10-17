import React from 'react';

import { ReactComponent as UserSolidIcon } from '@app/assets/icons/user-solid.svg';
import { UserDropdownLink } from '../user-dropdown-link/user-dropdown-link.component';
import { useOnClickOutside } from '@app/common/hooks/use-on-click-outside.hook';

export const UserDropdown: React.FC = () => {
  const userDropdownRef = React.useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdownState = () => setIsDropdownOpen((isOpened) => !isOpened);

  const logout = () => {
    toggleDropdownState();
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
            Ваш профіль
          </UserDropdownLink>
          <UserDropdownLink onClick={logout}>Вийти</UserDropdownLink>
        </div>
      )}
    </div>
  );
};
