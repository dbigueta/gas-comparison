'use client';

import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import useMediaQuery from '@/src/hooks/useMediaQuery';
import { SCREENS } from '@/src/constants';
import Icon from './icon/Icon';

type Props = {
  id: string;
  required?: boolean;
  label: string;
  placeholder?: string;
  tooltipText?: string;
  numbersOnly?: boolean;
  title: string;
};

const TextField: React.FC<Props> = ({
  id,
  required = false,
  label,
  placeholder = '',
  tooltipText = '',
  numbersOnly = false,
  title,
}) => {
  const isTablet = useMediaQuery(SCREENS.MD);
  return (
    <div>
      <label htmlFor={id} className="flex items-center gap-2 mb-2 w-fit">
        <p className="text-sm text-neutral-100">{label}</p>
        {tooltipText !== '' && (
          <Tippy className="text-field-tooltip" trigger={isTablet ? 'mouseenter focus' : 'click'} content={tooltipText}>
            <div>
              <Icon name="tooltip" />
            </div>
          </Tippy>
        )}
      </label>
      <input
        className="text-xs h-12 w-full rounded-xl text-neutral-400 !transition-[padding,height,box-shadow,font-size] !ease-linear focus:outline-none focus:shadow-[0_0_0_3px_#FFCB77] pl-4 pr-8 py-2 md:pl-5 md:pr-10 md:py-3 md:h-14"
        placeholder={placeholder}
        type="text"
        name={id}
        title={title}
        pattern={numbersOnly ? '[0-9]' : ''}
        id={id}
        required={required}
      />
    </div>
  );
};
export default TextField;
