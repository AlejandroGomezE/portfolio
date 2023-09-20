'use client';
import { SubMenu, explorerSlice, useDispatch } from '@/lib/redux';
import { useEffect } from 'react';

export default function TogglePortfolio() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(explorerSlice.actions.toggleMenu({ subMenu: SubMenu.PORTFOLIO }));
  }, [dispatch]);
  return <></>;
}
