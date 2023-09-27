'use client';
import { sectionSlice, useDispatch } from '@/lib/redux';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function NavigationChange() {
  const segments = useSelectedLayoutSegment();
  const intialLoad = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (intialLoad.current) {
      intialLoad.current = false;
      return;
    }
    console.log('ost')
    dispatch(sectionSlice.actions.resetVisible());
  }, [dispatch, segments]);
  return <></>;
}
