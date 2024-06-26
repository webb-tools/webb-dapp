'use client';

import { FileCopyLine } from '@webb-tools/icons/FileCopyLine';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useCopyable } from '../../hooks';
import { Typography } from '../../typography/Typography';
import { Tooltip, TooltipBody, TooltipTrigger } from '../Tooltip';
import { Button } from '../buttons';
import { CopyWithTooltipProps, CopyWithTooltipUIProps } from './types';

/**
 * The `CopyWithTooltip` component
 *
 * @example
 *
 * ```jsx
 *  <CopyWithTooltip textToCopy="0x026d513cf4e5f0e605a6584322382bd5896d4f0dfdd1e9a7" />
 * ```
 */
export const CopyWithTooltip: React.FC<CopyWithTooltipProps> = ({
  className,
  textToCopy,
  isButton = true,
  iconSize = 'md',
  iconClassName,
  copyLabel,
}) => {
  const { copy, isCopied } = useCopyable();

  return (
    <CopyWithTooltipUI
      className={className}
      onClick={() => {
        copy(textToCopy);
      }}
      isCopied={isCopied}
      isButton={isButton}
      iconSize={iconSize}
      iconClassName={iconClassName}
      copyLabel={copyLabel}
    />
  );
};

/**********************
 * Internal component *
 **********************/

/**
 * The internal UI component to prevent re-render when the isCopied state changes
 */
const CopyWithTooltipUI: React.FC<CopyWithTooltipUIProps> = ({
  isCopied,
  onClick,
  className,
  iconClassName,
  isButton,
  iconSize,
  copyLabel = 'Copy',
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <Tooltip isOpen={isTooltipOpen}>
      <TooltipTrigger
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
        className={twMerge(isCopied ? 'cursor-not-allowed' : '', className)}
        onClick={onClick}
        asChild
      >
        {isButton ? (
          <Button className="p-2" variant="utility" size="sm">
            <FileCopyLine
              size={iconSize}
              className={twMerge('!fill-current', iconClassName)}
            />
          </Button>
        ) : (
          <span>
            <FileCopyLine
              size={iconSize}
              className={twMerge('!fill-current', iconClassName)}
            />
          </span>
        )}
      </TooltipTrigger>
      <TooltipBody>
        <Typography className="capitalize" variant="body3">
          {isCopied ? 'Copied!' : copyLabel}
        </Typography>
      </TooltipBody>
    </Tooltip>
  );
};
