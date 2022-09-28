import './initI18n';

import { StyledEngineProvider } from '@mui/styled-engine';
import { DAppError } from '@webb-dapp/react-components/utils/Error/DAppError';
import { IpProvider, RouterProvider, WebbProvider } from '@webb-dapp/react-environment';
import { UIProvider } from '@webb-dapp/ui-components';
import { NotificationStacked } from '@webb-dapp/ui-components/notification';
import Theme from '@webb-dapp/ui-components/styles/Theme';
import { LoggerService } from '@webb-tools/app-util';
import React, { FC } from 'react';

import { config as routerConfig } from './router-config';
const appLogger = LoggerService.new('App');

const App: FC = () => {
  return (
    // @ts-ignore
    <DAppError logger={appLogger}>
      <WebbProvider applicationName={'Webb DApp'}>
        <StyledEngineProvider injectFirst>
          <UIProvider>
            <IpProvider>
              <Theme />
              <RouterProvider config={routerConfig} />
              <NotificationStacked />
            </IpProvider>
          </UIProvider>
        </StyledEngineProvider>
      </WebbProvider>
    </DAppError>
  );
};

export default App;
