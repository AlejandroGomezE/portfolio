'use client';
import clsx from 'clsx';
import { MouseEventHandler, useState, MouseEvent } from 'react';
import { Accounts, Debug, Explorer, Extensions, Gear, Search, SourceControl } from '@/icons';

const barItems = [
  {
    hoverText: 'Search (Ctrl + Shift + F)',
    icon: <Search />,
  },
  {
    hoverText: 'Source Control (Ctrl + Shift + G)',
    icon: <SourceControl height={32} width={32} />,
  },
  {
    hoverText: 'Run and Debug (Ctrl + Shift + D)',
    icon: <Debug />,
  },
  {
    hoverText: 'Extensions (Ctrl + Shift + X)',
    icon: <Extensions />,
  },
];

export default function ActivityBar() {
  return (
    <div className="max-w-fit text-gray-500 flex flex-col justify-between">
      <div className="cursor-pointer">
        <Tooltip icon={<Explorer />} text="Explorer (Ctrl+Shift+E)" active={true} />
        {barItems.map((item, index) => (
          <Tooltip key={index} icon={item.icon} text={item.hoverText} active={false} />
        ))}
      </div>
      <div className="cursor-pointer">
        <Tooltip icon={<Accounts />} text="Accounts" active={false} />
        <Tooltip icon={<Gear />} text="Manage" active={false} />
      </div>
    </div>
  );
}

function Tooltip({ icon, text, active }: { icon: JSX.Element; text: string; active: boolean }) {
  const [toolTipActive, setToolTipActive] = useState<boolean>(false);

  const handleMouseIn: MouseEventHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setToolTipActive(true);
  };

  const handleMouseOut: MouseEventHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setToolTipActive(false);
  };

  return (
    <div className="relative">
      <div onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} className={clsx(active ? 'border-l-2' : 'opacity-50 hover:opacity-90', 'p-3 relative')}>
        {icon}
      </div>
      <span
        className={clsx(
          toolTipActive ? 'block opacity-100' : 'opacity-0 hidden',
          'absolute top-1/2 -translate-y-1/2 translate-x-[50px] bg-dark_bg border border-dark_border py-1 px-2 whitespace-nowrap text-sm transition-opacity ease-in-out duration-300'
        )}
      >
        {text}
      </span>
    </div>
  );
}
