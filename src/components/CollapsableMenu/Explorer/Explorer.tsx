import Header from '../Header';
import SubCollapsableMenu from '../SubCollapsableMenu';
import { Ellipsis } from '@/icons';
import Editors from './Editors';

const subMenus = [
  {
    subMenuTitle: 'OPEN EDITORS',
    subMenuButtons: <></>,
    children: <Editors />,
  },
  {
    subMenuTitle: 'PORTFOLIO',
    subMenuButtons: <></>,
    children: <></>,
  },
  {
    subMenuTitle: 'OUTLINE',
    subMenuButtons: <></>,
    children: <></>,
  },
  {
    subMenuTitle: 'TIMELINE',
    subMenuButtons: <></>,
    children: <></>,
  },
  {
    subMenuTitle: 'NPM SCRIPTS',
    subMenuButtons: <></>,
    children: <></>,
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
      <div className="gap-y-[1px] bg-dark_border flex flex-col mx-[1px]">
        {subMenus.map((item, index) => (
          <SubCollapsableMenu key={index} subMenuTitle={item.subMenuTitle} subMenuButtons={item.subMenuButtons}>
            {item.children}
          </SubCollapsableMenu>
        ))}
      </div>
    </>
  );
}
