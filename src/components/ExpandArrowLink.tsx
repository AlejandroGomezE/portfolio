import clsx from 'clsx';
import Link from 'next/link';

export default function ExpandArrowLink({ href, className }: { href: string; className: string }) {
  return (
    <div className="flex w-max my-work-button-container cursor-pointer mt-8">
      <Link href={href} className={clsx('my-work-button text-2xl font-semibold relative', className)}>
        Learn more
      </Link>
      <span className="flex items-center h-6 mt-auto transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className=" overflow-hidden" width={18} height={18} fill="none" viewBox="0 0 18 24">
          <path stroke="currentColor" className="translate-x-full my-work-button-arrow transition-all duration-200" d="M4 11.25a.75.75 0 000 1.5v-1.5zm0 1.5h16v-1.5H4v1.5z" strokeWidth="1.5"></path>
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 6l6 6-6 6"></path>
        </svg>
      </span>
    </div>
  );
}
