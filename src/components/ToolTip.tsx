import clsx from 'clsx';

export default function ToolTip({ active, className, text }: TooltipProps) {
  return (
    <span
      className={clsx(
        active ? 'block opacity-100' : 'opacity-0 hidden',
        className,
        'absolute bg-dark_bg border border-dark_border py-1 px-2 whitespace-nowrap text-sm transition-opacity ease-in-out duration-300 select-none z-20'
      )}
    >
      {text}
    </span>
  );
}

interface TooltipProps {
  active: boolean;
  className: string;
  text: string;
}
