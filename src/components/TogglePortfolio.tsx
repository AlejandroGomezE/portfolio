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
    const t = setTimeout(() => {
      dispatch(explorerSlice.actions.toggleMenu({ subMenu: SubMenu.PORTFOLIO }));
    }, 200);

    return () => {
      clearTimeout(t);
    };
  }, [dispatch]);
  return <></>;
}
