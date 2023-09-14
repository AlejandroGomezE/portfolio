'use client';
import Header from '../Header';
import { Ellipsis } from '@/icons';
import Portfolio from './Portfolio';
import Editors from './Editors';
import Outline from './Outline';
import Timeline from './Timeline';
import Scripts from './Scripts';

export default function Explorer() {
  return (
    <>
      <Header menuTitle="EXPLORER">
        <button className="hover:bg-gray-300 p-1 rounded-md">
          <Ellipsis />
        </button>
      </Header>
      <div id="subMenusContainer" className="divide-dark_border divide-y-2 flex flex-col mx-[1px] flex-1 select-none">
        <Editors />
        <Portfolio />
        <Outline />
        <Timeline />
        <Scripts />
      </div>
    </>
  );
}
