'use client';
import { ChromeClose, FavIcon, NextConfig, ReactIcon, Svelte } from '@/icons';
import { TabData, selectCurrentTab, selectTabs, tabsSlice, useDispatch, useSelector } from '@/lib/redux';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

const fileType = {
  ['react' as string]: <ReactIcon />,
  ['about' as string]: <FavIcon />,
  ['next' as string]: <NextConfig />,
  ['svelte' as string]: <Svelte />,
};

export default function TabsContainer() {
  const tabs = useSelector(selectTabs);
  const currentTab = useSelector(selectCurrentTab);
  const router = useRouter();

  const navigateTo = useCallback(() => {
    router.push(currentTab);
  }, [router, currentTab]);

  useEffect(() => {
    if (!tabs.find((tab) => tab.href === window.location.pathname)) {
      navigateTo();
    }
  }, [tabs, navigateTo]);

  return (
    <div className="border-b-2 bg-dark_bg border-dark_border sticky top-0 z-20 flex text-gray-500 overflow-y-hidden slim flex-none">
      {tabs.map((tab) => (
        <Tab key={tab.href} {...tab} active={tab.href === currentTab} />
      ))}
      <style jsx global>
        {`
          .slim::-webkit-scrollbar {
            height: 8px;
          }
        `}
      </style>
    </div>
  );
}

const Tab = ({ href, title, type, active }: TabData & { active: boolean }) => {
  const dispatch = useDispatch();

  const handleCloseTab: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(tabsSlice.actions.closeTab({ href }));
  };

  const handleCloseWithWheel: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.button === 1) {
      dispatch(tabsSlice.actions.closeTab({ href }));
      return;
    }
  };

  return (
    <Link href={href} onMouseDown={handleCloseWithWheel} className="w-max relative p-2 border-r border-dark_border group">
      {active && <span className="after:bg-blue-300 after:absolute after:bottom-0 after:translate-y-[2px] after:left-0 after:right-0 after:h-[4px]" />}
      <div className="flex items-center gap-2">
        {fileType[type]}
        <p className={clsx('whitespace-nowrap', active && 'text-blue-100')}>{title}</p>
        <div className={clsx('hover:bg-gray-500/20 rounded-md p-1 opacity-0 group-hover:opacity-100', active && 'opacity-100')} onClick={handleCloseTab}>
          <ChromeClose />
        </div>
      </div>
    </Link>
  );
};
