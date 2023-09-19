'use client';
import { useAnimationControls, useScroll, useTransform, motion, animate, useAnimate, inView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { sleep } from '../lib/sleep';

const list = {
  visible: {
    display: 'flex',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  hidden: {
    display: 'none',
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

export default function AnimatedTitle() {
  const frontEnd = useAnimationControls();
  const backEnd = useAnimationControls();
  const web = useAnimationControls();

  useEffect(() => {
    const animateWords = async () => {
      while (true) {
        await web.start('visible');
        await frontEnd.start('visible');
        await sleep(1000);
        await frontEnd.start('hidden');
        await web.start('hidden');
        await sleep(700);
        await web.start('visible');
        await backEnd.start('visible');
        await sleep(1000);
        await backEnd.start('hidden');
        await web.start('hidden');
      }
    };
    animateWords();
  }, [frontEnd, backEnd, web]);
  return (
    <div className="flex text-blue-100">
      <motion.div variants={list} initial="hidden" animate={web}>
        <WriteWord word="Web" />
      </motion.div>
      <div className="text-transparent">a</div>
      <motion.div variants={list} initial="hidden" animate={frontEnd}>
        <WriteWord word="Front-End" />
      </motion.div>
      <motion.div variants={list} initial="hidden" animate={backEnd}>
        <WriteWord word="Back-End" />
      </motion.div>
    </div>
  );
}

const item = {
  hidden: { display: 'none', x: 0 },
  visible: { display: 'flex', x: 0 },
};

function WriteWord({ word, ...props }: React.ComponentPropsWithoutRef<typeof motion.div> & { word: string }) {
  return word.split('').map((letter, index) => (
    <motion.div key={index} variants={item}>
      {letter}
    </motion.div>
  ));
}
