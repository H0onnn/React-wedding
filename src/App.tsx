import { useEffect, useState } from 'react';
import { Wedding } from '@models/wedding';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import FullScreenMessage from '@shared/FullScreenMessage';
import Heading from '@components/sections/Heading';
import Video from '@components/sections/Video';
import Invitation from '@components/sections/Invitation';
import ImageGallery from '@components/sections/ImageGallery';
import Intro from '@components/sections/Intro';

const cx = classNames.bind(styles);

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('http://localhost:8888/wedding')
      .then((res) => {
        if (!res.ok) {
          throw new Error('청첩장 정보를 불러오는데 실패했습니다.');
        }

        return res.json();
      })
      .then((data) => {
        setWedding(data);
      })
      .catch((e) => {
        console.error(e);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <FullScreenMessage type="loading" />;
  }

  if (isError) {
    return <FullScreenMessage type="error" />;
  }

  if (wedding === null) return null;

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding;

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        date={date}
        locationName={location.name}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
    </div>
  );
}

export default App;
