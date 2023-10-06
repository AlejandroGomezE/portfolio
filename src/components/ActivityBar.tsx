'use client';
import { CollapsableMenu } from '@/components';
import { Accounts, Debug, Explorer, Extensions, Gear, Search, SourceControl } from '@/icons';
import { App, MDXEntry } from '@/lib/mdx';
import { Menu, Section, SubMenu, expandableSlice, explorerSlice, sectionSlice, selectExpanded, selectInitialLoad, selectMenu, useDispatch, useSelector } from '@/lib/redux';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import ToolTip from './ToolTip';

const barItems = [
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

export default function ActivityBar({ sections, allApps }: { sections: Record<string, Array<Section>>; allApps: MDXEntry<App>[] }) {
  const dispatch = useDispatch();
  const activeMenu = useSelector(selectMenu);
  const expanded = useSelector(selectExpanded);
  const initialLoad = useSelector(selectInitialLoad);
  const pathname = usePathname();

  useEffect(() => {
    dispatch(sectionSlice.actions.setSections({ sections: sections[pathname] }));
  }, [pathname, dispatch, sections]);

  return (
    <div className="relative md:flex z-30">
      <div className="max-w-fit text-gray-500 flex flex-col justify-between h-full">
        <div className="cursor-pointer">
          <Tooltip
            icon={<Explorer />}
            text="Explorer (Ctrl+Shift+E)"
            active={expanded && activeMenu === Menu.EXPLORER}
            handleMouseClick={() => {
              dispatch(expandableSlice.actions.toggleMenu({ menu: Menu.EXPLORER }));

              if (!initialLoad || window.innerWidth >= 768) return;

              dispatch(explorerSlice.actions.setInitialLoad());

              setTimeout(() => {
                dispatch(explorerSlice.actions.toggleMenu({ subMenu: SubMenu.PORTFOLIO }));
              }, 200);
            }}
          />
          {barItems.map((item, index) => (
            <Tooltip
              key={index}
              icon={item.icon}
              text={item.hoverText}
              active={expanded && activeMenu === item.menu}
              handleMouseClick={() => {
                dispatch(expandableSlice.actions.toggleMenu({ menu: item.menu }));
              }}
            />
          ))}
        </div>
        <div className="cursor-pointer">
          <Tooltip icon={<Accounts width="32" height="32" />} text="Accounts" active={false} handleMouseClick={() => {}} />
          <Tooltip icon={<Gear />} text="Manage" active={false} handleMouseClick={() => {}} />
        </div>
      </div>
      <CollapsableMenu allApps={allApps} />
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

  const handleFocus: React.FocusEventHandler = useCallback(() => {
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
