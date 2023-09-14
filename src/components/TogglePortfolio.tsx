'use client';
import { useEffect } from 'react';
import { SubMenu, useDispatch, explorerSlice } from '@/lib/redux';

export default function TogglePortfolio() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(explorerSlice.actions.toggleMenu({ subMenu: SubMenu.PORTFOLIO }));
  }, [dispatch]);
  return <></>;
}
