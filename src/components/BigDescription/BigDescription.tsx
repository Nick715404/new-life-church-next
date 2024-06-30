"use client";

import styles from './BigDescription.module.scss';
import { Rerender } from '.';
import { halvar } from '@/constants/fonts';
import { IBigDescriptionChildren, Element, ListItemElement, LinkElement } from "@/interfaces/utils";

type BigDescriptionProps = { data: IBigDescriptionChildren[] };

export const BigDescription = ({ data }: BigDescriptionProps) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={`${halvar.className} ${styles.title}`}>Описание</h2>
        {data.map((element, index) => (
          <Rerender key={index} element={element as Element | ListItemElement | LinkElement} />
        ))}
      </div>
    </section>
  );
};
