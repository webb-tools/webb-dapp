import React, { cloneElement, useMemo } from 'react';
import { Spinner } from './Spinner';
import StatusIndicator from './StatusIndicator';
import { StatusIndicatorProps } from './StatusIndicator/types';
import { useDynamicSVGImport } from './hooks/useDynamicSVGImport';
import { TokenIconBase } from './types';
import { getIconSizeInPixel } from './utils';

// If the chain name contains `tangle`, then it is a tangle chain
const TANGLE_CHAIN = 'tangle';

export const ChainIcon: React.FC<
  TokenIconBase & { status?: StatusIndicatorProps['variant'] }
> = ({ status, ...props }) => {
  const {
    className,
    name: nameProp,
    onCompleted,
    onError,
    size = 'md',
    ...restProps
  } = props;

  const name = useMemo(() => {
    const chainName = nameProp?.toLowerCase() || '';
    if (chainName.includes(TANGLE_CHAIN)) {
      return TANGLE_CHAIN;
    }

    return chainName.replace(/\s/g, '-');
  }, [nameProp]);

  const { svgElement, error, loading } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
    type: 'chain',
  });

  if (error) {
    return <span>{error.message}</span>;
  }

  if (loading) {
    return <Spinner {...props} />;
  }

  if (svgElement) {
    const sizeInPx = getIconSizeInPixel(size);
    const props: React.SVGProps<SVGSVGElement> = {
      className,
      width: parseInt(sizeInPx),
      height: parseInt(sizeInPx),
      ...restProps,
    };

    return typeof status !== 'undefined' ? (
      <div className="relative">
        {cloneElement(svgElement, props)}
        <StatusIndicator
          variant={status}
          className="absolute top-0 right-0 inline-block"
        />
      </div>
    ) : (
      cloneElement(svgElement, props)
    );
  }

  return null;
};
