'use client';
import { Bell, CloudUpload, Info, RadioTower, Remote, SourceControl, Warning } from '@/icons';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import ToolTip from './ToolTip';

const rightItems = [
  {
    icon: <span>Spaces: 2</span>,
    text: 'Select Indentation',
    position: 'center' as const,
    className: 'hidden md:block',
  },
  {
    icon: <span>UTF-8</span>,
    text: 'Select Encoding',
    position: 'center' as const,
    className: 'hidden sm:block',
  },
  {
    icon: <span>CRLF</span>,
    text: 'Select End of Line Sequence',
    position: 'center' as const,
    className: 'hidden sm:block',
  },
  {
    icon: <span>&#123; &#125; TypeScript JSX</span>,
    text: 'Select Language Mode',
    position: 'center' as const,
    className: 'hidden sm:block',
  },
  {
    icon: (
      <div className="flex">
        <RadioTower />
        <span className="ml-1">Go Live</span>
      </div>
    ),
    text: 'Click to run live server',
    position: 'right' as const,
  },
  {
    icon: <Bell />,
    text: 'No Notifications',
    position: 'right' as const,
  },
];

export default function BottomBar() {
  return (
    <div className="flex justify-between border-t-2 border-dark_border text-gray-500 text-sm select-none">
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
        <Tooltip icon={<CloudUpload />} text="portfolio (Git) - Publish Branch" position="center" className="hidden sm:block" />
        <Tooltip
          icon={
            <div className="flex items-center text-xs">
              <Info />
              <span className="mx-1">0</span>
              <Warning />
              <span className="ml-1">0</span>
            </div>
          }
          text="No Problems"
          position="center"
          className="hidden sm:block"
        />
      </div>
      <div className="flex items-center cursor-pointer mr-2 gap-2">
        {rightItems.map((item, index) => (
          <Tooltip key={index} icon={item.icon} text={item.text} position={item.position} className={item.className} />
        ))}
      </div>
    </div>
  );
}

function Tooltip({ icon, text, position, className }: { icon: JSX.Element; text: string; position: 'left' | 'right' | 'center'; className?: string }) {
  const [toolTipActive, setToolTipActive] = useState<boolean>(false);

  const handleMouseIn: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setToolTipActive(true);
  }, []);

  const handleMouseOut: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setToolTipActive(false);
  }, []);

  let classes = 'top-0 -translate-y-[calc(100%+5px)] ';

  switch (position) {
    case 'right':
      classes += 'right-0';
      break;
    case 'left':
      classes += 'left-0';
      break;
    case 'center':
      classes += 'left-1/2 -translate-x-1/2';
      break;
  }

  return (
    <div className="relative">
      <div onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} className={clsx('p-1 px-2 relative hover:bg-blue-800', className)}>
        {icon}
      </div>
      <ToolTip active={toolTipActive} className={classes} text={text} />
    </div>
  );
}
