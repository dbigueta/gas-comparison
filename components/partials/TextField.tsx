'use client';

import { useState } from 'react';
import Image from 'next/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import useMediaQuery from '@/src/hooks/useMediaQuery';
import { SCREEN_MD } from '@/src/constants';

type TextFieldProps = {
  type?: 'number' | 'text';
  name: string;
  label: string;
  placeholder?: string;
  tooltip?: boolean;
  tooltipText?: string;
};

const TextField = ({
  type = 'number',
  name,
  label,
  placeholder = '',
  tooltip = false,
  tooltipText = '',
}: TextFieldProps) => {
  const [tooltipClicked, setTooltipClicked] = useState(false);
  const isTablet = useMediaQuery(SCREEN_MD);
  return (
    <div className="">
      <label>
        <div className="flex items-center gap-2 mb-2">
          <p className="text-sm">{label}</p>
          {tooltip && tooltipText !== '' && (
            <Tippy
              className="text-field-tooltip"
              trigger={isTablet ? 'mouseenter focus' : 'click'}
              content={tooltipText}>
              <figure>
                <Image src="/assets/Tooltip.svg" width="20" height="20" alt="Hover/Click on me for more information!" />
              </figure>
            </Tippy>
          )}
        </div>
        <input
          className="text-xs h-12 w-full rounded-xl text-neutral-400 transition-[padding,height] px-4 md:px-5 md:h-14"
          placeholder={placeholder}
          type="text"
          name={name}
        />
      </label>
    </div>
  );
};
export default TextField;
