'use client';
import { GlowCard } from '@/components';
import Link from 'next/link';

interface Project {
  href: string;
  name: string;
  description: string;
}

const projects: Project[] = [
  {
    href: '/realtor-simplified',
    name: 'Realtor Simplified',
    description: 'Learn about the contact model and how to create, retrieve, update, delete, and list contacts.',
  },
  {
    href: '/loteria-monarca',
    name: 'Loteria Monarca',
    description: 'Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.',
  },
  {
    href: '/leenith',
    name: 'Leenith Borges',
    description: 'Learn about the message model and how to create, retrieve, update, delete, and list messages.',
  },
  {
    href: '/groups',
    name: 'Groups',
    description: 'Learn about the group model and how to create, retrieve, update, delete, and list groups.',
  },
];

export default function Projects() {
  return (
    <div className="my-16 @container">
      <div className="not-prose grid grid-cols-1 gap-8 pt-10 @2xl:grid-cols-2">
        {projects.map((project) => (
          <GlowCard key={project.href} className="">
            <h3 className="text-xl font-semibold text-gray-500">
              <Link href={project.href}>
                <span className="absolute inset-0 rounded-2xl" />
                {project.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-white dark:text-white/90">{project.description}</p>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
