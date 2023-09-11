import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import SubCollapsableMenu from '../SubCollapsableMenu';
import { ChevronDown, ChevronRight, CollapseAll, Refresh, NewFile, NewFolder, Next, Node, Public, PublicOpen, Tsx } from '@/icons';
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
      <Folder name="public" openIcon={<PublicOpen />} closedIcon={<Public />} disabled={false}>
        <File name="favicon.ico" icon={<Tsx />} url="www.google.com" level={1} />
      </Folder>
    </SubCollapsableMenu>
  );
}

const itemsCSS = 'flex w-full hover:bg-dark_border items-center py-[2px] cursor-pointer focus:bg-gray-400';

function Folder({ name, openIcon, closedIcon, disabled, children }: FolderProps) {
  const [open, setOpen] = useState(true);

  const onToggleFolder: React.MouseEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={onToggleFolder} disabled={disabled} className={itemsCSS}>
        <div className="mr-1 ml-4">{open && !disabled ? <ChevronDown /> : <ChevronRight />}</div>
        <div className="mr-2">{open && !disabled ? openIcon : closedIcon}</div> <p className={clsx(disabled ? 'opacity-40' : 'opacity-100')}>{name}</p>
      </button>
      {open && children}
    </>
  );
}

interface FolderProps {
  name: string;
  openIcon: JSX.Element;
  closedIcon: JSX.Element;
  disabled: boolean;
  children?: JSX.Element | JSX.Element[];
}

function File({ name, icon, url, level }: FileProps) {
  return <FileWrapper name={name} icon={icon} url={url} level={level} />;
}

function FileWrapper({ name, icon, url, level }: FileProps) {
  if (!url) {
    return (
      <button style={{ paddingLeft: 36 + level * 16 }} className={clsx(itemsCSS, 'opacity-40')}>
        <div className="mr-2">{icon}</div> {name}
      </button>
    );
  }

  return (
    <Link href={url} style={{ paddingLeft: 36 + level * 16 }} className={itemsCSS}>
      <div className="ml-4 mr-2">{icon}</div> <p>{name}</p>
    </Link>
  );
}

interface FileProps {
  name: string;
  icon: JSX.Element;
  url?: string;
  level: number;
}
