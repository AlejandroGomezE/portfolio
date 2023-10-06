'use client';
import { ChromeClose, Ellipsis, FavIcon, GitCompare, NextConfig, ReactIcon, Svelte, UntoggledSidebar } from '@/icons';
import { TabData, selectCurrentTab, selectTabs, tabsSlice, useDispatch, useSelector } from '@/lib/redux';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { mergeRefs } from 'react-merge-refs';

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

  if (!tabs.length) return null;
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="border-b-2 bg-dark_bg border-dark_border sticky top-0 z-20 flex text-gray-500 overflow-y-hidden slim flex-none">
        {tabs.map((tab) => (
          <Tab key={tab.href} {...tab} active={tab.href === currentTab} />
        ))}
        <DropEnd />
        <div className="text-gray-500 flex items-center flex-none sticky right-0 bottom-0 top-0 bg-dark_bg px-4">
          <button className="hover:bg-gray-300 p-1 rounded-md">
            <GitCompare />
          </button>
          <button className="hover:bg-gray-300 p-1 rounded-md">
            <UntoggledSidebar />
          </button>
          <button className="hover:bg-gray-300 p-1 rounded-md">
            <Ellipsis />
          </button>
        </div>
        <style jsx global>
          {`
            .slim::-webkit-scrollbar {
              height: 8px;
            }
          `}
        </style>
      </div>
    </DndProvider>
  );
}

const DropEnd = () => {
  const dispatch = useDispatch();

  const [collectedDrop, drop] = useDrop(() => ({
    accept: 'tab',
    drop(item: { href: string }) {
      dispatch(tabsSlice.actions.moveToEnd({ href: item.href }));
    },
    collect: (monitor) => ({
      hover: monitor.isOver(),
      item: monitor.getItem() as { href: string },
    }),
  }));

  return <div ref={drop} className={clsx('flex-1', collectedDrop.item && collectedDrop.hover && 'bg-gray-200')} />;
};

const Tab = ({ href, title, type, active }: TabData & { active: boolean }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [collectedDrop, drop] = useDrop(() => ({
    accept: 'tab',
    drop(item: { href: string }) {
      if (item.href === href) return;
      dispatch(tabsSlice.actions.moveTab({ from: item.href, to: href }));
    },
    collect: (monitor) => ({
      hover: monitor.isOver(),
      item: monitor.getItem() as { href: string },
    }),
  }));

  const [collectedDrag, dragRef]: any = useDrag(() => ({
    type: 'tab',
    item: { href },
    collect: (monitor) => ({
      dragging: monitor.isDragging(),
    }),
  }));

  const handleClickNavigation: React.MouseEventHandler<HTMLDivElement> = (e) => {
    router.push(href);
  };

  const handleCloseTab: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(tabsSlice.actions.closeTab({ href }));
  };

  const handleCloseWithWheel: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.button === 1) {
      dispatch(tabsSlice.actions.closeTab({ href }));
      return;
    }
  };

  const handleStartDrag: React.DragEventHandler<HTMLDivElement> = (e) => {
    router.push(href);
  };

  return (
    <div
      ref={mergeRefs([dragRef, drop])}
      onDragStart={handleStartDrag}
      onClick={handleClickNavigation}
      onMouseDown={handleCloseWithWheel}
      className={clsx('w-max relative p-2 border-r border-dark_border group cursor-pointer', collectedDrop.item && collectedDrop.item.href !== href && collectedDrop.hover && 'bg-gray-200')}
    >
      {active && <span className="after:bg-blue-300 after:absolute after:bottom-0 after:translate-y-[2px] after:left-0 after:right-0 after:h-[4px]" />}
      <div className="flex items-center gap-2">
        {fileType[type]}
        <p className={clsx('whitespace-nowrap select-none', active && 'text-blue-100')}>{title}</p>
        <div className={clsx('hover:bg-gray-500/20 rounded-md p-1 opacity-0 group-hover:opacity-100', active && 'opacity-100')} onClick={handleCloseTab}>
          <ChromeClose />
        </div>
      </div>
    </div>
  );
};
