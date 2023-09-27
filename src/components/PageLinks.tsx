'use client';
import clsx from 'clsx';

import { Border, Container, ExpandArrowLink, FadeIn, FadeInStagger, GlowCard } from '@/components';
import { formatDate } from '@/lib/formatDate';

interface Page {
  href: string;
  date: string;
  title: string;
  description: string;
}

function PageLink({ page }: { page: Page }) {
  return (
    <GlowCard className="hover:shadow-blue-100/90" glowClassName="from-[#3DB9C9] to-[#3DB9C9]">
      <article key={page.href}>
        <Border position="left" className="flex flex-col items-start pl-8">
          <h3 className="text-base font-semibold text-blue-100">{page.title}</h3>
          <time dateTime={page.date} className="order-first text-sm text-white">
            {formatDate(page.date)}
          </time>
          <ExpandArrowLink href={page.href} className="before:bg-blue-100" />
        </Border>
      </article>
    </GlowCard>
  );
}

export default function PageLinks({ pages, className }: { pages: Array<Page>; className?: string }) {
  return (
    <Container className="mb-48">
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
