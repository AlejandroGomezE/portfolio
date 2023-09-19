import Link from 'next/link';
import clsx from 'clsx';

import { Heading } from '@/components/Heading';

export const a = Link;
export { Button } from '@/components/Button';

export function wrapper({ children }: { children: React.ReactNode }) {
  return <div className="overflow-y-auto text-gray-500 w-full">{children}</div>;
}

export function H1(props: { children: React.ReactNode; id: string }) {
  return <Heading level={1} {...props} />;
}

export function p({ children, className }: { children: React.ReactNode; className: string }) {
  return <p className={clsx('mt-6 lg:text-lg text-gray-500', className)}>{children}</p>;
}

export function Section({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

function InfoIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="8" strokeWidth="0" />
      <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 7.75h1.5v3.5" />
      <circle cx="8" cy="4" r=".5" fill="none" />
    </svg>
  );
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 leading-6 text-emerald-900">
      <InfoIcon className="mt-1 h-4 w-4 flex-none fill-emerald-500 stroke-white" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">{children}</div>
    </div>
  );
}

export function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">{children}</div>;
}

export function Col({ children, sticky = false }: { children: React.ReactNode; sticky?: boolean }) {
  return <div className={clsx('[&>:first-child]:mt-0 [&>:last-child]:mb-0', sticky && 'xl:sticky xl:top-24')}>{children}</div>;
}

export function Properties({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6">
      <ul role="list" className="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0">
        {children}
      </ul>
    </div>
  );
}
