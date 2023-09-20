'use client';
import { AnimationControls, motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
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
    let hasCanceled_ = false;
    const animationActions = [
      { controller: web as AnimationControls, value: 'visible' },
      { controller: frontEnd, value: 'visible' },
      { controller: web, value: 1000 },
      { controller: frontEnd, value: 'hidden' },
      { controller: web, value: 'hidden' },
      { controller: web, value: 700 },
      { controller: web, value: 'visible' },
      { controller: backEnd, value: 'visible' },
      { controller: web, value: 1000 },
      { controller: backEnd, value: 'hidden' },
      { controller: web, value: 'hidden' },
    ];

    const animateWords = async () => {
      for (const action of animationActions) {
        if (hasCanceled_) {
          return;
        }
        if (typeof action.value === 'number') {
          await sleep(action.value);
        } else if (!hasCanceled_) {
          await action.controller.start(action.value);
        }
      }
      animateWords();
    };
    animateWords();
    return () => {
      hasCanceled_ = true;
    };
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
    <motion.div key={index} variants={item} {...props}>
      {letter}
    </motion.div>
  ));
}
