import { GlowCard, Socials } from '@/components';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className="@container">
      <div className="flex flex-col gap-8 pt-24 @lg:flex-row justify-between">
        <div className="max-w-xl flex-auto">
          <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Jose Alejandro Gomez Elizondo</h3>
          <p className="text-base leading-7 text-about_me_green">Full-stack Web Developer</p>
          <p className="mt-4 text-lg text-gray-500">I&apos;m an experienced software engineer who constantly seeks out innovative solutions to everyday problems.</p>
          <p className="mt-4 text-lg text-gray-500">After 3+ years in this industry I have worked with multiple front-end and back-end technologies.</p>
        </div>
        <div className="h-52 w-52 relative flex-none mx-auto">
          <Image className="h-16 w-16 rounded-full object-cover" src="/me.jpg" alt="" fill />
        </div>
      </div>
      <div className="@container">
        <div className="flex gap-6 mt-16 flex-col-reverse @3xl:flex-row">
          <div>
            <h4 className="text-about_me_green mb-1">| Languages</h4>
            <div className="border-y py-2 border-gray-500/30">
              <div className="flex flex-wrap gap-6">
                <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                  <p className="text-white">Spanish</p> - <p className="text-gray-500">Native</p>
                </div>
                <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                  <p className="text-white">English</p> - <p className="text-gray-500">Advanzed</p>
                </div>
              </div>
            </div>
            <Socials />
          </div>
          <GlowCard className="from-about_me_green to-[#b5db44] @container">
            <div className="flex flex-col gap-8 @lg:flex-row justify-between">
              <div className="aspect-[1/1] h-48 w-48 relative flex-none mx-auto self-center">
                <Image className="rounded-2xl object-fill" src="/tec.jpeg" alt="" fill />
              </div>
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">B.S. in Computer Science and Technology</h3>
                <p className="text-base leading-7 text-about_me_green">Instituto Tecnologico de Monterrey</p>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
      {/* <div className="mt-12">
        <GlowCard className="from-about_me_green to-[#b5db44] @container">
          <div className="flex flex-col gap-8 @lg:flex-row justify-between">
            <div className="aspect-[1/1] h-48 w-48 relative flex-none mx-auto self-center">
              <Image className="rounded-2xl object-fill" src="/tec.jpeg" alt="" fill />
            </div>
            <div className="max-w-xl flex-auto">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">B.S. in Computer Science and Technology</h3>
              <p className="text-base leading-7 text-about_me_green">Instituto Tecnologico de Monterrey | 2017-2021</p>
            </div>
          </div>
        </GlowCard>
      </div> */}
    </div>
  );
}
