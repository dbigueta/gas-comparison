'use client';

import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import useMediaQuery from '@/src/hooks/useMediaQuery';
import { SCREENS } from '@/src/constants';
import Icon from './icon/Icon';
import { FormValues } from '@/src/types/forms';

interface TextFieldProps {
  id: string;
  required?: boolean;
  label: string;
  placeholder?: string;
  tooltipText?: string;
  pattern?: string;
  title: string;
  max?: number;
  min?: number;
  step?: number;
  autoFocus?: boolean;
  autoComplete?: 'on' | 'off';
  state: FormValues;
  setState?: (e: any) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  required = false,
  label,
  placeholder = '',
  tooltipText = '',
  pattern = '',
  title,
  max = 999,
  min = 1,
  step = 1,
  autoFocus = false,
  autoComplete = 'on',
  state,
  setState,
}) => {
  const isTablet = useMediaQuery(SCREENS.MD);
  return (
    <div className="text-field">
      <label htmlFor={id} className="flex items-center gap-2 mb-2 w-fit">
        <p className="text-sm text-neutral-100">{label}</p>
        {tooltipText !== '' && (
          <Tippy className="text-field-tooltip" trigger={isTablet ? 'mouseenter focus' : 'click'} content={tooltipText}>
            <div className="hover:cursor-help">
              <Icon name="tooltip" />
            </div>
          </Tippy>
        )}
      </label>

      {/* Trim input value so no white space */}
      <input
        className="text-input text-xs h-12 w-full rounded-xl text-neutral-400 !transition-[padding,height,box-shadow,font-size] !ease-linear focus:outline-none focus:shadow-[0_0_0_3px_#FFCB77] pl-4 pr-8 py-2 md:pl-5 md:pr-10 md:py-3 md:h-14"
        placeholder={placeholder}
        type="number"
        name={id}
        title={title}
        id={id}
        inputMode="numeric"
        required={required}
        pattern={pattern}
        max={max}
        min={min}
        step={step}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        value={state == null || state[id as keyof FormValues] === 0 ? '' : state[id as keyof FormValues]}
        onChange={setState}
      />
    </div>
  );
};
export default TextField;
