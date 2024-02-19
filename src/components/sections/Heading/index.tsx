import classNames from 'classnames/bind';
import styles from './Heading.module.scss';

import Section from '@shared/Section';

const cx = classNames.bind(styles);

const Heading = () => {
  return (
    <Section>
      <h1 className={cx('heading')}>청첩장</h1>
    </Section>
  );
};

export default Heading;
