import { Tooltip, chakra } from '@chakra-ui/react';
import type { As } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import shortenString from 'lib/shortenString';

import config from '../../configs/app';
import shortenUniversalProfile from '../../lib/shortenUniversalProfile';

interface Props {
  hash: string;
  isTooltipDisabled?: boolean;
  as?: As;
}

const HashStringShorten = ({ hash, isTooltipDisabled, as = 'span' }: Props) => {
  const [ shortenedString, setShortenedString ] = React.useState(shortenString(hash));
  useEffect(() => {
    if (config.UI.views.address.identiconType === 'universal_profile' && hash.includes('#')) {
      setShortenedString(shortenUniversalProfile(hash));
    }
  }, [ hash ]);

  if (hash.length <= 8) {
    return <chakra.span as={ as }>{ hash }</chakra.span>;
  }

  return (
    <Tooltip label={ hash } isDisabled={ isTooltipDisabled }>
      <chakra.span as={ as }>{ shortenedString }</chakra.span>
    </Tooltip>
  );
};

export default HashStringShorten;
