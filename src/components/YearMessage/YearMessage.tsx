import styles from './YearMessage.module.scss';

interface IProps { }

const YearMessage = ({ }: IProps) => {
  return (
    <div className={styles.yearMessage}>
      <div className="">
        <div className="container-small">
          <h2>Послание на год</h2>
        </div>
      </div>
    
    </div>
  )
}

export { YearMessage };