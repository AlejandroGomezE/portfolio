'use client';
import clsx from 'clsx';
import { useSelector, selectMenu, selectExpanded } from '@/lib/redux';
import Explorer from './Explorer';

export default function CollapsableMenu() {
  const expanded = useSelector(selectExpanded);
  const currentMenu = useSelector(selectMenu);

  return (
    <div className={clsx(!expanded && 'hidden', 'z-10 bg-dark_bg absolute md:static left-full top-0 bottom-0 flex flex-col text-gray-500 border-r-2 border-r-dark_border min-w-[260px] max-w-[260px]')}>
      {currentMenu === 'explorer' && <Explorer />}
    </div>
  );
}
