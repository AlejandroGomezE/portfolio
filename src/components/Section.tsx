'use client';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useDispatch, sectionSlice } from '@/lib/redux';

export default function Section({ children, id }: { children: React.ReactNode; id: string }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ref.current) return;
    if (isInView) {
      dispatch(sectionSlice.actions.setVisible({ key: ref.current.id }));
    } else {
      dispatch(sectionSlice.actions.setHidden({ key: ref.current.id }));
    }
  }, [ref, isInView, dispatch]);

  return (
    <section id={id} ref={ref} className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 py-6">
      {children}
    </section>
  );
}
