import clsx from 'clsx';
import Link from 'next/link';

import { Border, Container, FadeIn, FadeInStagger, GlowCard } from '@/components';
import { formatDate } from '@/lib/formatDate';

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 3 18 .5v2H0v1h18v2L24 3Z" />
    </svg>
  );
}

interface Page {
  href: string;
  date: string;
  title: string;
  description: string;
}

function PageLink({ page }: { page: Page }) {
  return (
    <GlowCard glowClassName="from-[#3DB9C9] to-[#3DB9C9]">
      <article key={page.href}>
        <Border position="left" className="flex flex-col items-start pl-8">
          <h3 className="text-base font-semibold text-blue-100">{page.title}</h3>
          <time dateTime={page.date} className="order-first text-sm text-white">
            {formatDate(page.date)}
          </time>
          <Link href={page.href} className="mt-6 flex gap-x-3 text-base font-semibold text-gray-500 transition hover:text-white" aria-label={`Read more: ${page.title}`}>
            Read more
            <ArrowIcon className="w-6 flex-none fill-current" />
            <span className="absolute inset-0" />
          </Link>
        </Border>
      </article>
    </GlowCard>
  );
}

export default function PageLinks({ pages, className }: { pages: Array<Page>; className?: string }) {
  return (
    <Container className="mb-32">
      <Border className="mb-6" />
      <h2 className="max-w-3xl text-3xl sm:text-4xl mb-4">More Applications</h2>
      <div className={clsx('relative', className)}>
        <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2" once>
          {pages.map((page) => (
            <FadeIn key={page.href}>
              <PageLink page={page} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </Container>
  );
}
