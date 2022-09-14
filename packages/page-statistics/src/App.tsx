import { ApolloClient, InMemoryCache } from '@apollo/client';
import { randNumber, randRecentDate, randSoonDate } from '@ngneat/falso';
import { KeygenTable, KeyStatusCard, Logo, ThemeSwitcher } from '@webb-dapp/webb-ui-components';
import { WebbUIProvider } from '@webb-dapp/webb-ui-components/provider';
import { FC } from 'react';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000',
});

const App: FC = () => {
  return (
    <WebbUIProvider>
      <div className='min-h-[72px] bg-mono-0 dark:bg-mono-180 mb-8 flex justify-between items-center p-4'>
        <Logo />
        <ThemeSwitcher />
      </div>

      <div className='px-8 py-8'>
        <div className='flex space-x-4'>
          <KeyStatusCard
            title='Active Key'
            titleInfo='Active Key'
            sessionNumber={3456}
            keyType='current'
            keyVal='0x1234567890abcdef'
            startTime={randRecentDate()}
            endTime={randSoonDate()}
            authorities={{
              nepoche: {
                id: 'nepoche',
                avatarUrl: 'https://github.com/nepoche.png',
              },
              AhmedKorim: {
                id: 'AhmedKorim',
                avatarUrl: 'https://github.com/AhmedKorim.png',
              },
              AtelyPham: {
                id: 'AtelyPham',
                avatarUrl: 'https://github.com/AtelyPham.png',
              },
            }}
            totalAuthorities={randNumber({ min: 10, max: 20 })}
            fullDetailUrl='https://webb.tools'
          />
          <KeyStatusCard
            title='Next Key'
            titleInfo='Next Key'
            sessionNumber={3456}
            keyType='next'
            keyVal='0x1234567890abcdef'
            startTime={randRecentDate()}
            endTime={randSoonDate()}
            authorities={{
              nepoche: {
                id: 'nepoche',
                avatarUrl: 'https://github.com/nepoche.png',
              },
              AhmedKorim: {
                id: 'AhmedKorim',
                avatarUrl: 'https://github.com/AhmedKorim.png',
              },
              AtelyPham: {
                id: 'AtelyPham',
                avatarUrl: 'https://github.com/AtelyPham.png',
              },
            }}
            totalAuthorities={randNumber({ min: 10, max: 20 })}
            fullDetailUrl='https://webb.tools'
          />
        </div>

        <div className='mt-4'>
          <KeygenTable />
        </div>
      </div>
    </WebbUIProvider>
  );
};

export default App;
