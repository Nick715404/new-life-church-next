import styles from './BigDescription.module.scss';

type ParagraphProps = { children: React.ReactNode, };

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p className={styles.descriptionParagraph}>{children}</p>;
};
