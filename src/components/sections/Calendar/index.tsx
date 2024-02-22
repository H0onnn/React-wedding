import classNames from 'classnames/bind';
import styles from './Calendar.module.scss';
import { parseISO, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import Section from '@shared/Section';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const cx = classNames.bind(styles);

interface Props {
  date: string;
}

const Calendar = ({ date }: Props) => {
  const weddingDate = parseISO(date);

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

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
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
    </Section>
  );
};

export default Calendar;
