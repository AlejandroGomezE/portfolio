import clsx from 'clsx';

export default function Container({ className, children }: { className?: string; children: React.ReactNode;  }) {
  return <div className={clsx('mx-auto max-w-6xl px-4 sm:px-8 lg:px-12 py-6 text-white', className)}>{children}</div>;
}
