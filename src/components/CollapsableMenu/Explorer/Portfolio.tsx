import clsx from 'clsx';
import { useState } from 'react';
import SubCollapsableMenu from '../SubCollapsableMenu';
import { ChevronDown, ChevronRight, CollapseAll, Refresh, NewFile, NewFolder, Next, Node, Public, PublicOpen } from '@/icons';
import { SubMenu, useSelector, selectPortfolio } from '@/lib/redux';

export default function Portfolio() {
  const portafolio = useSelector(selectPortfolio);

  return (
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
      <Folder name=".next" openIcon={<></>} closedIcon={<Next />} disabled />
      <Folder name="node_modules" openIcon={<></>} closedIcon={<Node />} disabled />
      <Folder name="public" openIcon={<PublicOpen />} closedIcon={<Public />} disabled={false} />
    </SubCollapsableMenu>
  );
}

function Folder({ name, openIcon, closedIcon, disabled, url }: FolderProps) {
  const [open, setOpen] = useState(true);

  const onToggleFolder: React.MouseEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
  };

  return (
    <button onClick={onToggleFolder} disabled={disabled} className="flex w-full hover:bg-dark_border items-center py-[2px] cursor-pointer focus:bg-gray-400">
      <div className="ml-4">{open && !disabled ? <ChevronDown /> : <ChevronRight />}</div>
      <div className="mr-2 ml-1">{open && !disabled ? openIcon : closedIcon}</div> <p className={clsx(disabled ? 'opacity-40' : 'opacity-100')}>{name}</p>
    </button>
  );
}

interface FolderProps {
  name: string;
  openIcon: JSX.Element;
  closedIcon: JSX.Element;
  disabled: boolean;
  url?: string;
}
