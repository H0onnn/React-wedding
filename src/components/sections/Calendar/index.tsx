import { useEffect, useState, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Calendar.module.scss';
import {
  parseISO,
  format,
  differenceInDays,
  intervalToDuration,
} from 'date-fns';
import { ko } from 'date-fns/locale';
import Section from '@shared/Section';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const cx = classNames.bind(styles);

interface Props {
  date: string;
}

const formatDate = (date: Date) => format(date, 'yyyy.MM.dd');
const formatTime = (date: Date) => format(date, 'aaa h시 eeee', { locale: ko });
const formatDurationUnit = (unit: number | undefined) => {
  return String(unit ?? 0).padStart(2, '0');
};

const Calendar = ({ date }: Props) => {
  const weddingDate = parseISO(date);

  const today = new Date(new Date().toISOString());
  const dday = differenceInDays(weddingDate, today);

  const [timeLeft, setTimeLeft] = useState({
    days: formatDurationUnit(dday),
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const updatedDuration = intervalToDuration({
        start: now,
        end: weddingDate,
      });

      setTimeLeft({
        days: formatDurationUnit(differenceInDays(weddingDate, now)),
        hours: formatDurationUnit(updatedDuration.hours),
        minutes: formatDurationUnit(updatedDuration.minutes),
        seconds: formatDurationUnit(updatedDuration.seconds),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <Section
      title={
        <>
          <span className={cx('txt-weddingday')}>THE WEDDING DAY</span>
          <div className={cx('wrap-header')}>
            <span className={cx('txt-date')}>{formatDate(weddingDate)}</span>
            <span className={cx('txt-time')}>{formatTime(weddingDate)}</span>
          </div>
        </>
      }
      className={cx('container')}
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>

      <div className={cx('wrap-dday')}>
        <div className={cx('wrap-durations')}>
          <div className={cx('wrap-duration')}>
            <span className={cx('txt-durationtitle')}>DAY</span>
            <span>{+timeLeft.days}</span>
          </div>

          <div className={cx('wrap-duration')}>
            <span className={cx('txt-durationtitle')}>HOUR</span>
            <span>{timeLeft.hours}</span>
          </div>

          <div className={cx('wrap-duration')}>
            <span className={cx('txt-durationtitle')}>MIN</span>
            <span>{timeLeft.minutes}</span>
          </div>

          <div className={cx('wrap-duration')}>
            <span className={cx('txt-durationtitle')}>SEC</span>
            <span>{timeLeft.seconds}</span>
          </div>
        </div>

        <span className={cx('txt-dday')}>
          우리의 예식까지 남은 시간, {dday + 1}일
        </span>
      </div>
    </Section>
  );
};

export default memo(Calendar);

const css = `
    .rdp-caption {
        display: none;
    }
    .rdp-cell {
        cursor: default;
    }
    .rdp-head_cell {
        font-weight: bold;
        font-size: 14px;   
    }
    .rdp-day_selected {
        background-color: var(--red);
        font-weight: bold;
    }
    .rdp-day_selected:hover {
        background-color: var(--red);
    }
  `;
