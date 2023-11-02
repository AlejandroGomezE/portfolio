'use client';
import { Ellipsis } from '@/icons';
import { App, Leetcode, MDXEntry } from '@/lib/mdx';
import Header from '../Header';
import Editors from './Editors';
import Outline from './Outline';
import Portfolio from './Portfolio';
import Scripts from './Scripts';
import Timeline from './Timeline';

export default function Explorer({ allApps, allLeetcode }: { allApps: MDXEntry<App>[], allLeetcode: MDXEntry<Leetcode>[] }) {
  return (
    <>
      <Header menuTitle="EXPLORER">
        <button className="hover:bg-gray-300 p-1 rounded-md">
          <Ellipsis />
        </button>
      </Header>
      <div id="subMenusContainer" className="divide-dark_border divide-y-2 flex flex-col mx-[1px] flex-1 select-none">
        <Editors />
        <Portfolio allApps={allApps} allLeetcode={allLeetcode} />
        <Outline />
        <Timeline />
        <Scripts />
      </div>
    </>
  );
}
