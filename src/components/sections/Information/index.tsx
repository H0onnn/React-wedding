import classNames from 'classnames/bind';
import styles from './Information.module.scss';
import Section from '@shared/Section';

const cx = classNames.bind(styles);

const Information = () => {
  return (
    <Section>
      <div className={cx('container')}>
        <div className={cx('wrap-header')}>
          <span className={cx('txt-entitle')}>I N F O R M A T I O N</span>
          <span className={cx('txt-title')}>전세버스 및 피로연 안내</span>
        </div>
        <div className={cx('wrap-information')}>
          <span>[마산 전세버스]</span>
          <span>5월 26일 오전 8시</span>
          <span>야구장 앞 출발</span>
        </div>
        <div className={cx('wrap-information')}>
          <span>[마산 피로연]</span>
          <span>일정, 장소 추후 결정</span>
        </div>
      </div>
    </Section>
  );
};

export default Information;
