import { DemoTable } from '@webb-dapp/page-statistics/provider/DemoTable';
import { useActiveKeys, useKeys } from '@webb-dapp/page-statistics/provider/hooks/useKeys';
import styled from 'styled-components';

export interface DKGAuthority {
  authorityId: string;

  accountId: string;

  reputation?: string;
}

const AuthoritiesDataWrapper = styled.div`
  color: red;
  white-space: pre;
`;

export const AuthoritiesData = () => {
  const data = useKeys({
    offset: 0,
    perPage: 30,
  });
  const activeKeys = useActiveKeys();
  console.log(activeKeys);
  return (
    <AuthoritiesDataWrapper>
      <DemoTable page={data} />
    </AuthoritiesDataWrapper>
  );
};
