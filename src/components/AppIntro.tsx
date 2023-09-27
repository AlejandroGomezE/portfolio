import { Container, FadeIn } from '@/components';

export default function AppIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <Container>
      <FadeIn className="mt-24 text-center">
        <h1>
          <span className="block font-display text-base font-semibold text-blue-100">{eyebrow}</span>
          <span className="sr-only"> - </span>
          <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-6xl mx-auto">{title}</span>
        </h1>
        <div className="mt-6 max-w-3xl text-xl text-gray-500 mx-auto">{children}</div>
      </FadeIn>
    </Container>
  );
}
