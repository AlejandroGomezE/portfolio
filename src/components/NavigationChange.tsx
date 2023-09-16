'use client';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useDispatch, sectionSlice } from '@/lib/redux';

export default function NavigationChange() {
  const segments = useSelectedLayoutSegment();
  const intialLoad = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (intialLoad.current) {
      intialLoad.current = false;
      return;
    }
    dispatch(sectionSlice.actions.resetVisible());
  }, [dispatch, segments]);
  return <></>;
}
