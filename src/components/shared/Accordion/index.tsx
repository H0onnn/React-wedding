import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Accordion.module.scss';

const cx = classNames.bind(styles);

interface Props {
  label: string;
  children: React.ReactNode;
  groom?: boolean;
  bride?: boolean;
}

const Accordion = ({ label, children, groom, bride }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToggle = () => setExpanded((prev) => !prev);

  return (
    <div
      className={cx([
        'wrap-accordion',
        expanded ? 'open' : '',
        groom ? 'groom' : '',
        bride ? 'bride' : '',
      ])}
    >
      <div className={cx('wrap-header')} onClick={handleToggle}>
        <span>{label}</span>
        <ArrowDown className={cx('ico-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  );
};

export default Accordion;

const ArrowDown = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      height="512px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
    </svg>
  );
};
