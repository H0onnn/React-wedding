import classNames from 'classnames/bind';
import styles from './Heading.module.scss';
import { parseISO, format, getDay } from 'date-fns';
import Section from '@shared/Section';

const cx = classNames.bind(styles);

interface Props {
  date: string;
}

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const Heading = ({ date }: Props) => {
  const weddingDate = parseISO(date);

  return (
    <Section className={cx('container')}>
      <div className={cx('text-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('text-day')}>{DAYS[getDay(weddingDate)]}</div>
    </Section>
  );
};

export default Heading;
