'use client';

import { Search, ThreeDotsVerticalIcon } from '@webb-tools/icons';
import {
  Dropdown,
  DropdownBasicButton,
  DropdownBody,
  Typography,
} from '@webb-tools/webb-ui-components';
import { PropsOf } from '@webb-tools/webb-ui-components/types';
import { FC, useCallback } from 'react';
import { twMerge } from 'tailwind-merge';
import { useAuth } from '../hooks/useAuth';
import { useSidebarContext } from '../hooks/useSidebarContext';
import useTailwindBreakpoint, {
  TailwindBreakpoint,
} from '../hooks/useTailwindBreakpoint';
import {
  RelativePageUrl,
  handleOAuthError,
  handleOAuthSuccess,
} from '../utils/utils';
import { GitHubOAuthButton } from './GitHubOAuthButton';
import { SearchInput } from './SearchInput';
import { SidebarCloseButton } from './SidebarCloseButton';

export type HeaderControlsProps = PropsOf<'div'> & {
  doHideSearchBar?: boolean;
};

export const HeaderControls: FC<HeaderControlsProps> = ({
  className,
  doHideSearchBar,
  ...rest
}) => {
  // TODO: Should throw error when client id is empty.
  const githubOAuthClientId = process.env.ZK_EXPLORER_GITHUB_CLIENT_ID ?? '';

  const breakpoint = useTailwindBreakpoint();
  const { user } = useAuth();
  const { setSidebarOpen, updateSidebarContent } = useSidebarContext();

  const prepareAndShowSearchSidebar = useCallback(() => {
    updateSidebarContent(
      <div className="flex flex-col gap-4">
        <SidebarCloseButton isRightAligned setSidebarOpen={setSidebarOpen} />

        <SearchInput doesRedirectOnChange id="sidebar mobile search" />
      </div>
    );

    setSidebarOpen(true);
  }, [setSidebarOpen, updateSidebarContent]);

  // When the user is logged in and clicks on the GitHub OAuth
  // button, redirect them to the dashboard.
  const handleUserProfileClick = useCallback(() => {
    window.location.href = RelativePageUrl.Dashboard;
  }, []);

  return (
    <div
      {...rest}
      className={twMerge(
        'flex flex-col items-end sm:flex-row justify-between sm:items-start md:items-center gap-4 md:gap-2',
        className
      )}
    >
      {!doHideSearchBar && breakpoint > TailwindBreakpoint.SM && (
        <SearchInput doesRedirectOnChange id="desktop search" />
      )}

      <div className="flex gap-2 items-center">
        <GitHubOAuthButton
          clientId={githubOAuthClientId}
          scope="user"
          onOAuthError={handleOAuthError}
          onOAuthSuccess={handleOAuthSuccess}
          username={user?.githubUsername}
          onSignedInClick={handleUserProfileClick}
        />

        {/* Mobile search button */}
        {!doHideSearchBar && breakpoint <= TailwindBreakpoint.SM && (
          <Search
            className="cursor-pointer"
            size="lg"
            onClick={prepareAndShowSearchSidebar}
          />
        )}

        <Dropdown className="relative flex items-center justify-center">
          <DropdownBasicButton>
            <ThreeDotsVerticalIcon className="fill-mono-0" size="lg" />
          </DropdownBasicButton>

          <DropdownBody className="mt-6 w-[280px] dark:bg-mono-180">
            <div className="px-4 py-2 hover:bg-mono-0 dark:hover:bg-mono-180">
              <Typography variant="label" fw="bold">
                User menu
              </Typography>
            </div>
          </DropdownBody>
        </Dropdown>
      </div>
    </div>
  );
};
