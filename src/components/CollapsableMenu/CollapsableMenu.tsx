'use client';
import { App, MDXEntry } from '@/lib/mdx';
import { selectExpanded, selectMenu, useSelector } from '@/lib/redux';
import clsx from 'clsx';
import Explorer from './Explorer';

export default function CollapsableMenu({ allApps }: { allApps: MDXEntry<App>[] }) {
  const expanded = useSelector(selectExpanded);
  const currentMenu = useSelector(selectMenu);

  return (
    <div className={clsx(!expanded && 'hidden', 'z-10 bg-dark_bg absolute md:static left-full top-0 bottom-0 flex flex-col text-gray-500 border-r-2 border-r-dark_border min-w-[300px] max-w-[300px]')}>
      {currentMenu === 'explorer' && <Explorer allApps={allApps} />}
    </div>
  );
}
