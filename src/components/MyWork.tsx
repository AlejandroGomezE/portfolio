'use client';
import { ExpandArrowLink, GlowCard } from '@/components';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { impulseux, leenithBorges, leenithIos, loteriaMonarca, realtorSimplified, sierraEcomaderas, template1 } from '../../public/projects/';

interface Project {
  href: string;
  name: string;
  description: string;
  full: boolean;
  image: {
    src: StaticImageData;
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
    image: { src: realtorSimplified, width: 1928, height: 1208 },
  },
  {
    href: '/apps/template-1',
    name: 'Realtor Template',
    full: false,
    description: ' deployable template on the realtor simplified platform.',
    image: { src: template1, width: 1553, height: 955 },
  },
  {
    href: '/apps/sierra-ecomanderas',
    name: 'Sierra Ecomanderas',
    full: false,
    description: ' static website for a wood selling bussiness.',
    image: { src: sierraEcomaderas, width: 1558, height: 955 },
  },
  {
    href: '/apps/loteria-monarca',
    name: 'Loteria Monarca',
    full: true,
    description: ' online platform to register and play Loteria Mexicana.',
    image: { src: loteriaMonarca, width: 1553, height: 955 },
  },
  {
    href: '/apps/leenith-borges',
    name: 'Leenith',
    full: true,
    description: ' e-commerce website to manage, and sell courses online.',
    image: { src: leenithBorges, width: 1558, height: 955 },
  },
  {
    href: '/apps/leenith-ios',
    name: 'Leenith',
    full: false,
    description: ' ios app to access and buy courses.',
    image: { src: leenithIos, width: 883, height: 588 },
  },
  {
    href: '/apps/impulseux',
    name: 'ImpulseUX',
    full: false,
    description: ' static website for design and development agency.',
    image: { src: impulseux, width: 1669, height: 955 },
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
              <ExpandArrowLink href={project.href} className="before:bg-my_work_yellow " />
            </div>
            <Image
              placeholder="blur"
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
