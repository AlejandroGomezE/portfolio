'use client';
import { FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const skills = [
  { skill: 'Languages', buttonClassNames: 'rounded-tl-full', textClassNames: '-translate-x-5' },
  { skill: 'Front', buttonClassNames: 'rounded-tr-full', textClassNames: 'translate-x-3 translate-y-1' },
  { skill: 'Back', buttonClassNames: 'rounded-bl-full', textClassNames: 'translate-x-8 -translate-y-3' },
  { skill: 'Tools', buttonClassNames: 'rounded-br-full', textClassNames: 'translate-x-3 -translate-y-3' },
];

const skillsLogos = {
  ['Languages' as string]: [
    {
      name: 'JavaScript',
      image: '/logos/js-logo.png',
    },
    {
      name: 'TypeScript',
      image: '/logos/ts-logo.png',
    },
    {
      name: 'Python',
      image: '/logos/python-logo.png',
    },
    {
      name: 'C#',
      image: '/logos/csharp-logo.png',
    },
    {
      name: 'Swift',
      image: '/logos/swift-logo.png',
    },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
  ],
  ['Front' as string]: [
    {
      name: 'HTML5',
      image: '/logos/html5-logo.png',
    },
    {
      name: 'CSS3',
      image: '/logos/css-logo.png',
    },
    {
      name: 'ReactJS',
      image: '/logos/react-logo.png',
    },
    {
      name: 'NextJS',
      image: '/logos/nextjs-logo.png',
    },
    {
      name: 'Native',
      image: '/logos/rnative-logo.png',
    },
    {
      name: 'TailwindCSS',
      image: '/logos/tailwindcss-logo.jpg',
    },
    {
      name: 'Sass',
      image: '/logos/sass-logo.png',
    },
    {
      name: 'JQuery',
      image: '/logos/jquery-logo.webp',
    },
    {
      name: 'Svelte',
      image: '/logos/svelte-logo.png',
    },
    {
      name: 'Bootstrap',
      image: '/logos/bootstrap-logo.svg',
    },
    {
      name: 'MaterialUI',
      image: '/logos/materialui-logo.png',
    },
    {
      name: 'LeafletJS',
      image: '/logos/leaflet-logo.jpg',
    },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
  ],
  ['Back' as string]: [
    {
      name: 'NodeJS',
      image: '/logos/nodejs-logo.png',
    },
    {
      name: 'ExpressJS',
      image: '/logos/express-logo.png',
    },
    {
      name: 'NestJS',
      image: '/logos/nestjs-logo.png',
    },
    {
      name: 'MongoDB',
      image: '/logos/mongodb-logo.webp',
    },
    {
      name: 'PostgresSql',
      image: '/logos/postgres-logo.png',
    },
    {
      name: 'Firebase',
      image: '/logos/firebase-logo.jpg',
    },
    {
      name: 'Heroku',
      image: '/logos/heroku-logo.webp',
    },
    {
      name: 'DigitalOcean',
      image: '/logos/digital-ocean-logo.svg',
    },
    {
      name: 'Stripe',
      image: '/logos/stripe-logo.png',
    },
    {
      name: 'Paypal',
      image: '/logos/paypal-logo.png',
    },
    {
      name: 'MercadoPago',
      image: '/logos/mercadopago-logo.webp',
    },
    {
      name: 'awsS3',
      image: '/logos/s3-logo.png',
    },
    {
      name: 'StrapiCMS',
      image: '/logos/strapi-cms-logo.png',
    },
    {
      name: 'SanityCMS',
      image: '/logos/sanity-cms-logo.png',
    },
    {
      name: 'DatoCMS',
      image: '/logos/dato-cms-logo.png',
    },
  ],
  ['Tools' as string]: [
    {
      name: 'Git',
      image: '/logos/git-logo.png',
    },
    {
      name: 'Github',
      image: '/logos/github-logo.webp',
    },
    { name: 'Docker', image: '/logos/docker-logo.png' },
    {
      name: 'EsLint',
      image: '/logos/eslint-logo.png',
    },
    {
      name: 'Redux',
      image: '/logos/redux-logo.png',
    },
    {
      name: 'Figma',
      image: '/logos/figma-logo.webp',
    },
    {
      name: 'SocketIO',
      image: '/logos/socketio-logo.webp',
    },
    {
      name: 'Mailchimp',
      image: '/logos/mailchimp-logo.webp',
    },
    {
      name: 'Postmark',
      image: '/logos/postmark-logo.png',
    },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
    { name: '', image: '' },
  ],
};

const skillsTitles = {
  ['Languages' as string]: 'Programming Languages',
  ['Front' as string]: 'Frontend',
  ['Back' as string]: 'Backend',
  ['Tools' as string]: 'Tools',
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState('Languages');
  const controls = useAnimationControls();

  const handleChangeSkill: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    const skill = e.currentTarget.textContent;
    if (skill === activeSkill) return;
    if (skill) setActiveSkill(skill);
    await controls.start('hidden');
    await controls.start('visible');
  };

  return (
    <div className="@container">
      <FadeInStagger animate={controls} className="relative z-10 grid grid-cols-3 @lg:grid-cols-4 mt-20 @2xl:grid-cols-5 @3xl:grid-cols-6 @4xl:grid-cols-8" faster>
        <div className="row-start-4 col-span-3 h-[115px] flex items-center justify-center @2xl:col-start-4 @2xl:row-start-1 @3xl:col-start-4 @4xl:col-start-4 @4xl:col-span-5 @3xl:justify-start @2xl:h-[40px] @3xl:mt-auto">
          <h2 className="text-center text-3xl font-semibold @2xl:ml-[32px]">{skillsTitles[activeSkill]}</h2>
        </div>
        <div className="skills-picker w-[325px] m-[10px] h-[325px] col-span-3 row-span-3 place-self-center isolate">
          <div className="rounded-full inset-6 absolute grid grid-cols-2 p-2 gap-2 rotate-45">
            {skills.map((skill) => (
              <button onClick={handleChangeSkill} key={skill.skill} className={clsx('rounded-[500px] skills-buttons', skill.buttonClassNames, activeSkill === skill.skill && 'skills-buttons-active')}>
                <p className={clsx('text-3xl text-white font-semibold tracking-wide w-min -rotate-45', skill.textClassNames)}>
                  {skill.skill}
                  <span className={clsx('transition-all duration-300 -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full', activeSkill === skill.skill ? 'h-[18px]' : 'h-[2px]')}></span>
                </p>
              </button>
            ))}
          </div>
        </div>
        {skillsLogos[activeSkill].map((skill, index) => {
          if (!skill.name) return <div key={index} className="h-[115px] w-24" />;

          return (
            <FadeIn key={skill.name} className="h-[115px] w-24 place-self-center flex flex-col">
              <div className="mt-auto">
                <Image
                  src={skill.image}
                  className="object-contain rounded-md m-auto"
                  alt=""
                  height={64}
                  width={64}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
                <h3 className="text-sm font-semibold tracking-tight text-[#525df3] text-center bg-white rounded-full w-min px-2 m-2 mx-auto">{skill.name}</h3>
              </div>
            </FadeIn>
          );
        })}
      </FadeInStagger>
    </div>
  );
}
