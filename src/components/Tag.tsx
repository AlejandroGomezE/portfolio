import clsx from 'clsx';

const variantStyles = {
  small: '',
  medium: 'rounded-lg px-1.5 ring-1 ring-inset',
};

const colorStyles = {
  emerald: {
    small: 'text-emerald-500',
    medium: 'ring-emerald-300',
  },
  sky: {
    small: 'text-sky-500',
    medium: 'ring-sky-300 bg-sky-400/10 text-sky-500',
  },
  amber: {
    small: 'text-amber-500',
    medium: 'ring-amber-300 bg-amber-400/10 text-amber-500',
  },
  rose: {
    small: 'text-red-500',
    medium: 'ring-rose-200 bg-rose-50 text-red-500',
  },
  zinc: {
    small: 'text-zinc-400',
    medium: 'ring-zinc-200 bg-zinc-50 text-zinc-500',
  },
};

const valueColorMap = {
  GET: 'emerald',
  POST: 'sky',
  PUT: 'amber',
  DELETE: 'rose',
} as Record<string, keyof typeof colorStyles>;

export function Tag({
  children,
  variant = 'medium',
  color = valueColorMap[children] ?? 'emerald',
}: {
  children: keyof typeof valueColorMap & (string | {});
  variant?: keyof typeof variantStyles;
  color?: keyof typeof colorStyles;
}) {
  return <span className={clsx('font-mono text-[0.625rem] font-semibold leading-6', variantStyles[variant], colorStyles[color][variant])}>{children}</span>;
}
