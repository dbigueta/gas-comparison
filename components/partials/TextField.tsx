'use client';

import { useState } from 'react';
import Image from 'next/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import useMediaQuery from '@/src/hooks/useMediaQuery';
import { SCREEN_MD } from '@/src/constants';

type TextFieldProps = {
  id: string;
  label: string;
  placeholder?: string;
  tooltipText?: string;
};

const TextField = ({ id, label, placeholder = '', tooltipText = '' }: TextFieldProps) => {
  const isTablet = useMediaQuery(SCREEN_MD);
  return (
    <div>
      <label htmlFor={id} className="flex items-center gap-2 mb-2 w-fit">
        <p className="text-sm">{label}</p>
        {tooltipText !== '' && (
          <Tippy className="text-field-tooltip" trigger={isTablet ? 'mouseenter focus' : 'click'} content={tooltipText}>
            <figure>
              <Image src="/assets/Tooltip.svg" width="20" height="20" alt="Hover/Click on me for more information!" />
            </figure>
          </Tippy>
        )}
      </label>
      <input
        className="text-xs h-12 w-full rounded-xl text-neutral-400 !transition-[padding,height,box-shadow,font-size] !ease-linear focus:outline-none focus:shadow-[0_0_0_3px_#FFCB77] pl-4 pr-8 py-2 md:pl-5 md:pr-10 md:py-3 md:h-14"
        placeholder={placeholder}
        type="text"
        name={id}
        id={id}
      />
    </div>
  );
};
export default TextField;
