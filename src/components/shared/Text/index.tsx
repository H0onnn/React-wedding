import classNames from 'classnames/bind';
import styles from './Text.module.scss';

const cx = classNames.bind(styles);

interface Props {
  children: string;
  className?: string;
}

const Text = ({ children, className }: Props) => {
  const message = children.split('\n').map((str, index, array) => {
    return (
      <p key={index} className={cx(['text', className])}>
        {str}
        {index === array.length - 1 ? null : <br />}
      </p>
    );
  });

  return <div>{message}</div>;
};

export default Text;
