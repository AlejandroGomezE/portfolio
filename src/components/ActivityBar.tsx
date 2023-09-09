'use client';
import clsx from 'clsx';
import { useState, useCallback } from 'react';
import { Accounts, Debug, Explorer, Extensions, Gear, Search, SourceControl } from '@/icons';
import { useDispatch, useSelector, selectExpanded, selectMenu, expandableSlice, Menu } from '@/lib/redux';
import { CollapsableMenu } from '@/components';
import ToolTip from './ToolTip';

const barItems = [
  {
    hoverText: 'Explorer (Ctrl+Shift+E)',
    icon: <Explorer />,
    menu: Menu.EXPLORER,
  },
  {
    hoverText: 'Search (Ctrl + Shift + F)',
    icon: <Search />,
    menu: Menu.SEARCH,
  },
  {
    hoverText: 'Source Control (Ctrl + Shift + G)',
    icon: <SourceControl height={32} width={32} />,
    menu: Menu.SOURCE_CONTROL,
  },
  {
    hoverText: 'Run and Debug (Ctrl + Shift + D)',
    icon: <Debug />,
    menu: Menu.DEBUG,
  },
  {
    hoverText: 'Extensions (Ctrl + Shift + X)',
    icon: <Extensions />,
    menu: Menu.EXTENSIONS,
  },
];

export default function ActivityBar() {
  const dispatch = useDispatch();
  const activeMenu = useSelector(selectMenu);
  const expanded = useSelector(selectExpanded);

  return (
    <div className="relative md:flex">
      <div className="max-w-fit text-gray-500 flex flex-col justify-between h-full">
        <div className="cursor-pointer">
          {barItems.map((item, index) => (
            <Tooltip
              key={index}
              icon={item.icon}
              text={item.hoverText}
              active={expanded && activeMenu === item.menu}
              handleMouseClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                dispatch(expandableSlice.actions.toggleMenu({ menu: item.menu }));
              }}
            />
          ))}
        </div>
        <div className="cursor-pointer">
          <Tooltip icon={<Accounts />} text="Accounts" active={false} handleMouseClick={(e: React.MouseEvent<HTMLButtonElement>) => {}} />
          <Tooltip icon={<Gear />} text="Manage" active={false} handleMouseClick={(e: React.MouseEvent<HTMLButtonElement>) => {}} />
        </div>
      </div>
      <CollapsableMenu />
    </div>
  );
}

function Tooltip({ icon, text, active, handleMouseClick }: TooltipProps) {
  const [toolTipActive, setToolTipActive] = useState<boolean>(false);

  const handleMouseIn: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setToolTipActive(true);
  }, []);

  const handleMouseOut: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    setToolTipActive(false);
  }, []);

  const handleFocus: React.FocusEventHandler = useCallback((e: React.FocusEvent<HTMLButtonElement>) => {
    setToolTipActive(false);
  }, []);

  return (
    <div className="relative">
      <button
        onFocus={handleFocus}
        onClick={handleMouseClick}
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}
        className={clsx(active ? 'border-gray-500' : 'opacity-50 hover:opacity-90', 'p-3 relative border-l-2 border-dark_bg')}
      >
        {icon}
      </button>
      <ToolTip className="top-1/2 -translate-y-1/2 right-0 translate-x-full" active={toolTipActive} text={text} />
    </div>
  );
}

/* Types */
interface TooltipProps {
  icon: JSX.Element;
  text: string;
  active: boolean;
  handleMouseClick: React.MouseEventHandler;
}
