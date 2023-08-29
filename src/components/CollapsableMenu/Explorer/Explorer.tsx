'use client';
import Header from '../Header';
import SubCollapsableMenu from '../SubCollapsableMenu';
import { CloseAll, CollapseAll, Ellipsis, Refresh, NewFile, NewFolder, SaveAll } from '@/icons';
import Editors from './Editors';

const subMenus = [
  {
    subMenuTitle: 'OPEN EDITORS',
    subMenuButtons: [
      { id: 0, button: <NewFile /> },
      { id: 1, button: <SaveAll /> },
      { id: 2, button: <CloseAll /> },
    ],
    children: <Editors />,
    id: 'editors_submenu',
  },
  {
    subMenuTitle: 'PORTFOLIO',
    subMenuButtons: [
      { id: 0, button: <NewFile /> },
      { id: 1, button: <NewFolder /> },
      { id: 2, button: <Refresh /> },
      { id: 3, button: <CollapseAll /> },
    ],
    children: <></>,
    id: 'portfolio_submenu',
  },
];

export default function Explorer() {
  return (
    <>
      <Header menuTitle="EXPLORER">
        <button className="hover:bg-gray-300 p-1 rounded-md">
          <Ellipsis />
        </button>
      </Header>
      <div id="explorerMenu" className="divide-dark_border divide-y-2 flex flex-col mx-[1px] flex-1">
        {subMenus.map((item, index) => (
          <SubCollapsableMenu key={index} id={item.id} subMenuTitle={item.subMenuTitle} subMenuButtons={item.subMenuButtons}>
            {item.children}
          </SubCollapsableMenu>
        ))}
      </div>
    </>
  );
}
