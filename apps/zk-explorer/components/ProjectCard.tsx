import { Card, Typography, Chip } from '@webb-tools/webb-ui-components';
import { FC } from 'react';
import { ProjectItem } from '../app/page';
import Image from 'next/image';
import assert from 'assert';

export const ProjectCard: FC<ProjectItem> = (props) => {
  assert(props.circuitCount >= 0, 'Circuit count should never be negative.');

  return (
    <Card
      key={`${props.repositoryOwner}/${props.repositoryName}`}
      className="flex flex-row gap-3 space-y-0"
    >
      <div>
        {/* TODO: Likely there's a way to get Tailwind-dependent width & height values for the Image component. */}
        <Image
          alt={`${props.repositoryOwner}'s avatar`}
          src={props.avatarUrl}
          width={48}
          height={48}
          className="rounded-full bg-mono-200"
        />
      </div>

      <div>
        <Typography variant="body1" fw="bold" className="dark:text-mono-0">
          @{props.repositoryOwner}/{props.repositoryName}
        </Typography>

        <Typography variant="body2" fw="normal" className="dark:text-mono-100">
          {props.description}
        </Typography>

        <div className="flex flex-row w-full mt-2">
          <div className="flex flex-col items-start gap-2 w-full">
            <Typography
              variant="body2"
              fw="normal"
              className="dark:text-mono-00"
            >
              Contributors
            </Typography>

            <div className="flex space-x-[-7px]">
              {/* TODO: Likely there's a way to get Tailwind-dependent width & height values for the Image component. */}
              {props.contributorAvatarUrls.map((avatarUrl, index) => (
                <Image
                  key={index}
                  alt="Contributor avatar"
                  src={avatarUrl}
                  width={24}
                  height={24}
                  className="rounded-full bg-mono-200 border-[1px] border-mono-140"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <Typography
              variant="body2"
              fw="normal"
              className="dark:text-mono-00"
            >
              Circuits
            </Typography>

            <Chip color="grey" className="bg-mono-140">
              {props.circuitCount}
            </Chip>
          </div>
        </div>
      </div>
    </Card>
  );
};
