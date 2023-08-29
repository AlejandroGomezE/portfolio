'use client';
import clsx from 'clsx';
import { useState, useCallback, useRef } from 'react';
import { ChevronDown, ChevronRight } from '@/icons';

export default function SubCollapsableMenu({ subMenuTitle, subMenuButtons, children, id }: SubCollapsableMenuProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>();
  const contentRef = useRef<HTMLDivElement | null>();

  const handleFocusIn: React.FocusEventHandler = useCallback((e: React.FocusEvent<HTMLButtonElement | HTMLDivElement>) => {
    setFocused(true);
  }, []);

  const handleFocusBlur: React.FocusEventHandler = useCallback((e: React.FocusEvent<HTMLButtonElement | HTMLDivElement>) => {
    setFocused(false);
  }, []);

  const handleMouseIn: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setHovered(true);
  }, []);

  const handleMouseOut: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setHovered(false);
  }, []);

  const handleToggleMenu: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!contentRef.current) return;

    // Get Exlporer Menu height
    const explorerMenu = document.getElementById('explorerMenu');
    if (!explorerMenu) return;

    if (contentRef.current?.style.maxHeight !== '0px') {
      contentRef.current.style.maxHeight = '0px';
      contentRef.current.style.overflowY = 'hidden';
    } else {
      const contentNodes = explorerMenu.children;
      let contentHeight = 0;

      for (let i = 0; i < contentNodes.length; i++) {
        let a = contentNodes.item(i) as HTMLDivElement;
        // Add scrollHeight + top Border Width
        contentHeight += a.scrollHeight + Number(getComputedStyle(a, null).borderTop.split('px')[0]);
      }

      const availableHeight = explorerMenu.scrollHeight - contentHeight;

      if (contentRef.current.id === 'editors_submenu') {
        contentRef.current.style.maxHeight = '100px';
      } else if (contentRef.current.id === 'portfolio_submenu') {
        contentRef.current.style.height = availableHeight + 'px';
        contentRef.current.style.maxHeight = availableHeight + 'px';
      }
    }
    setOpen((open) => !open);
  }, []);

  const handleTransitionEnd: React.TransitionEventHandler = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (!contentRef.current) return;

      if (open) {
        contentRef.current.style.overflowY = 'auto';
      }
    },
    [open]
  );

  return (
    <div onDragEnd={(e) => console.log(e)} ref={(ref) => (containerRef.current = ref)} onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} className="bg-dark_bg">
      <div className="relative">
        <button
          onFocus={handleFocusIn}
          onBlur={handleFocusBlur}
          onClick={handleToggleMenu}
          className="flex w-full focus:ring-[.5px] active:ring-0 ring-gray-500 ring-opacity-20 py-1 justify-between"
        >
          <div className="flex">
            {open ? <ChevronDown /> : <ChevronRight />}
            <span className="text-xs font-extrabold text-gray-500 ml-1">{subMenuTitle}</span>
          </div>
        </button>
        {open && (hovered || focused) && (
          <div className="flex absolute right-0 top-0 bottom-0 mx-1 my-[1px]">
            {subMenuButtons.map((button, index) => (
              <button key={index} className="hover:bg-gray-300 p-[2px] rounded-md">
                {button.button}
              </button>
            ))}
          </div>
        )}
      </div>
      <div tabIndex={-1} onFocus={handleFocusIn} onBlur={handleFocusBlur} className="wrapper focus:ring-[.5px] active:ring-0 ring-gray-500 ring-opacity-20 select-none">
        <div id={id} ref={(ref) => (contentRef.current = ref)} onTransitionEnd={handleTransitionEnd} className={clsx('content transition-all')} style={{ maxHeight: 0, overflowY: 'hidden' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* Types */
interface SubCollapsableMenuProps {
  subMenuTitle: string;
  subMenuButtons: SubCollapsableMenuButtonProps[];
  children: React.ReactNode;
  id: string;
}

interface SubCollapsableMenuButtonProps {
  id: number;
  button: React.ReactNode;
}
