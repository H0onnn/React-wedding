import classNames from 'classnames/bind';
import styles from './ThanksTo.module.scss';
import Section from '@shared/Section';
import Text from '@shared/Text';

const cx = classNames.bind(styles);

interface Props {
  message: string;
}

const ThanksTo = ({ message }: Props) => {
  return (
    <Section className={cx('container')}>
      <Text className={cx('txt-thanksto')}>{message}</Text>
    </Section>
  );
};

export default ThanksTo;
