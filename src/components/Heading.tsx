import clsx from 'clsx';

export function Heading({ level, className, children }: { level: 1 | 2 | 3; className: string; children: React.ReactNode }) {
  let Component = `h${level}` as 'h1' | 'h2' | 'h3';
  return <Component className={clsx('font-display font-medium tracking-tight text-white [text-wrap:balance] mt-16', className)}>{children}</Component>;
}
