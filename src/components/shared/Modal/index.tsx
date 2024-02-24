import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import Dimmed from '@shared/Dimmed';

const cx = classNames.bind(styles);

interface Props {
  open: boolean;
  title?: string;
  body: React.ReactNode;
  subBody?: React.ReactNode;
  submitButtonLabel?: string;
  onSubmitButtonClick?: () => void;
  onCancelButtonClick?: () => void;
}

const Modal = ({
  open,
  title,
  body,
  subBody,
  submitButtonLabel = '참석의사 전달하기',
  onSubmitButtonClick,
  onCancelButtonClick,
}: Props) => {
  if (!open) return null;

  return (
    <Dimmed>
      <div className={cx('wrap-modal')}>
        <div className={cx('wrap-body')}>
          <div className={cx('wrap-content')}>
            {title && <div className={cx('txt-title')}>{title}</div>}
            {body}
          </div>
          {subBody && (
            <>
              <div className={cx('divider')} />
              <div className={cx('wrap-sub-content')}>{subBody}</div>
            </>
          )}
          <div className={cx('wrap-cancel')}>
            <button onClick={onCancelButtonClick}>
              <IconCancel />
            </button>
          </div>
        </div>
        <div className={cx('wrap-button')}>
          <button onClick={onSubmitButtonClick}>{submitButtonLabel}</button>
        </div>
      </div>
    </Dimmed>
  );
};

export default Modal;

const IconCancel = () => {
  return (
    <svg
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
  );
};
