'use client';
import { GlowCard } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  href: string;
  name: string;
  description: string;
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
    description: 'saas platform that enables realtors to deploy a professional website in minutes.',
    image: { src: '/projects/realtor-simplified.png', width: 400, height: 400 },
  },
  {
    href: '/apps//loteria-monarca',
    name: 'Loteria Monarca',
    description: 'Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.',
    image: { src: '/projects/realtor-simplified.png', width: 400, height: 400 },
  },
  {
    href: '/apps/leenith-borges',
    name: 'Leenith Borges',
    description: 'Learn about the message model and how to create, retrieve, update, delete, and list messages.',
    image: { src: '/projects/realtor-simplified.png', width: 400, height: 400 },
  },
];

export default function MyWork() {
  return (
    <div className="relative z-10 mt-20">
      <div className="not-prose grid grid-cols-1 gap-8 pt-10 @container">
        {projects.map((project) => (
          <GlowCard key={project.href} className="hover:shadow-my_work_yellow/90 h-[60vh] @xl:h-[50vh]" glowClassName="from-[#ffdc8b] to-[#ffdc8b]">
            <p className="mt-1 text-2xl text-white dark:text-white/90">
              <span className="text-4xl text-my_work_yellow">{project.name} </span>
              {project.description}
            </p>
            <h3 className="text-2xl font-semibold mt-12">
              <Link href={project.href}>Learn more</Link>
            </h3>
            <Image className="z-10 absolute bottom-0 right-0 my-work-img-shadow rounded-tl-md" src={project.image.src} alt="" width={project.image.width} height={project.image.height} />
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
