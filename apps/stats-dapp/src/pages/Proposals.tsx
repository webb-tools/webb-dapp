import { Card, Stats, TitleWithInfo } from '@webb-tools/webb-ui-components';
import { ProposalsTable } from '../containers';
import { useMemo } from 'react';
import { useStatsContext } from '../provider';
import { Outlet } from 'react-router-dom';

const Proposals = () => {
  const {
    dkgDataFromPolkadotAPI: { proposerCount, proposerThreshold },
  } = useStatsContext();

  const statsItems = useMemo(() => {
    return [
      {
        titleProps: {
          title: 'Proposal Threshold',
        },
        value: proposerThreshold,
      },
      {
        titleProps: {
          title: 'Proposers',
        },
        value: proposerCount,
      },
    ];
  }, [proposerCount, proposerThreshold]);

  return (
    <div className="flex flex-col space-y-4">
      <Card>
        <TitleWithInfo
          title="Proposals Status"
          variant="h5"
          info="Minimum votes (as set by the 'Proposal Threshold') from the 'Proposers' needed to pass a proposal to DKG for signing."
        />

        <Stats items={statsItems} />
      </Card>

      <ProposalsTable />

      <Outlet />
    </div>
  );
};

export default Proposals;
