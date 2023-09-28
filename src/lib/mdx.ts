import glob from 'fast-glob';
import { StaticImageData } from 'next/image';

async function loadEntries<T extends { date: string }>(directory: string, metaName: string): Promise<Array<MDXEntry<T>>> {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(async (filename) => {
        let metadata = (await import(`../app/${directory}/${filename}`))[metaName] as T;
        return {
          ...metadata,
          metadata,
          href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
        };
      })
    )
  ).sort((a, b) => b.date.localeCompare(a.date));
}

export type MDXEntry<T> = T & { href: string; metadata: T };

export interface App {
  date: string;
  industry: string;
  title: string;
  description: string;
  image: StaticImageData;
  service: string;
  url: string;
  pathname: string;
  framework: string;
}

export function loadApps() {
  return loadEntries<App>('apps', 'appData');
}
