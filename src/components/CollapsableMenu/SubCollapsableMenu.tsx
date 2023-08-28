'use client';
import clsx from 'clsx';
import { useState, useCallback, useRef } from 'react';
import { ChevronDown, ChevronRight } from '@/icons';

export default function SubCollapsableMenu({ subMenuTitle, subMenuButtons, children }: SubCollapsableMenuProps) {
  const [open, setOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>();

  const handleToggleMenu: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!contentRef.current) return;

    if (contentRef.current?.style.maxHeight !== '0px') {
      contentRef.current.style.maxHeight = '0px';
    } else {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
    }

    setOpen((open) => !open);
  }, []);

  return (
    <div className="bg-dark_bg">
      <button onClick={handleToggleMenu} className="flex w-full focus:ring-1 active:ring-0 ring-gray-500 ring-opacity-10 py-1 justify-between">
        <div className="flex">
          {open ? <ChevronDown /> : <ChevronRight />}
          <span className="text-xs font-semibold text-white ml-1">{subMenuTitle}</span>
        </div>
        <div className="flex">{subMenuButtons}</div>
      </button>
      <div ref={(ref) => (contentRef.current = ref)} className={clsx('transition-all duration-200  ease-in-out overflow-hidden')} style={{ maxHeight: 0 }}>
        {children}
      </div>
    </div>
  );
}

/* Types */
interface SubCollapsableMenuProps {
  subMenuTitle: string;
  subMenuButtons: React.ReactNode;
  children: React.ReactNode;
}
