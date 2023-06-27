import { ChainIcon } from '../../../../icons';

const Template = (args) => <ChainIcon {...args} />;

export default {
  title: 'Design System/Molecules/ChainIcon',
  component: ChainIcon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: [
          'polygon',
          'polygon mumbai',
          'ethereum',
          'goerli',
          'sepolia',
          'optimism',
          'optimism goerli',
          'kusama',
          'moonbeam',
          'moonbase alpha',
          'polkadot',
          'arbitrum',
          'arbitrum goerli',
          'avalanche',
          'avalanche fuji',
          'cosmos',
          'tangle',
          'scroll',
          'athena',
          'demeter',
          'hermes',
        ],
      },
    },
  },
};

export const Ethereum = Template.bind({});
Ethereum.args = {
  name: 'ethereum',
};

export const Cosmos = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Cosmos.args = {
  name: 'webb',
};
