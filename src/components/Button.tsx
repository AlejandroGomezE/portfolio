import clsx from 'clsx';
import Link from 'next/link';

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9" />
    </svg>
  );
}

const variantStyles = {
  primary: 'rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700',
  secondary: 'rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200',
  filled: 'rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700',
  outline: 'rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900',
  text: 'text-emerald-500 hover:text-emerald-600',
};

export type ButtonProps = {
  variant?: keyof typeof variantStyles;
  arrow?: 'left' | 'right';
} & (React.ComponentPropsWithoutRef<typeof Link> | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined }));

export default function Button({ variant = 'primary', className, children, arrow, ...props }: ButtonProps) {
  className = clsx('inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition button-hover-shadow', variantStyles[variant], className);

  let arrowIcon = <ArrowIcon className={clsx('mt-0.5 h-5 w-5', variant === 'text' && 'relative top-px', arrow === 'left' && '-ml-1 rotate-180', arrow === 'right' && '-mr-1')} />;

  let inner = (
    <>
      {arrow === 'left' && arrowIcon}
      {children}
      {arrow === 'right' && arrowIcon}
    </>
  );

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    );
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  );
}
