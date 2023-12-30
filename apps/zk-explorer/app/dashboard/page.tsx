'use client';

import {
  Avatar,
  Button,
  Card,
  Input,
  Typography,
} from '@webb-tools/webb-ui-components';
import { WEBB_DOCS_URL } from '@webb-tools/webb-ui-components/constants';
import { FC, useCallback, useMemo, useState } from 'react';
import { Header } from '../../components/Header';
import { Tabs } from '../../components/Tabs';

export default function Dashboard() {
  return (
    <main className="flex flex-col gap-6">
      <Header />

      <Tabs
        tabs={[{ name: 'Overview' }, { name: 'Settings' }, { name: 'Billing' }]}
      >
        <Tabs.Content>
          <OverviewTab />
        </Tabs.Content>

        <Tabs.Content>
          <SettingsTab />
        </Tabs.Content>

        <Tabs.Content>
          <BillingTab />
        </Tabs.Content>
      </Tabs>
    </main>
  );
}

/** @internal */
const BillingTab: FC = () => {
  // TODO: Implement billing tab.
  return <div>billing</div>;
};

/** @internal */
const SettingsTab: FC = () => {
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');
  const [twitter, setTwitter] = useState('');
  const [bio, setBio] = useState('');
  const [website, setWebsite] = useState('');

  const wereChangesMade = useMemo(
    () =>
      email !== '' ||
      github !== '' ||
      twitter !== '' ||
      website !== '' ||
      bio !== '',
    [email, github, twitter, website, bio]
  );

  const restoreChanges = useCallback(() => {
    setEmail('');
    setGithub('');
    setTwitter('');
    setWebsite('');
  }, []);

  return (
    <Card className="flex flex-col-reverse sm:flex-row justify-between p-6 rounded-2xl space-y-0 gap-7">
      <div className="flex flex-col gap-4 md:gap-12 w-full max-w-[892px]">
        <Typography variant="h5" fw="bold">
          Profile Settings
        </Typography>

        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex flex-col gap-3 w-full">
            <Typography
              variant="body1"
              fw="semibold"
              className="dark:text-mono-0"
            >
              GitHub:
            </Typography>

            <Input
              id="user github url"
              isDisabled
              value={github}
              className="w-full"
              placeholder="www.github.com/webb"
            />
          </div>

          <div className="flex flex-col gap-3 w-full">
            <Typography
              variant="body1"
              fw="semibold"
              className="dark:text-mono-0"
            >
              Email Address:
            </Typography>

            <Input
              id="user email address"
              className="w-full"
              placeholder="hello@webb.tools"
              type="email"
            />
          </div>
        </div>

        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex flex-col gap-3 w-full">
            <Typography
              variant="body1"
              fw="semibold"
              className="dark:text-mono-0"
            >
              Twitter:
            </Typography>

            <Input
              id="user twitter url"
              className="w-full"
              value={twitter}
              placeholder="@webbprotocol"
            />
          </div>

          <div className="flex flex-col gap-3 w-full">
            <Typography
              variant="body1"
              fw="semibold"
              className="dark:text-mono-0"
            >
              Website:
            </Typography>

            <Input
              id="user website url"
              className="w-full"
              placeholder="www.webb.tools"
              value={website}
              type="url"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Typography
            variant="body1"
            fw="semibold"
            className="dark:text-mono-0"
          >
            Short Bio:
          </Typography>

          <Input
            id="user short bio"
            className="w-full"
            placeholder="Share a bit about yourself..."
            value={twitter}
          />
        </div>

        <div className="flex gap-4 justify-end">
          {/* TODO: Handle restore unsaved changes button. */}
          <Button
            onClick={restoreChanges}
            isDisabled={!wereChangesMade}
            variant="secondary"
          >
            Cancel
          </Button>

          {/* TODO: Handle save changes button. */}
          <Button isDisabled={!wereChangesMade}>Save</Button>
        </div>
      </div>

      <div className="flex flex-col gap-6 items-end">
        <LargeSquareAvatar />

        {/* TODO: Handle upload avatar button. */}
        <Button variant="secondary">Upload</Button>
      </div>
    </Card>
  );
};

const LargeSquareAvatar: FC = () => {
  // TODO: Temporary avatar URL, replace with user's avatar. Since the avatars can be uploaded by the user, we need to store them in the database. This means it will likely be sourced from some API route.
  return (
    <Avatar
      className="flex ml-auto rounded-2xl dark:bg-mono-190 w-24 h-24"
      size="lg"
      src="./avatar.png"
    />
  );
};

/** @internal */
const OverviewTab: FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card className="p-6 flex rounded-2xl space-y-0">
        <div className="flex">
          <div className="flex flex-col justify-center gap-1">
            <Typography variant="body2" fw="normal">
              Activated Circuits
            </Typography>

            <Typography variant="h5" fw="bold">
              -
            </Typography>
          </div>

          <VerticalDivider />

          <div className="flex flex-col justify-center gap-1">
            <Typography variant="body2" fw="normal">
              Member Since
            </Typography>

            <Typography variant="h5" fw="bold">
              Dec 11, 2023
            </Typography>
          </div>

          <VerticalDivider />

          <div className="flex flex-col justify-center gap-1">
            <Typography variant="body2" fw="normal">
              Links
            </Typography>

            <Typography variant="h5" fw="bold">
              Dec 11, 2023
            </Typography>
          </div>

          <VerticalDivider />

          <div className="flex flex-col justify-center gap-1">
            <Typography variant="body2" fw="normal">
              Short Bio
            </Typography>

            <Typography variant="h5" fw="bold">
              -
            </Typography>
          </div>

          <LargeSquareAvatar />
        </div>
      </Card>

      <Card className="p-6 flex gap-4 rounded-2xl space-y-0">
        <Typography variant="h5" fw="bold">
          Proof Generations
        </Typography>

        <div className="flex flex-col items-center gap-3 py-12 mx-auto">
          <Typography variant="h5" fw="bold" className="text-center">
            🔍
            <br /> Coming Soon!
          </Typography>

          <Typography
            variant="body2"
            fw="normal"
            className="text-center max-w-[712px]"
          >
            Get ready to unlock the full potential of your ZK circuits! Our ZK
            services are on the horizon, designed to seamlessly create and
            manage zero-knowledge proofs with unparalleled efficiency.
          </Typography>

          <Button variant="secondary" href={WEBB_DOCS_URL}>
            Learn More
          </Button>
        </div>
      </Card>
    </div>
  );
};

/** @internal */
const VerticalDivider: FC = () => {
  return (
    <div className="inline-block px-7">
      <div className="border-r dark:border-mono-160 min-h-[57px] h-full" />
    </div>
  );
};
