'use client';

import { useDispatch } from '@/lib/redux';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

function AnchorIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3" />
    </svg>
  );
}

function Anchor({ id, inView, children }: { id: string; inView: boolean; children: React.ReactNode }) {
  return (
    <Link href={`#${id}`} className="group text-inherit no-underline hover:text-inherit">
      {inView && (
        <div className="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
          <div className="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500">
            <AnchorIcon className="h-5 w-5 stroke-zinc-500 transition" />
          </div>
        </div>
      )}
      {children}
    </Link>
  );
}

export function Heading({ level, children, id }: { level: 1 | 2 | 3; children: React.ReactNode; id: string }) {
  let Component = `h${level}` as 'h1' | 'h2' | 'h3';
  let ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref);
  let dispatch = useDispatch();

  useEffect(() => {
    console.log(ref.current, isInView);
  }, [isInView]);

  return <Component ref={ref}>{children}</Component>;
}
