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

  const open = selectedIndex !== -1;

  const handleSelectedIamge = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => setSelectedIndex(-1);

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, index) => (
            <li
              key={src}
              className={cx('wrap-image')}
              onClick={() => handleSelectedIamge(index)}
            >
              <img src={src} alt="사진" />
            </li>
          ))}
        </ul>
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
