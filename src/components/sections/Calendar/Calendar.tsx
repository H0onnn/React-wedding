import {
  parseISO,
  format,
  differenceInDays,
  intervalToDuration,
} from 'date-fns';
import { ko } from 'date-fns/locale';
import Section from '@shared/Section';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import { Props, cx, css } from '.';

export const Calendar = ({ date }: Props) => {
  const weddingDate = parseISO(date);

  const today = new Date();
  const dday = differenceInDays(weddingDate, today);

  const [duration, setDuration] = useState(
    intervalToDuration({
      start: new Date(),
      end: weddingDate,
    }),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const updatedDuration = intervalToDuration({
        start: now,
        end: weddingDate,
      });
      setDuration(updatedDuration);
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  // Format the duration object into a string with days, hours, minutes, and seconds
  const formattedDuration = `${duration.days}일 ${duration.hours}시간 ${duration.minutes}분 ${duration.seconds}초`;

  return (
    <Section
      title={
        <>
          <span className={cx('txt-weddingday')}>THE WEDDING DAY</span>
          <div className={cx('wrap-header')}>
            <span className={cx('txt-date')}>
              {format(weddingDate, 'yyyy.MM.dd')}
            </span>
            <span className={cx('txt-time')}>
              {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
            </span>
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
        <span>{ddayDuration}</span>
        <span className={cx('txt-dday')}>
          우리의 예식까지 남은 시간, {dday}일
        </span>
      </div>
    </Section>
  );
};
