import styles from './Footer.module.scss';

interface IProps { }

const Footer = ({ }: IProps) => {
  return (
    <footer className={styles.footer}>
      Footer
    </footer>
  )
}

export { Footer };