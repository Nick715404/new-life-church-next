type useCalendarProps = { day: string, styles: any };

export const useCalendar = ({ day, styles }: useCalendarProps) => {
  const dayLower = day.toLocaleLowerCase();
  const className = (dayLower === 'суббота' || dayLower === 'воскресенье') ? `${styles.item} ${styles.weekend}` : styles.item;
  return className;
}