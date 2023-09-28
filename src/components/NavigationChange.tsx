'use client';
import { expandableSlice, sectionSlice, useDispatch } from '@/lib/redux';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function NavigationChange() {
  const pathname = usePathname();
  const intialLoad = useRef(true);
  const dispatch = useDispatch();

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
