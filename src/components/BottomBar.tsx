'use client';
import clsx from 'clsx';
import { useState, MouseEvent, MouseEventHandler } from 'react';
import { Bell, Remote } from '@/icons';

export default function BottomBar() {
  return (
    <div className="flex justify-between border-t-2 border-dark_border">
      <div className="flex items-center cursor-pointer">
        <div className="bg-blue-300 text-white p-1 px-3 hover:bg-dark_border">
          <Remote />
        </div>
      </div>
      <div className="flex items-center cursor-pointer mr-2 text-gray-500">
        <Tooltip icon={<Bell />} text="No Notifications" />
      </div>
    </div>
  );
}

function Tooltip({ icon, text }: { icon: JSX.Element; text: string }) {
  const [toolTipActive, setToolTipActive] = useState<boolean>(false);

  const handleMouseIn: MouseEventHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setToolTipActive(true);
  };

  const handleMouseOut: MouseEventHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setToolTipActive(false);
  };

  return (
    <div className="relative">
      <div onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} className="p-1 px-2 relative hover:bg-gray-300">
        {icon}
      </div>
      <span
        className={clsx(
          toolTipActive ? 'opacity-100' : 'opacity-0',
          'absolute -translate-y-[calc(100%+5px)] top-0 right-0 bg-dark_bg border border-dark_border py-1 px-2 whitespace-nowrap text-sm transition-opacity ease-in-out duration-300'
        )}
      >
        {text}
      </span>
    </div>
  );
}
