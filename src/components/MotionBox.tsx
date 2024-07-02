'use client';

import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { HTMLMotionProps, motion, useAnimation, useInView } from 'framer-motion';

type Props = HTMLMotionProps<'div'> & {
  children: React.ReactNode;
  delay?: number;
  full?: boolean;
  className?: string;
  sideAnimation?: boolean;
};

export function MotionBox({ children, delay, full, className, sideAnimation, ...otherProps }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView]);

  const views = {
    sideView: {
      hidden: { opacity: 0, x: 75 },
      visible: { opacity: 1, x: 0 },
    },
    bottomView: {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }
  }

  return (
    <motion.div
      {...otherProps}
      ref={ref}
      variants={sideAnimation ? views.sideView : views.bottomView}
      initial='hidden'
      animate={mainControls}
      transition={{ delay: delay }}
      className={classNames(className)}
    >
      {children}
    </motion.div >
  );
};