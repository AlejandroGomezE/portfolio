import clsx from 'clsx';

import { Heading } from '@/components/Heading';

export function wrapper({ children }: { children: React.ReactNode }) {
  return <div className="overflow-y-auto text-gray-500 w-full relative overflow-hidden">{children}</div>;
}

export function h1(props: { children: React.ReactNode }) {
  return <Heading level={1} {...props} className="max-w-5xl text-5xl sm:text-6xl" />;
}

export function h2(props: { children: React.ReactNode }) {
  return <Heading level={2} {...props} className="max-w-3xl text-3xl sm:text-4xl" />;
}

export function p({ children, className }: { children: React.ReactNode; className: string }) {
  return <p className={clsx('mt-6 lg:text-lg text-gray-500', className)}>{children}</p>;
}

export function ol({ children }: { children: React.ReactNode }) {
  return <ol className="pl-6 my-6 text-gray-500 list-decimal">{children}</ol>;
}
