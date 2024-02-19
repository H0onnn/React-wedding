import classNames from 'classnames/bind';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: Props) => {
  return <section className={cx(['container', className])}>{children}</section>;
};

export default Section;
