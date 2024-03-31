import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'Thoughtworks | Consultant Developer.',
    date: 'Mar 2024 - Present',
    description: [
      'Developed front-end user interface using React, Typescript, JavaScript, HTML and CSS for Web applications.',
      'Collaborated with other developers to implement new features in a way that is consistent with existing codebase conventions.',
      'Developed software by following the Agile Methodology (Lean & Xtreme Programming).',
    ],
    image: { url: '/work/tw.png', height: 96, width: 96, className: 'rounded-none' },
  },
  {
    title: 'Iuvity | Full Stack Semi-Senior Developer.',
    date: 'Feb 2022 - Mar 2024',
    description: [
      'Development of an administrative console for the management of multitenant documentation portals in which the Microfrontends architecture was used using Module Federation, React, Primereact, HTML, CSS, Nodejs, PostgreSQL and JWT.',
      "Development and maintenance of a component library based on Primereact to streamline the construction of the UI in the company's products.",
      "Development and maintenance of functionalities for the authentication and security of banking entities in segments of people and companies using the Microfrontend architecture in the company's main product using Modyo as a platform and React for the development of the functionalities.",
      "Development and maintenance of functionalities for administrative and monetary transactions of banking entities in segments of people and companies using the Microfrontend architecture in the main product of the company using Modyo as a platform and React for the development of the functionalities.",
      'Developed software by following the TDD Methodology.',
      'Developed software by following the Agile Methodology (Scrum).',
    ],
    image: { url: '/work/iuvity.webp', height: 96, width: 96, className: 'rounded-none' },
  },
  {
    title: 'Hult Prize Foundation | Software Developer.',
    date: 'Nov 2021 - Mar 2022',
    description: [
      'Responsible for developing administrative application for tutors of the Hultprize contest.',
      'Responsible for maintaining and solving administrative application bugs for Hultprize contest administrators.',
    ],
    image: { url: '/work/hultprize.png', height: 96, width: 96, className: '' },
  },
  {
    title: 'Systemwork S.A. | Software Developer.',
    date: 'Sep 2019 - Oct 2021',
    description: [
      'Tasked with creating the accounting functionality for Contamatic ERP using PHP, MariaDB, Javascript, HTML5 y CSS3',
      'Tasked with creating the rrhh functionality for Contamatic ERP using PHP, MariaDB, Javascript, HTML5 y CSS3',
      'Tasked with creating various electronic facturing functionalities for Contmatic ERP using PHP, MariaDB, Javascript, HTML5 y CSS3',
    ],
    image: { url: '/work/systemworks.jpg', height: 96, width: 96, className: '' },
  },
  {
    title: 'JCB Technology Ltda. | Full-Stack Developer.',
    date: 'Abr 2021 - Aug 2021',
    description: [
      'Tasked with development and maintenance of real time chat and video call functionalities para aplicacion ClickNOW.',
      'Designed and built an initial demo with HTML, CSS, Typescipt, ExpressJS, MongoDB, and Digital Ocean.',
      'Development of various functionalities for the correct operation of the application.',
    ],
    image: { url: '/work/jcb.png', height: 96, width: 120, className: '' },
  },
  {
    title: 'Anvic | Front-end Developer.',
    date: 'Feb 2019 - Jun 2021',
    description: [
      'Tasked with creating the user interface of a web application for an educational institution using Javascript/Typescript, HTML5, CSS and Angular framework in his 8 version.',
      'Development and maintenance of financial software for the PIP franchise, in which I was in charge of the UI, UX and software layout, as well as creating tasks for the project deliveries.',
      'Developed software by following the Agile Methodology (Kanban).',
    ],
    image: { url: '/work/anvic.jpg', height: 96, width: 96, className: '' },
  }
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
