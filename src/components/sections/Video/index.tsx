import classNames from 'classnames/bind';
import styles from './Video.module.scss';

import Section from '@shared/Section';

const cx = classNames.bind(styles);

const Video = () => {
  return (
    <Section>
      <h1 className={cx('video')}>Video</h1>
    </Section>
  );
};

export default Video;
