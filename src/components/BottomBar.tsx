'use client';
import clsx from 'clsx';
import { useState, MouseEvent, MouseEventHandler } from 'react';
import { Bell, CloudUpload, RadioTower, Remote, SourceControl } from '@/icons';

const rightItems = [
  {
    icon: <span>Spaces: 2</span>,
    text: 'Select Indentation',
  },
  {
    icon: <span>UTF-8</span>,
    text: 'Select Encoding',
  },
  {
    icon: <span>CRLF</span>,
    text: 'Select End of Line Sequence',
  },
  {
    icon: <span>&#123; &#125; TypeScript JSX</span>,
    text: 'Select Language Mode',
  },
  {
    icon: (
      <div className="flex">
        <RadioTower />
        <span className="ml-1">Go Live</span>
      </div>
    ),
    text: 'Click to run live server',
  },
  {
    icon: <Bell />,
    text: 'No Notifications',
  },
];

export default function BottomBar() {
  return (
    <div className="flex justify-between border-t-2 border-dark_border text-gray-500 text-sm">
      <div className="flex items-center cursor-pointer gap-1">
        <div className="bg-blue-300 0">
          <Tooltip icon={<Remote />} text="Open a Remote Window" position="left" />
        </div>
        <Tooltip
          icon={
            <div className="flex">
              <SourceControl height={18} width={18} />
              <span className="ml-1">main*</span>
            </div>
          }
          text="portfolio Git - main*"
          position="left"
        />
        <Tooltip icon={<CloudUpload />} text="portfolio (Git) - Publish Branch" position="left" />
      </div>
      <div className="flex items-center cursor-pointer mr-2 gap-2">
        {rightItems.map((item, index) => (
          <Tooltip key={index} icon={item.icon} text={item.text} position="right" />
        ))}
      </div>
    </div>
  );
}

function Tooltip({ icon, text, position }: { icon: JSX.Element; text: string; position: 'left' | 'right' }) {
  const [toolTipActive, setToolTipActive] = useState<boolean>(false);

  const handleMouseIn: MouseEventHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setToolTipActive(true);
  };

  const handleMouseOut: MouseEventHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setToolTipActive(false);
  };

  return (
    <div className="relative">
      <div onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} className="p-1 px-2 relative hover:bg-blue-200">
        {icon}
      </div>
      <span
        className={clsx(
          toolTipActive ? 'block opacity-100' : 'opacity-0 hidden',
          position === 'right' && 'right-0',
          position === 'left' && 'left-0',
          'absolute -translate-y-[calc(100%+5px)] top-0 bg-dark_bg border border-dark_border py-1 px-2 whitespace-nowrap text-sm transition-opacity ease-in-out duration-300'
        )}
      >
        {text}
      </span>
    </div>
  );
}
