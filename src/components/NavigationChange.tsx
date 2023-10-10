'use client';
import { App, MDXEntry } from '@/lib/mdx';
import { expandableSlice, sectionSlice, tabsSlice, useDispatch } from '@/lib/redux';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function NavigationChange({ allApps }: { allApps: MDXEntry<App>[] }) {
  const pathname = usePathname();
  const intialLoad = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    let current = allApps.find((app) => app.href === pathname);
    dispatch(
      tabsSlice.actions.setCurrentTab({
        current: current
          ? {
              href: current.href,
              title: current.title,
              type: current.framework,
            }
          : {
              href: '/',
              title: 'About Me',
              type: 'about',
            },
      })
    );
  }, [dispatch, allApps, pathname]);

  useEffect(() => {
    if (intialLoad.current) {
      intialLoad.current = false;
      return;
    }

    if (window.innerWidth < 768) {
      dispatch(expandableSlice.actions.closeIfOpen({}));
    }
    dispatch(sectionSlice.actions.resetVisible());
  }, [dispatch, pathname]);

  return <></>;
}
