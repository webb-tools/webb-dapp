import { Typography } from '../../typography';
import cx from 'classnames';
import React, { useEffect, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { AlertProps } from './types';
import {
  AlertFill,
  CheckboxCircleFill,
  InformationLineFill,
} from '@webb-tools/icons';
import {
  getClassNamesByType,
  getTypographyClassNamesByType,
  getTitleClassNamesBySize,
  getDescriptionClassNamesBySize,
} from './utils';

/**
 * Webb Alert component
 *
 * Props:
 *
 * - `size`: Alert size - `md` (default), `lg`
 * - `type`: Alert type - `info` (default), `success`, `error`
 * - `title`: Alert title
 * - `description`: Alert description
 * - `className`: Outer class name
 *
 * @example
 *
 * <Alert title="Transaction Status" description="Your transaction was successful!" type='success' />
 */
export const Alert: React.FC<AlertProps> = ({
  className: _className,
  size = 'md',
  type = 'info',
  description,
  title,
}) => {
  const iconSize = useMemo(() => (size === 'md' ? '20px' : '14px'), [size]);

  const className = useMemo(() => {
    return twMerge(
      _className,
      'flex w-full p-3 pl-4 space-x-1 rounded-lg gap-2.5',
      getClassNamesByType(type)
    );
  }, [_className, type]);

  const titleClassName = useMemo(() => {
    return cx(
      'capitalize',
      getTypographyClassNamesByType(type),
      getTitleClassNamesBySize(size)
    );
  }, [type, size]);

  const descriptionlassName = useMemo(() => {
    return cx(
      getTypographyClassNamesByType(type),
      getDescriptionClassNamesBySize(size)
    );
  }, [type, size]);

  return (
    <div className={className}>
      {type === 'success' ? (
        <CheckboxCircleFill
          width={iconSize}
          height={iconSize}
          className="!fill-current"
        />
      ) : type === 'error' ? (
        <AlertFill
          width={iconSize}
          height={iconSize}
          className="!fill-current"
        />
      ) : (
        <InformationLineFill
          width={iconSize}
          height={iconSize}
          className="!fill-current"
        />
      )}

      <div className="flex flex-col justify-start items-start gap-1">
        <Typography variant="body1" className={titleClassName}>
          {title}
        </Typography>
        {description && (
          <Typography variant="body1" className={descriptionlassName}>
            {description}
          </Typography>
        )}
      </div>
    </div>
  );
};
