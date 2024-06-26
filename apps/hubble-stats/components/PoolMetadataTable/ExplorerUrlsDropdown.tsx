import { FC, useMemo } from 'react';
import {
  Dropdown,
  DropdownBasicButton,
  DropdownBody,
  Typography,
} from '@webb-tools/webb-ui-components';
import { shortenHex } from '@webb-tools/webb-ui-components/utils';
import { ChainIcon, ExternalLinkLine, ChevronDown } from '@webb-tools/icons';
import { chainsConfig } from '@webb-tools/dapp-config/chains/chain-config';

import { CopyIconWithTooltip } from '../CopyIconWithTooltip';
import { AddressWithExplorerUrlsType } from './types';
import { getShortenChainName } from '../../utils';

const ExplorerUrlsDropdownItem: FC<{
  typedChainId: number;
  href: string | undefined;
}> = ({ href, typedChainId }) => {
  const chainIconAndName = useMemo(
    () => (
      <div className="flex items-center gap-2">
        <ChainIcon name={chainsConfig[typedChainId].name} size="lg" />
        <Typography
          variant="body1"
          ta="center"
          className="text-mono-140 dark:text-mono-0 group-hover:underline"
        >
          {getShortenChainName(typedChainId)}
        </Typography>
      </div>
    ),
    [typedChainId],
  );

  if (href === undefined) {
    return (
      <div className="group flex items-center justify-between px-4 py-2">
        {chainIconAndName}
      </div>
    );
  }

  return (
    <a
      className="group flex items-center justify-between px-4 py-2"
      href={href}
      // target="_blank" not working, change to use window.open
      onClick={(e) => {
        e.preventDefault();
        window.open(href, '_blank');
      }}
    >
      {chainIconAndName}
      <ExternalLinkLine className="fill-mono-140 dark:fill-mono-40" />
    </a>
  );
};

const ExplorerUrlsDropdown: FC<{
  data: AddressWithExplorerUrlsType;
}> = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Typography
        variant="body1"
        ta="center"
        className="text-mono-140 dark:text-mono-40 flex items-center gap-1"
      >
        {shortenHex(data.address)}
        <CopyIconWithTooltip textToCopy={data.address} />
      </Typography>

      {Object.keys(data.urls).length > 0 && (
        <Dropdown>
          <DropdownBasicButton className="group">
            <div className="flex items-center gap-1">
              <Typography
                variant="body1"
                ta="center"
                className="text-current text-mono-140 dark:text-mono-40"
              >
                View on Explorer
              </Typography>
              <ChevronDown className="fill-mono-140 dark:fill-mono-40 transition-transform duration-300 ease-in-out group-radix-state-open:rotate-180" />
            </div>
          </DropdownBasicButton>

          <DropdownBody
            className="overflow-hidden overflow-y-auto bg-mono-0 dark:bg-mono-180 max-h-[180px]"
            size="sm"
          >
            {Object.keys(data.urls).map((typedChainId) => (
              <ExplorerUrlsDropdownItem
                key={typedChainId}
                href={data.urls[+typedChainId]}
                typedChainId={+typedChainId}
              />
            ))}
          </DropdownBody>
        </Dropdown>
      )}
    </div>
  );
};

export default ExplorerUrlsDropdown;
