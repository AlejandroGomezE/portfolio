import { FadeIn, FadeInStagger } from '@/components';
import {
  AboutMe,
  App,
  AppOpen,
  BottomLeftArrow,
  BottomRightArrow,
  ChallengeIcon,
  ChevronDown,
  ChevronRight,
  CollapseAll,
  ContactMe,
  Eslint,
  FavIcon,
  Git,
  LogIcon,
  NewFile,
  NewFolder,
  Next,
  NextConfig,
  NodeJs,
  NodeModules,
  Projects,
  Public,
  PublicOpen,
  ReactIcon,
  Refresh,
  SolutionIcon,
  Src,
  SrcOpen,
  Svelte,
  TailwindCSS,
  Technologies,
  TechnologiesIcon,
  TopLeftArrow,
  TopRigthArrow,
  TsConfig,
  Tsx,
  WorkExperience,
} from '@/icons';
import { App as AppType, MDXEntry } from '@/lib/mdx';
import { Section, SubMenu, selectExpanded, selectPortfolio, selectSectionIsVisible, selectSectionOrder, selectSections, useSelector } from '@/lib/redux';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import { useCallback, useState } from 'react';
import SubCollapsableMenu from '../SubCollapsableMenu';

const staticFiles = [
  { name: '.eslintrc.json', icon: <Eslint /> },
  { name: '.gitignore', icon: <Git /> },
  { name: 'next.config.js', icon: <NextConfig /> },
  { name: 'package-lock.json', icon: <NodeJs /> },
  { name: 'package.json', icon: <NodeJs /> },
  { name: 'tailwind.config.ts', icon: <TailwindCSS /> },
  { name: 'tsconfig.json', icon: <TsConfig /> },
];

const fileType = {
  ['react' as string]: <ReactIcon />,
  ['typescript' as string]: <Tsx />,
  ['next' as string]: <NextConfig />,
  ['svelte' as string]: <Svelte />,
};

const subSectionsIcons: { [key: string]: JSX.Element } = {
  'about-me': <AboutMe />,
  'work-experience': <WorkExperience />,
  skills: <Technologies />,
  'my-work': <Projects />,
  contact: <ContactMe />,
  about: <LogIcon />,
  challenge: <ChallengeIcon />,
  solution: <SolutionIcon />,
  technologies: <TechnologiesIcon />,
};

export default function Portfolio({ allApps }: { allApps: MDXEntry<AppType>[] }) {
  const portafolio = useSelector(selectPortfolio);
  const sections = useSelector(selectSections);
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();
  const expanded = useSelector(selectExpanded);

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
    >
      {expanded && (
        <>
          <Folder name=".next" openIcon={<></>} closedIcon={<Next />} disabled indent={0} segmentActive={false} />
          <Folder name="node_modules" openIcon={<></>} closedIcon={<NodeModules />} disabled indent={0} segmentActive={false} />
          <Folder name="public" openIcon={<PublicOpen />} closedIcon={<Public />} disabled={false} indent={0} segmentActive={segments.length === 0}>
            <File name="about_me.ts" icon={<FavIcon />} url="/" indent={1} sections={pathname === '/' ? sections : []} />
          </Folder>
          <Folder name="src" openIcon={<SrcOpen />} closedIcon={<Src />} disabled={false} indent={0} segmentActive={false}>
            <Folder name="my work" openIcon={<AppOpen />} closedIcon={<App />} disabled={false} indent={1} segmentActive={segments[0] === 'apps'}>
              {allApps.map((app) => (
                <File key={app.pathname} name={app.title} icon={fileType[app.framework]} url={app.pathname} indent={2} sections={pathname === app.pathname ? sections : []} />
              ))}
            </Folder>
          </Folder>
          {staticFiles.map((file) => (
            <File key={file.name} name={file.name} icon={file.icon} indent={0} sections={[]} />
          ))}
        </>
      )}
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

  const onToggleFolder: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className="overflow-hidden">
      <motion.div layout="position" transition={{ duration: 0.1 }} className={clsx('folder-container', segmentActive ? 'folder-active' : '')}>
        <button style={{ paddingLeft: indent * 16 }} onClick={onToggleFolder} disabled={disabled} className={itemsCSS}>
          <div className="mr-1 ml-4">{open && !disabled ? <ChevronDown /> : <ChevronRight />}</div>
          <div className="mr-2">{open && !disabled ? openIcon : closedIcon}</div> <p className={clsx(disabled ? 'opacity-40' : 'opacity-100')}>{name}</p>
        </button>
        {open && children}
        {open && !disabled && <span className="line-before-folder" style={{ left: indent === 0 ? indent * 16 + 24 : indent * 16 + 24 }} />}
      </motion.div>
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
        <div style={{ paddingLeft: indent * 16 + 22 }} className="flex flex-col ml-7 relative py-1">
          <FadeInStagger className="w-max" role="list">
            {sections.map((section) => (
              <FadeIn key={section.id}>
                <FileSection id={section.id} title={section.title} url={url ? url : ''} />
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      )}
    </>
  );
}

function FileSection({ id, title, url }: { id: string; title: string; url: string }) {
  const isVisible = useSelector((state) => selectSectionIsVisible(state, id));
  const firstVisible = useSelector(selectSectionOrder)[0];
  const lastVisible = useSelector(selectSectionOrder).at(-1);

  return (
    <AnimatePresence mode="popLayout" initial={true}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.1 },
        }}
        exit={{
          transition: { duration: 0.2 },
        }}
        className={'relative bg-dark_bg my-1'}
      >
        {firstVisible && firstVisible.id === id && (
          <motion.span layoutId="arrow-top-left" className="top-arrows left-arrow">
            <TopLeftArrow />
          </motion.span>
        )}
        {firstVisible && firstVisible.id === id && (
          <motion.span layoutId="arrow-top-right" className="top-arrows right-arrow">
            <TopRigthArrow />
          </motion.span>
        )}
        {lastVisible && lastVisible.id === id && (
          <motion.span layoutId="arrow-bottom-left" className="bottom-arrows left-arrow">
            <BottomLeftArrow />
          </motion.span>
        )}
        {lastVisible && lastVisible.id === id && (
          <motion.span layoutId="arrow-bottom-right" className="bottom-arrows right-arrow">
            <BottomRightArrow />
          </motion.span>
        )}
        <Link href={`${url}#${id}`} className={clsx('flex items-center hover:text-gray-500 px-[4px] transition-colors duration-300', isVisible ? 'text-blue-100' : 'text-gray-500')}>
          {subSectionsIcons[id] ? <div className="mr-2">{subSectionsIcons[id]}</div> : <div className="mr-3 w-4" />}
          <p className="leading-5">{title}</p>
        </Link>
      </motion.div>
    </AnimatePresence>
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
    <Link href={url} scroll={false} style={{ paddingLeft: indent * 16 + 22 }} className={clsx(itemsCSS, active && 'bg-gray-200')}>
      <div className="ml-4 mr-2 relative">{icon}</div> <p>{name}</p>
    </Link>
  );
}
