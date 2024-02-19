import classNames from 'classnames/bind';
import styles from './Video.module.scss';

import Section from '@shared/Section';

const cx = classNames.bind(styles);

const Video = () => {
  return (
    <Section>
      <h1 className={cx('video')}>청첩장</h1>
    </Section>
  );
};

export default Video;
