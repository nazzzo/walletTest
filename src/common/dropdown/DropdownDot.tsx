import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export const DropdownDot = ({ style, children }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuWrapRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuWrapRef.current && !menuWrapRef.current.contains(e.target as HTMLElement)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const DotWrap = styled.button`
    position: relative;
  `;

  return (
    <>
      <DotWrap
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-transparent rounded-lg hover:bg-gray-400 dark:text-white focus:ring-gray-500"
        type="button"
        style={style}
        onClick={toggleMenu}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
        <DropdownMenu ref={menuWrapRef} isOpen={menuOpen}>{children}</DropdownMenu>
      </DotWrap>
    </>
  );
};


const DropdownMenu = ({ isOpen, children, ref }: any) => {
    const MenuWrap = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    visibility: ${isOpen ? 'visible' : 'hidden'};
    opacity: ${isOpen ? 1 : 0};
    transition: visibility 0s linear, opacity 0.2s linear;
  `;

    return (
        <MenuWrap
            ref={ref}
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Accounts</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
                </li>
                {children}
            </ul>
            <div className="py-2">
                <a href="https://github.com/nazzzo/nazzzo.github.io" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Github</a>
            </div>
        </MenuWrap>
    );
};
