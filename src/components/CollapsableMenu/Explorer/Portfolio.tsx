import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
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
  SubSection,
  TailwindCSS,
  Tsx,
  TsConfig,
} from '@/icons';
import { SubMenu, useSelector, selectPortfolio, selectSections, Section, selectSectionIsVisible } from '@/lib/redux';

const staticFiles = [
  { name: '.eslintrc.json', icon: <Eslint /> },
  { name: '.gitignore', icon: <Git /> },
  { name: 'next.config.js', icon: <NextConfig /> },
  { name: 'package-lock.json', icon: <NodeJs /> },
  { name: 'package.json', icon: <NodeJs /> },
  { name: 'tailwind.config.ts', icon: <TailwindCSS /> },
  { name: 'tsconfig.json', icon: <TsConfig /> },
];

const appFiles = [
  { name: 'RealtorSimplified.ts', icon: <Tsx />, url: '/apps/realtor-simplified' },
  { name: 'LoteriaMonarca.ts', icon: <Tsx />, url: '/apps/loteria-monarca' },
  { name: 'Leenith.ts', icon: <Tsx />, url: '/apps/leenith' },
];

export default function Portfolio() {
  const portafolio = useSelector(selectPortfolio);
  const sections = useSelector(selectSections);
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();

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
      <Folder name=".next" openIcon={<></>} closedIcon={<Next />} disabled indent={0} segmentActive={false} />
      <Folder name="node_modules" openIcon={<></>} closedIcon={<NodeModules />} disabled indent={0} segmentActive={false} />
      <Folder name="public" openIcon={<PublicOpen />} closedIcon={<Public />} disabled={false} indent={0} segmentActive={segments.length === 0}>
        <File name="about_me.ts" icon={<Tsx />} url="/" indent={1} sections={pathname === '/' ? sections : []} />
      </Folder>
      <Folder name="src" openIcon={<SrcOpen />} closedIcon={<Src />} disabled={false} indent={0} segmentActive={false}>
        <Folder name="my apps" openIcon={<AppOpen />} closedIcon={<App />} disabled={false} indent={1} segmentActive={segments[0] === 'apps'}>
          {appFiles.map((file) => (
            <File key={file.name} name={file.name} icon={file.icon} url={file.url} indent={2} sections={pathname === file.url ? sections : []} />
          ))}
        </Folder>
      </Folder>
      {staticFiles.map((file) => (
        <File key={file.name} name={file.name} icon={file.icon} indent={0} sections={[]} />
      ))}
    </SubCollapsableMenu>
  );
}

const itemsCSS = 'flex w-full hover:bg-dark_border items-center py-[2px] cursor-pointer transition-all duration-200';

interface FolderProps {
  name: string;
  openIcon: JSX.Element;
  closedIcon: JSX.Element;
  disabled: boolean;
  indent: number;
  segmentActive: boolean;
  children?: JSX.Element | JSX.Element[];
}

function Folder({ name, openIcon, closedIcon, disabled, indent, children, segmentActive }: FolderProps) {
  const [open, setOpen] = useState(true);

  const onToggleFolder: React.MouseEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={clsx('folder-container', segmentActive ? 'folder-active' : '')}>
      <button style={{ paddingLeft: indent * 16 }} onClick={onToggleFolder} disabled={disabled} className={itemsCSS}>
        <div className="mr-1 ml-4">{open && !disabled ? <ChevronDown /> : <ChevronRight />}</div>
        <div className="mr-2">{open && !disabled ? openIcon : closedIcon}</div> <p className={clsx(disabled ? 'opacity-40' : 'opacity-100')}>{name}</p>
      </button>
      {open && children}
      {open && !disabled && <span className="line-before-folder" style={{ left: indent === 0 ? indent * 16 + 24 : indent * 16 + 24 }} />}
    </div>
  );
}

interface FileProps {
  name: string;
  icon: JSX.Element;
  url?: string;
  indent: number;
}

interface FileWrapperProps extends FileProps {
  sections: Section[];
}

function File({ name, icon, url, indent, sections }: FileWrapperProps) {
  return (
    <>
      <FileContent name={name} icon={icon} url={url} indent={indent} active={sections.length > 0} />
      {sections.length > 0 && (
        <div style={{ paddingLeft: indent * 16 + 22 }} className="flex flex-col ml-7">
          {sections.map((section) => (
            <FileSection key={section.id} id={section.id} title={section.title} />
          ))}
        </div>
      )}
    </>
  );
}

function FileSection({ id, title }: { id: string; title: string }) {
  const isVisible = useSelector((state) => selectSectionIsVisible(state, id));
  return (
    <div className="flex items-center text-white hover:text-gray-500 py-[2px] transition-colors duration-300">
      <SubSection />
      <p>{title}</p>
    </div>
  );
}

function FileContent({ name, icon, url, indent, active }: FileProps & { active: boolean }) {
  if (!url) {
    return (
      <button style={{ paddingLeft: indent * 16 + 22 }} className={clsx(itemsCSS)}>
        <div className="ml-4 mr-2">{icon}</div> {name}
      </button>
    );
  }

  return (
    <Link href={url} style={{ paddingLeft: indent * 16 + 22 }} className={clsx(itemsCSS, active ? 'bg-gray-200' : '', 'focus:bg-gray-200')}>
      <div className="ml-4 mr-2 relative">{icon}</div> <p>{name}</p>
    </Link>
  );
}
