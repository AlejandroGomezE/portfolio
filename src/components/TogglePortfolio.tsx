'use client';
import { Menu, SubMenu, expandableSlice, explorerSlice, useDispatch } from '@/lib/redux';
import { useEffect } from 'react';

export default function TogglePortfolio() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.innerWidth < 768) {
      return;
    }
    dispatch(expandableSlice.actions.toggleMenu({ menu: Menu.EXPLORER }));
    const cleanup = window.requestAnimationFrame(() => {
      dispatch(explorerSlice.actions.toggleMenu({ subMenu: SubMenu.PORTFOLIO }));
    });
    return () => {
      window.cancelAnimationFrame(cleanup);
    };
  }, [dispatch]);
  return <></>;
}
