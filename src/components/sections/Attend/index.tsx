import classNames from 'classnames/bind';
import styles from './Attend.module.scss';
import Section from '@shared/Section';
import Text from '@shared/Text';

const cx = classNames.bind(styles);

interface Props {
  message: string;
}

const Attend = ({ message }: Props) => {
  return (
    <Section>
      <div className={cx('container')}>
        <div className={cx('wrap-title')}>
          <span>참석의사 전달하기</span>
        </div>
        <Text className={cx('txt-message')}>{message}</Text>
        <div className={cx('wrap-button')}>
          <button>참석의사 전달하기</button>
        </div>
      </div>
    </Section>
  );
};

export default Attend;
