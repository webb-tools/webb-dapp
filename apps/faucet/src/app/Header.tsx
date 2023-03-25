'use client';

import links from '@webb-tools/dapp-config/links';
import cx from 'classnames';

import { NavItemType } from '@webb-tools/webb-ui-components/components/Navbar/types';
import Link from 'next/link';
import { ComponentProps, useEffect, useState } from 'react';

import { Button, Logo, Navbar } from '../components';

const navItems: Array<NavItemType | { [label: string]: Array<NavItemType> }> = [
  { label: 'community', url: 'https://webb.tools/community' },
  { label: 'docs', url: links.WEBB_DOCS_URL },
  { label: 'tangle network', url: links.TANGLE_NETWORK_URL },
];

const buttonProps: Array<ComponentProps<typeof Button>> = [
  {
    href: links.BRIDGE_URL,
    target: '_blank',
    rel: 'noreferrer',
    children: 'Huddle Bridge',
  },
];

const Header = () => {
  // State for tracking whether the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      // Clean up the event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cx(
        'fixed top-0 z-50 w-full bg-mono-0 min-h-[72px] max-w-[1160px]',
        'left-1/2 -translate-x-1/2 flex items-center justify-between',
        {
          'webb-shadow-sm': scrolled,
        }
      )}
    >
      <Link href="/">
        <Logo />
      </Link>

      <Navbar buttonProps={buttonProps} navItems={navItems} />
    </header>
  );
};

export default Header;
