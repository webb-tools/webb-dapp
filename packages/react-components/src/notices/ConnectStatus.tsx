import { useApi } from '@webb-dapp/react-hooks';
import { notification } from '@webb-dapp/ui-components';
import React, { FC, useEffect, useMemo, useRef } from 'react';

export const ConnectStatus: FC = () => {
  const { connected, error } = useApi();
  const messageKey = useRef<string>('CONNECT_STATUS_MESSAGE');

  const baseConfig = useMemo(
    () => ({
      closeIcon: <p />, // hack for hide close icon
      key: messageKey.current,
      message: 'Connect Error',
      placement: 'topRight' as any,
    }),
    []
  );

  useEffect(() => {
    if (error) {
      notification.error({ ...baseConfig });
    }
  }, [error, baseConfig]);

  useEffect(() => {
    if (connected) {
      notification.success({
        ...baseConfig,
        duration: 2,
        message: 'Connect Success',
      });
    }
  }, [connected, baseConfig]);

  // no need to render DOM
  return null;
};
