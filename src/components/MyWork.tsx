'use client';
import { GlowCard } from '@/components';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  href: string;
  name: string;
  description: string;
  full: boolean;
  image: {
    src: string;
    width: number;
    height: number;
  };
}

const projects: Project[] = [
  {
    href: '/apps/realtor-simplified',
    name: 'Realtor Simplified',
    full: true,
    description: ' saas platform that enables realtors to deploy a professional website in minutes.',
    image: { src: '/projects/realtor-simplified.png', width: 1928, height: 1208 },
  },
  {
    href: '/apps/template-1',
    name: 'Realtor Template',
    full: false,
    description: ' deployable template on the realtor simplified platform.',
    image: { src: '/projects/template-1.png', width: 1553, height: 955 },
  },
  {
    href: '/apps/sierra-ecomanderas',
    name: 'Sierra Ecomanderas',
    full: false,
    description: ' static website for a wood selling bussiness.',
    image: { src: '/projects/sierra-ecomaderas.png', width: 1558, height: 955 },
  },
  {
    href: '/apps/loteria-monarca',
    name: 'Loteria Monarca',
    full: true,
    description: ' online platform to register and play Loteria Mexicana.',
    image: { src: '/projects/loteria-monarca.png', width: 1553, height: 955 },
  },
  {
    href: '/apps/leenith-borges',
    name: 'Leenith',
    full: true,
    description: ' e-commerce website to manage, and sell courses online.',
    image: { src: '/projects/leenith-borges.png', width: 1558, height: 955 },
  },
  {
    href: '/apps/leenith-ios',
    name: 'Leenith',
    full: false,
    description: ' ios app to access and buy courses.',
    image: { src: '/projects/leenith-ios.png', width: 883, height: 588 },
  },
  {
    href: '/apps/impulseux',
    name: 'ImpulseUX',
    full: false,
    description: ' static website for design and development agency.',
    image: { src: '/projects/impulseux.png', width: 1669, height: 955 },
  },
];

export default function MyWork() {
  return (
    <div className="relative z-10 mt-20 @container">
      <div className="grid grid-cols-1 gap-8 pt-10 @3xl:grid-cols-2">
        {projects.map((project) => (
          <GlowCard
            key={project.href}
            className={clsx('hover:shadow-my_work_yellow/90', project.full ? 'h-[60vh] @2xl:h-[50vh] @3xl:col-span-2' : 'h-[60vh] @3xl:col-span-1')}
            glowClassName="from-[#ffdc8b] to-[#ffdc8b]"
          >
            <div className={clsx('flex-col justify-between h-full', project.full && '@2xl:flex')}>
              <h3 className={clsx('text-2xl @2xl:text-3xl text-white dark:text-white/90', project.full && '@4xl:w-[40%]')}>
                <span className="text-3xl @2xl:text-4xl text-my_work_yellow">{project.name}</span>
                {project.description}
              </h3>
              <div className="flex w-max my-work-button-container cursor-pointer mt-8">
                <Link href={project.href} className="my-work-button text-2xl font-semibold relative">
                  Learn more
                </Link>
                <span className="flex items-center h-6 mt-auto transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" overflow-hidden" width={18} height={18} fill="none" viewBox="0 0 18 24">
                    <path
                      stroke="currentColor"
                      className="translate-x-full my-work-button-arrow transition-all duration-200"
                      d="M4 11.25a.75.75 0 000 1.5v-1.5zm0 1.5h16v-1.5H4v1.5z"
                      strokeWidth="1.5"
                    ></path>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 6l6 6-6 6"></path>
                  </svg>
                </span>
              </div>
            </div>
            <Image
              className={clsx(
                'z-10 my-work-img-shadow absolute w-full',
                project.full ? '@md:w-[80%] @xl:w-[70%] @2xl:w-[55%] @md:rounded-tl-md bottom-0 right-0' : 'bottom-0 @xl:right-0 @xl:w-[70%] @3xl:w-full'
              )}
              src={project.image.src}
              alt=""
              width={project.image.width}
              height={project.image.height}
            />
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
