import { FadeIn, Stagger } from '@/components';
import clsx from 'clsx';

export default function SectionHeader({ icon, className, title, description }: { icon: React.ReactNode; className?: string; title: string; description: React.ReactNode }) {
  return (
    <Stagger className={clsx('flex flex-col gap-6 pl-5 sm:pl-0 mt-12', className)}>
      <div className="flex gap-6">
        <FadeIn
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="relative"
        >
          {icon}
        </FadeIn>
        <FadeIn
          variants={{
            hidden: { opacity: 0, x: -15 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-2xl leading-6">{title}</h2>
        </FadeIn>
      </div>
      <div className="max-w-3xl">
        <FadeIn
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-6 text-5xl"
        >
          {description}
        </FadeIn>
      </div>
    </Stagger>
  );
}
