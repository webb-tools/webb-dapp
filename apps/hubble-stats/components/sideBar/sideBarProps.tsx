import { ContrastTwoLine, DocumentationIcon, Tangle } from '@webb-tools/icons';
import {
  Logo,
  SideBarFooterType,
  SideBarItemProps,
  SidebarProps,
} from '@webb-tools/webb-ui-components';
import {
  BRIDGE_URL,
  DKG_STATS_URL,
  TANGLE_MKT_URL,
  WEBB_DOCS_URL,
  WEBB_FAUCET_URL,
  WEBB_MKT_URL,
} from '@webb-tools/webb-ui-components/constants';

const sideBarItems: SideBarItemProps[] = [
  {
    name: 'Hubble',
    isInternal: true,
    isNext: true,
    href: '',
    Icon: ContrastTwoLine,
    subItems: [
      {
        name: 'Bridge',
        isInternal: false,
        href: BRIDGE_URL,
      },
      {
        name: 'Explorer',
        isInternal: true,
        isNext: true,
        href: '/',
      },
      {
        name: 'Faucet',
        isInternal: false,
        href: WEBB_FAUCET_URL,
      },
    ],
  },
  {
    name: 'Tangle Network',
    isInternal: false,
    href: '',
    Icon: Tangle,
    subItems: [
      {
        name: 'DKG Explorer',
        isInternal: false,
        href: DKG_STATS_URL,
      },
      {
        name: 'Homepage',
        isInternal: false,
        href: TANGLE_MKT_URL,
      },
    ],
  },
];

const sideBarFooter: SideBarFooterType = {
  name: 'Webb Docs',
  isInternal: false,
  href: WEBB_DOCS_URL,
  Icon: DocumentationIcon,
  useNextThemesForThemeToggle: true,
};

const sideBarProps: SidebarProps = {
  Logo,
  items: sideBarItems,
  footer: sideBarFooter,
  logoLink: WEBB_MKT_URL,
};

export default sideBarProps;
