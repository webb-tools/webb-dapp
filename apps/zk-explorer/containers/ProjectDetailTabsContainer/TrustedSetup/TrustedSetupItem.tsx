import type { FC } from 'react';
import {
  Chip,
  type ChipColors,
  Table,
  Typography,
  fuzzyFilter,
} from '@webb-tools/webb-ui-components';
import { Download } from '@webb-tools/icons';

import GitHubIconWithLink from '../../../components/GitHubIconWithLink';
import type {
  ContributionListItem,
  ProjectTrustedSetupItem,
} from '../../../server';

const TrustedSetupItem: FC<ProjectTrustedSetupItem> = ({
  name,
  gitHubUrl,
  tags,
  finalZKey,
  contributionList,
}) => {
  return (
    <div className="bg-mono-0 dark:bg-mono-190 p-4 space-y-4 rounded-lg">
      {/* Header */}
      <div className="flex items-center gap-1">
        <Typography variant="h4" fw="bold">
          {name}
        </Typography>
        <GitHubIconWithLink href={gitHubUrl} size="lg" />
      </div>

      {/* Tags */}
      <div className="flex overflow-x-auto md:overflow-x-visible md:flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <Chip
            key={idx}
            color={getChipColorByIdx(idx)}
            className="whitespace-nowrap"
          >
            {tag}
          </Chip>
        ))}
      </div>

      {/* ZKey */}
      <div className="space-y-1 py-3">
        <Typography variant="body3">Final ZKey:</Typography>
        <div className="rounded-md bg-mono-20 dark:bg-mono-160 p-3 flex items-center justify-between">
          <Typography variant="body1" className="!font-[Cousine]">
            {finalZKey.filename}
          </Typography>
          <a
            href={finalZKey.downloadUrl}
            className="rounded-md p-2 bg-blue-10 hover:bg-blue-20 dark:bg-blue-120 dark:hover:bg-blue-110"
          >
            <Download className="!fill-blue-70 dark:!fill-blue-50" />
          </a>
        </div>
      </div>

      {/* Contribution List */}
      {contributionList && <ContributionListTable data={contributionList} />}
    </div>
  );
};

export default TrustedSetupItem;

/** @internal */
const ContributionListTable: FC<{ data: ContributionListItem[] }> = ({
  data,
}) => {
  return <div></div>;
};

/** @internal */
const getChipColorByIdx = (idx: number): ChipColors => {
  switch (idx % 5) {
    case 0:
      return 'blue';
    case 1:
      return 'purple';
    case 2:
      return 'green';
    case 3:
      return 'yellow';
    case 4:
      return 'red';
    default:
      return 'blue';
  }
};
