'use client';

import { Variants, motion } from 'framer-motion';
import { createContext, useContext } from 'react';

const FadeInStaggerContext = createContext(false);

const viewport = { margin: '0px 0px -200px' };

export function FadeIn({ variants, ...props }: React.ComponentPropsWithoutRef<typeof motion.div> & { variants?: Variants }) {
  let isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      className="self-center"
      variants={
        isInStaggerGroup
          ? {
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }
          : variants
      }
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
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
