import type { NavItemExternal } from 'types/client/navigation-items';
import type { ChainIndicatorId } from 'types/homepage';
import type { NetworkExplorer } from 'types/networks';

import * as views from './ui/views';
import { getEnvValue, getExternalAssetFilePath, parseEnvJson } from './utils';

// eslint-disable-next-line max-len
const HOMEPAGE_PLATE_BACKGROUND_DEFAULT = 'radial-gradient(103.03% 103.03% at 0% 0%, rgba(183, 148, 244, 0.8) 0%, rgba(0, 163, 196, 0.8) 100%), var(--chakra-colors-blue-400)';

const UI = Object.freeze({
  sidebar: {
    logo: {
      'default': getExternalAssetFilePath('NEXT_PUBLIC_NETWORK_LOGO'),
      dark: getExternalAssetFilePath('NEXT_PUBLIC_NETWORK_LOGO_DARK'),
    },
    icon: {
      'default': getExternalAssetFilePath('NEXT_PUBLIC_NETWORK_ICON'),
      dark: getExternalAssetFilePath('NEXT_PUBLIC_NETWORK_ICON_DARK'),
    },
    otherLinks: parseEnvJson<Array<NavItemExternal>>(getEnvValue('NEXT_PUBLIC_OTHER_LINKS')) || [],
    featuredNetworks: getExternalAssetFilePath('NEXT_PUBLIC_FEATURED_NETWORKS'),
  },
  footer: {
    links: getExternalAssetFilePath('NEXT_PUBLIC_FOOTER_LINKS'),
    frontendVersion: getEnvValue('NEXT_PUBLIC_GIT_TAG'),
    frontendCommit: getEnvValue('NEXT_PUBLIC_GIT_COMMIT_SHA'),
  },
  homepage: {
    charts: parseEnvJson<Array<ChainIndicatorId>>(getEnvValue('NEXT_PUBLIC_HOMEPAGE_CHARTS')) || [],
    plate: {
      background: getEnvValue('NEXT_PUBLIC_HOMEPAGE_PLATE_BACKGROUND') || HOMEPAGE_PLATE_BACKGROUND_DEFAULT,
      textColor: getEnvValue('NEXT_PUBLIC_HOMEPAGE_PLATE_TEXT_COLOR') || 'white',
    },
    showGasTracker: getEnvValue('NEXT_PUBLIC_HOMEPAGE_SHOW_GAS_TRACKER') === 'false' ? false : true,
    showAvgBlockTime: getEnvValue('NEXT_PUBLIC_HOMEPAGE_SHOW_AVG_BLOCK_TIME') === 'false' ? false : true,
  },
  views,
  indexingAlert: {
    isHidden: getEnvValue('NEXT_PUBLIC_HIDE_INDEXING_ALERT'),
  },
  maintenanceAlert: {
    message: getEnvValue('NEXT_PUBLIC_MAINTENANCE_ALERT_MESSAGE'),
  },
  explorers: {
    items: parseEnvJson<Array<NetworkExplorer>>(getEnvValue('NEXT_PUBLIC_NETWORK_EXPLORERS')) || [],
  },
});

export default UI;
