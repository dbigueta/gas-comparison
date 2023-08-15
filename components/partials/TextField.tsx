'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Tooltip } from '@nextui-org/tooltip';

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
  return (
    <div className="">
      <label>
        <div className="flex items-center gap-2 mb-2">
          <p className="text-sm">{label}</p>
          {tooltip && tooltipText !== '' && (
            <Tooltip isOpen={tooltipClicked} onOpenChange={(open) => setTooltipClicked(open)} content={tooltipText}>
              <figure
                onClick={() => setTooltipClicked(!tooltipClicked)}
                onMouseEnter={() => setTooltipClicked(true)}
                onMouseLeave={() => setTooltipClicked(false)}>
                <Image src="/assets/Tooltip.svg" width="20" height="20" alt="Hover/Click on me for more information!" />
              </figure>
            </Tooltip>
          )}
        </div>
        <input
          className="text-xs h-12 w-full rounded-xl text-neutral-400 px-4 md:px-5 transition-[padding]"
          placeholder={placeholder}
          type="text"
          name={name}
        />
      </label>
    </div>
  );
};
export default TextField;
