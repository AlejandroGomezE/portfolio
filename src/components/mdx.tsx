import clsx from 'clsx';
import Link from 'next/link';

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
