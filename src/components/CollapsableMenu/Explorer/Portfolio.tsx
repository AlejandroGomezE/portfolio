import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import SubCollapsableMenu from '../SubCollapsableMenu';
import {
  App,
  AppOpen,
  ChevronDown,
  ChevronRight,
  CollapseAll,
  Eslint,
  Git,
  Refresh,
  NewFile,
  NewFolder,
  Next,
  NextConfig,
  NodeJs,
  NodeModules,
  Public,
  PublicOpen,
  Src,
  SrcOpen,
  TailwindCSS,
  Tsx,
  TsConfig,
} from '@/icons';
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
      <Folder name=".next" openIcon={<></>} closedIcon={<Next />} disabled level={0} />
      <Folder name="node_modules" openIcon={<></>} closedIcon={<NodeModules />} disabled level={0} />
      <Folder name="public" openIcon={<PublicOpen />} closedIcon={<Public />} disabled={false} level={0}>
      <File name="about_me.ts" icon={<Tsx />} url="www.google.com" level={1} />
      </Folder>
      <Folder name="src" openIcon={<SrcOpen />} closedIcon={<Src />} disabled={false} level={0}>
        <Folder name="my apps" openIcon={<AppOpen />} closedIcon={<App />} disabled={false} level={1}>
          <File name="RealtorSimplified.ts" icon={<Tsx />} url="www.google.com" level={2} />
          <File name="LoteriaMonarca.ts" icon={<Tsx />} url="www.google.com" level={2} />
          <File name="Leenith.ts" icon={<Tsx />} url="www.google.com" level={2} />
        </Folder>
      </Folder>
      <File name=".eslintrc.json" icon={<Eslint />} level={0} />
      <File name=".gitignore" icon={<Git />} level={0} />
      <File name="next.config.js" icon={<NextConfig />} level={0} />
      <File name="package-lock.json" icon={<NodeJs />} level={0} />
      <File name="package.json" icon={<NodeJs />} level={0} />
      <File name="tailwind.config.ts" icon={<TailwindCSS />} level={0} />
      <File name="tsconfig.json" icon={<TsConfig />} level={0} />
    </SubCollapsableMenu>
  );
}

const itemsCSS = 'flex w-full hover:bg-dark_border items-center py-[2px] cursor-pointer focus:bg-gray-400';

function Folder({ name, openIcon, closedIcon, disabled, level, children }: FolderProps) {
  const [open, setOpen] = useState(true);

  const onToggleFolder: React.MouseEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button style={{ paddingLeft: level * 16 }} onClick={onToggleFolder} disabled={disabled} className={itemsCSS}>
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
  level: number;
  children?: JSX.Element | JSX.Element[];
}

function File({ name, icon, url, level }: FileProps) {
  return <FileWrapper name={name} icon={icon} url={url} level={level} />;
}

function FileWrapper({ name, icon, url, level }: FileProps) {
  if (!url) {
    return (
      <button style={{ paddingLeft: level * 16 + 22 }} className={clsx(itemsCSS)}>
        <div className="ml-4 mr-2">{icon}</div> {name}
      </button>
    );
  }

  return (
    <Link href={url} style={{ paddingLeft: level * 16 + 22 }} className={itemsCSS}>
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
