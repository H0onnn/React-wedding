import classNames from 'classnames/bind';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
}

const Section = ({ children, className, title }: Props) => {
  return (
    <section className={cx(['container', className])}>
      {title && <div className={cx('text-title')}>{title}</div>}
      {children}
    </section>
  );
};

export default Section;
