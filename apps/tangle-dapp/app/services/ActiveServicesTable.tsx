'use client';

import { Typography } from '@webb-tools/webb-ui-components';
import { FC } from 'react';
import useSWR from 'swr';

import { ContainerSkeleton, ServiceTable, TableStatus } from '../../components';
import { getActiveServices } from '../../data/ServiceTables';

const pageSize = 10;

const ActiveServicesTable: FC = () => {
  const { data: activeServicesData, isLoading: activeServicesDataLoading } =
    useSWR([getActiveServices.name], getActiveServices);

  return (
    <div className="space-y-5">
      <Typography variant="h4" fw="bold">
        Active Services
      </Typography>
      {activeServicesData && activeServicesData.length === 0 ? (
        <TableStatus
          title="No Past Services Found"
          description="No ongoing MPC services at the moment. Active services will be listed here."
          icon="⏳"
        />
      ) : activeServicesDataLoading || !activeServicesData ? (
        <ContainerSkeleton />
      ) : (
        // TODO: Handle lazy load when integrating with backend
        <ServiceTable data={activeServicesData} pageSize={pageSize} />
      )}
    </div>
  );
};

export default ActiveServicesTable;
