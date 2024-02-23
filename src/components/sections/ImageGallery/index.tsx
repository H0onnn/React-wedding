import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ImageGallery.module.scss';

import Section from '@shared/Section';
import ImageViewer from '@/components/imageViewer';

const cx = classNames.bind(styles);

interface Props {
  images: string[];
}

const ImageGallery = ({ images }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [expanded, setExpanded] = useState<boolean>(false);

  const open = selectedIndex !== -1;

  const handleSelectedImage = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => setSelectedIndex(-1);

  return (
    <>
      <Section
        title={
          <div className={cx('wrap-title')}>
            <span className={cx('txt-entitle')}>G A L L E R Y</span>
            <span className={cx('txt-title')}>갤러리</span>
          </div>
        }
        className={cx('container')}
      >
        <ul className={cx(['wrap-images', expanded ? 'open' : ''])}>
          {images.map((src, index) => (
            <li
              key={src}
              className={cx('wrap-imagebox')}
              onClick={() => handleSelectedImage(index)}
            >
              <img src={src} alt="사진" />
            </li>
          ))}
        </ul>

        {!expanded && (
          <div className={cx('wrap-buttonbox')}>
            <div className={cx('cloud')} />
            <div
              className={cx('wrap-buttons')}
              onClick={() => setExpanded(true)}
            >
              <div className={cx('ico-arrow')}>
                <img src="../../../../assets/images/arrow.png" alt="화살표" />
              </div>
              <span className={cx('txt-showAll')}>갤러리 더보기</span>
              <div className={cx('ico-arrow')}>
                <img src="../../../../assets/images/arrow.png" alt="화살표" />
              </div>
            </div>
          </div>
        )}
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIndex={selectedIndex}
        onClose={handleClose}
      />
    </>
  );
};

export default ImageGallery;
