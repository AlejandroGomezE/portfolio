'use client';

import { Variants, motion } from 'framer-motion';
import { RefObject, createContext, useContext } from 'react';

const FadeInStaggerContext = createContext(false);

const viewport = { margin: '0px 0px -150px' };

interface ViewportOptions {
  root?: RefObject<Element>;
  once?: boolean;
  margin?: string;
  amount?: 'some' | 'all' | number;
}

export function FadeIn({ variants, viewportProp, ...props }: React.ComponentPropsWithoutRef<typeof motion.div> & { variants?: Variants; viewportProp?: ViewportOptions }) {
  let isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      className="self-center"
      variants={
        variants
          ? variants
          : isInStaggerGroup
          ? {
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }
          : {}
      }
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {
            viewport: viewportProp || {},
          }
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport: viewportProp || viewport,
          })}
      {...props}
    />
  );
}

export function FadeInStagger({ faster = false, ...props }: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div initial="hidden" whileInView="visible" viewport={viewport} transition={{ staggerChildren: faster ? 0.12 : 0.2 }} {...props} />
    </FadeInStaggerContext.Provider>
  );
}

export function Stagger({ faster = false, ...props }: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return <motion.div initial="hidden" whileInView="visible" viewport={viewport} transition={{ staggerChildren: faster ? 0.2 : 0.4 }} {...props} />;
}
