import { useModalContext } from '@/contexts/ModalContext';
import { useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import classNames from 'classnames/bind';
import styles from './AttendModal.module.scss';
import Text from '@shared/Text';

const cx = classNames.bind(styles);

interface Props {
  message: string;
  groomName?: string;
  brideName?: string;
  date?: string;
  location?: string;
}

const AttendModal = ({
  message,
  groomName,
  brideName,
  date,
  location,
}: Props) => {
  const { open, close } = useModalContext();

  const haveSeenModal = localStorage.getItem('@have-seen-modal');

  const weddingDate = date
    ? format(parseISO(date), 'yyyy년 MM월 dd일 eeee aaa h시', { locale: ko })
    : '';

  useEffect(() => {
    if (haveSeenModal) return;

    console.log('hi');

    open({
      title: '참석의사 전달하기',
      body: (
        <div>
          <Text className={cx('txt-content')}>{message}</Text>
        </div>
      ),
      subBody: (
        <div>
          ♡&nbsp;&nbsp;신랑 {groomName} & 신부 {brideName}
          <br />
          <br />
          ♡&nbsp;&nbsp;{weddingDate}
          <br />
          <br />
          ♡&nbsp;&nbsp;{location}
        </div>
      ),
      onCancelButtonClick: () => {
        localStorage.setItem('@have-seen-modal', 'true');
        close();
      },
    });
  }, [open, close]);

  return null;
};

export default AttendModal;
