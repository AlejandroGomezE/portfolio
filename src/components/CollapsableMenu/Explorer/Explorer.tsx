'use client';
import Editors from './Editors';
import Header from '../Header';
import SubCollapsableMenu from '../SubCollapsableMenu';
import { CloseAll, CollapseAll, Ellipsis, Refresh, NewFile, NewFolder, SaveAll } from '@/icons';
import { SubMenu, useSelector, selectPortfolio, selectEditor } from '@/lib/redux';

export default function Explorer() {
  const editors = useSelector(selectEditor);
  const portafolio = useSelector(selectPortfolio);

  return (
    <>
      <Header menuTitle="EXPLORER">
        <button className="hover:bg-gray-300 p-1 rounded-md">
          <Ellipsis />
        </button>
      </Header>
      <div id="subMenusContainer" className="divide-dark_border divide-y-2 flex flex-col mx-[1px] flex-1 select-none">
        <SubCollapsableMenu
          subMenuTitle="OPEN EDITORS"
          subMenuButtons={[
            { id: 0, button: <NewFile /> },
            { id: 1, button: <SaveAll /> },
            { id: 2, button: <CloseAll /> },
          ]}
          subMenu={SubMenu.EDITOR}
          open={editors.open}
          maxHeight={editors.maxHeight}
          overflowY={editors.overflowY}
        >
          <Editors />
        </SubCollapsableMenu>
        <SubCollapsableMenu
          subMenuTitle="PORTFOLIO"
          subMenuButtons={[
            { id: 0, button: <NewFile /> },
            { id: 1, button: <NewFolder /> },
            { id: 2, button: <Refresh /> },
            { id: 3, button: <CollapseAll /> },
          ]}
          subMenu={SubMenu.PORTFOLIO}
          open={portafolio.open}
          maxHeight={portafolio.maxHeight}
          height={portafolio.height}
          overflowY={portafolio.overflowY}
        >
          <></>
        </SubCollapsableMenu>
      </div>
    </>
  );
}
