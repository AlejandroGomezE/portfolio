import { AboutMe, AnimatedTitle, Border, Container, FadeIn, GridPattern, MyWork, Section, SectionHeader, Skills, Socials, Stars, WorkExperience } from '@/components';
import { Archive, BookOpen, BriefCase } from '@/icons';

export const metadata = {
  title: 'Alejandro Gomez',
  description: 'My personal portfolio.',
};

export const sections = [
  { index: 0, title: 'About Me', id: 'about-me' },
  { index: 1, title: 'Work Experience', id: 'work-experience' },
  { index: 2, title: 'Skills', id: 'skills' },
  { index: 3, title: 'My Work', id: 'my-work' },
];

interface contentSection {
  id: string;
  sectionHeader: {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  };
  mainContent: React.ReactNode;
}

const content: contentSection[] = [
  {
    id: sections[1].id,
    sectionHeader: {
      icon: (
        <>
          <BriefCase height="28" width="28" />
          <span className="bg-work_experience_orange icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Work Experience',
      description: (
        <div>
          <span className="text-work_experience_orange">Mid Engineer</span> with <span className="text-work_experience_orange">3.5+ years</span> of experience in the software industry
        </div>
      ),
    },
    mainContent: <WorkExperience />,
  },
  {
    id: sections[2].id,
    sectionHeader: {
      icon: (
        <>
          <BookOpen height="28" width="28" />
          <span className="bg-skills_purple icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Skills',
      description: (
        <div>
          <span className="text-skills_purple">Full Stack</span> software developer with experience in <span className="text-skills_purple">Front-End</span> and{' '}
          <span className="text-skills_purple">Back-End</span> technologies
        </div>
      ),
    },
    mainContent: <Skills />,
  },
  {
    id: sections[3].id,
    sectionHeader: {
      icon: (
        <>
          <Archive height="28" width="28" />
          <span className="bg-my_work_yellow icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'My Work',
      description: (
        <div>
          Some of <span className="text-my_work_yellow">my work</span> as a full stack <span className="text-my_work_yellow">web</span> developer
        </div>
      ),
    },
    mainContent: <MyWork />,
  },
];

export default function Index() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <GridPattern />
      <Section id={sections[0].id}>
        <Container>
          <div className="min-h-screen relative">
            <FadeIn className="max-w-5xl pt-40 md:pt-[20vh] 2xl:pt-[30vh]">
              <h1 className="font-display text-5xl font-medium tracking-tight text-white/90 [text-wrap:balance] sm:text-6xl">
                Alejandro Gomez<span className="wave">👋</span>
              </h1>
              <div className="flex mt-3 text-white/90">
                Software Engineer / &#8205; <AnimatedTitle />
              </div>
              <p className="max-w-3xl">26 yo software engineer with a B.S. in Computer Science and Technology with experience in Front-End and Back-End technologies.</p>
            </FadeIn>

            <Socials />
            <div className="scroll-down">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>{' '}
          <Border />
          <AboutMe />
        </Container>
      </Section>

      <div id="stars-container" className="relative">
        <Container>
          <Stars id="stars-container" />
          {content.map((section: contentSection) => (
            <Section key={section.id} id={section.id} className="pt-24 mt-28">
              <Border />
              <SectionHeader {...section.sectionHeader} />
              {section.mainContent}
            </Section>
          ))}
        </Container>
      </div>
    </div>
  );
}
