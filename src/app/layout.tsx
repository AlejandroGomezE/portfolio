import glob from 'fast-glob';

import { ActivityBar, BottomBar, TopBar } from '@/components';
import NavigationChange from '@/components/NavigationChange';
import TogglePortfolio from '@/components/TogglePortfolio';
import { Providers } from '@/lib/providers';
import { type Section } from '@/lib/redux/slices/sectionSlice/sectionSlice';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alejandro Gomez Portfolio',
  description: 'Alejandro Gomez Porfolio',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const mdxPages = await glob('**/*.mdx', { cwd: 'src/app' });
  const mdxSectionEntries = (await Promise.all(mdxPages.map(async (filename) => ['/' + filename.replace(/(^|\/)page\.mdx$/, ''), (await import(`./${filename}`)).sections]))) as Array<
    [string, Section[]]
  >;
  const tsxPages = await glob('**/page.tsx', { cwd: 'src/app' });
  const tsxSectionEntries = (await Promise.all(tsxPages.map(async (filename) => ['/' + filename.replace(/(^|\/)page\.tsx$/, ''), (await import(`./${filename}`)).sections]))) as Array<
    [string, Section[]]
  >;

  const allSections = Object.fromEntries([...mdxSectionEntries, ...tsxSectionEntries]);

  return (
    <Providers>
      <html lang="en">
        <body className={`bg-dark_bg min-h-screen max-h-screen flex flex-col`}>
          <TopBar />
          <main className="flex-1 flex overflow-hidden">
            <ActivityBar sections={allSections} />
            {children}
          </main>
          <BottomBar />
          <TogglePortfolio />
          <NavigationChange />
        </body>
      </html>
    </Providers>
  );
}
