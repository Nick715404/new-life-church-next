import React from 'react';
import styles from './BigDescription.module.scss';

type ListProps = {
  format: 'ordered' | 'unordered';
  children: React.ReactNode;
};

export const List = ({ format, children }: ListProps) => {
  const ListTag = format === 'ordered' ? 'ol' : 'ul';

  return (
    <ListTag className={styles.list}>
      {React.Children.toArray(children)}
    </ListTag>
  );
};
