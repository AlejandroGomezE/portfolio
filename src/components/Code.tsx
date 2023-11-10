'use client';

import clsx from 'clsx';
import { Children, useEffect, useState } from 'react';
import Button from './Button';

function ClipboardIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path strokeWidth="0" d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z" />
      <path
        fill="none"
        strokeLinejoin="round"
        d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
      />
    </svg>
  );
}

function CopyButton({ code }: { code: string }) {
  let [copyCount, setCopyCount] = useState(0);
  let copied = copyCount > 0;

  useEffect(() => {
    if (copyCount > 0) {
      let timeout = setTimeout(() => setCopyCount(0), 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [copyCount]);

  return (
    <button
      type="button"
      className={clsx(
        'group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100',
        copied ? 'bg-gray-400/10 ring-1 ring-inset ring-gray-400/20' : 'bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5'
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(code).then(() => {
          setCopyCount((count) => count + 1);
        });
      }}
    >
      <span aria-hidden={copied} className={clsx('pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300', copied && '-translate-y-1.5 opacity-0')}>
        <ClipboardIcon className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400" />
        Copy
      </span>
      <span
        aria-hidden={!copied}
        className={clsx('pointer-events-none absolute inset-0 flex items-center justify-center text-blue-100 transition duration-300', !copied && 'translate-y-1.5 opacity-0')}
      >
        Copied!
      </span>
    </button>
  );
}

function CodePanel({ children }: { children: React.ReactNode; code?: string }) {
  let child = Children.only(children);
  // @ts-ignore
  let code = child?.props?.code ?? '';
  return (
    <div className="group dark:bg-white/2.5">
      <div className="relative">
        <pre className="overflow-x-auto p-3 text-sm text-white">{children}</pre>
        <CopyButton code={code} />
      </div>
    </div>
  );
}

export function CodeGroup({ children, slug, ...props }: React.ComponentPropsWithoutRef<typeof CodePanel> & { slug: string }) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 dark:ring-1 dark:ring-white/10">
      {slug && (
        <div className="flex flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent p-4">
          <p className="self-center">Solution</p>
          <Button href={'https://leetcode.com/problems/' + slug} target="_blank" variant="secondary" arrow="right" className="ml-auto rounded-md">
            Try it yourself
          </Button>
        </div>
      )}
      <CodePanel {...props}>{children}</CodePanel>
    </div>
  );
}

export function Code({ children, ...props }: React.ComponentPropsWithoutRef<'code'>) {
  // @ts-ignore
  return <code {...props} dangerouslySetInnerHTML={{ __html: children }} />;
}
