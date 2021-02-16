import { pageWithFeatures } from '@webb-dapp/react-components/utils/FeaturesGuard/pageWithFeatures';
import { useSubMenu } from '@webb-dapp/react-environment';
import { useMixerProvider } from '@webb-dapp/react-hooks/mixer';
import { Col, Loading, Row, useTabs } from '@webb-dapp/ui-components';
import React, { FC, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router';

import { LiquidityInformation } from './components/common';
import { WithdrawConsole } from '@webb-dapp/page-mixer/components/withdraw/withdrawConsole';
import { DepositConsole } from '@webb-dapp/page-mixer/components/deposit/DepositConsole';

type SwapTabType = 'deposit' | 'withdraw';

const subMenu = [
  {
    content: 'Deposit',
    key: 'deposit',
  },
  {
    content: 'Withdraw',
    key: 'withdraw',
  },
];

const PageMixer: FC = () => {
  const { changeTabs, currentTab } = useTabs<SwapTabType>('deposit');
  const { changeTabs: changeSubMenu, currentTab: currentSubMenu } = useTabs<SwapTabType>('deposit');

  const mixer = useMixerProvider();

  const params = useParams();

  useEffect(() => {
    if (!mixer.initialized && !mixer.loading) {
      mixer.init();
    }
  }, []);

  useSubMenu({
    active: currentSubMenu,
    content: subMenu,
    onClick: changeSubMenu as (key: string) => void,
  });

  useLayoutEffect(() => {
    if (params.tab) {
      changeTabs(params.tab as SwapTabType);
    }
    /* eslint-disable-next-line */
  }, [changeTabs]);

  if (mixer.loading || !mixer.initialized) {
    return <Loading />;
  }

  if (currentSubMenu === 'deposit') {
    return <DepositConsole />;
  }

  return (
    <Row gutter={[0, 24]}>
      <Col span={24}>
        <LiquidityInformation />
      </Col>
      <Col span={24}>
        <WithdrawConsole />
      </Col>
    </Row>
  );
};

export default pageWithFeatures({
  features: ['mixer'],
  message: "Mixer isn't supported on the current cain ,please consider change the current network",
})(PageMixer);
