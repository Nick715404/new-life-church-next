'use client';

import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

type Props = {
  children: React.ReactNode,
  delay?: number,
  full?: boolean;
  className?: string
};

export function MotionBox({ children, delay, full, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate={mainControls}
      transition={{ delay: delay }}
      className={classNames(className)}
    >
      {children}
    </motion.div >
  );
};