import React from 'react';
import cn from 'classnames';

import Arrow from './logos/arrow.svg';
import Tooltip from './logos/tooltip.svg';

type Props = {
  className?: string;
  name: string;
};

const Icon: React.FC<Props> = ({ className, name }) => {
  const icons: { [key: string]: JSX.Element } = {
    arrow: <Arrow />,
    tooltip: <Tooltip />,
  };
  return <div className={cn('fill-current', className)}>{icons[name]}</div>;
};

export default Icon;
