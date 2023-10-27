import { ActivityBar, BottomBar, TabsContainer, TopBar } from '@/components';
import NavigationChange from '@/components/NavigationChange';
import TogglePortfolio from '@/components/TogglePortfolio';
import { loadApps } from '@/lib/mdx';
import { Providers } from '@/lib/providers';
import { type Section } from '@/lib/redux/slices/sectionSlice/sectionSlice';
import { Analytics } from '@vercel/analytics/react';
import glob from 'fast-glob';
import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
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

  const allApps = await loadApps();

  return (
    <Providers>
      <html lang="en">
        <body className="bg-dark_bg min-h-screen max-h-screen flex flex-col scroll-smooth">
          <Toaster />
          <TopBar />
          <main className="flex-1 flex overflow-hidden relative">
            <ActivityBar sections={allSections} allApps={allApps} />
            <div className="flex w-full flex-col overflow-hidden">
              <TabsContainer /> {children}
            </div>
          </main>
          <BottomBar />
          <TogglePortfolio />
          <NavigationChange allApps={allApps} />
          <Analytics />
        </body>
      </html>
    </Providers>
  );
}
