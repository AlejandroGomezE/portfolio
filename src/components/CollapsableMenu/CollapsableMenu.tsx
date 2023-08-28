'use client';
import clsx from 'clsx';
import { useSelector, selectMenu, selectExpanded } from '@/lib/redux';
import Explorer from './Explorer';

export default function CollapsableMenu() {
  const expanded = useSelector(selectExpanded);
  const currentMenu = useSelector(selectMenu);

  return <div className={clsx(!expanded && 'hidden', 'flex flex-col text-gray-500  border-r-2 border-r-dark_border w-[260px]')}>{currentMenu === 'explorer' && <Explorer />}</div>;
}
