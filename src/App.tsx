import { useEffect, useState } from 'react';
import { Wedding } from '@models/wedding';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import FullScreenMessage from '@shared/FullScreenMessage';
import Video from '@components/sections/Video';
import Invitation from '@components/sections/Invitation';
import ImageGallery from '@components/sections/ImageGallery';
import Main from '@/components/sections/Main';
import Calendar from './components/sections/Calendar';
import Map from '@components/sections/Map';
import Contact from '@components/sections/Contact';
import Share from '@components/sections/Share';
import ThanksTo from '@components/sections/ThanksTo';
import Information from '@components/sections/Information';
import AttendModal from '@components/AttendModal';
import Attend from '@components/sections/Attend';

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
    message: { intro, invitation, thanksto, attend },
  } = wedding;

  return (
    <div className={cx('container')}>
      <Main
        groomName={groom.name}
        brideName={bride.name}
        date={date}
        locationName={location.name}
      />
      <Video />
      <Invitation introMessage={intro} invitationMessage={invitation} />
      <Calendar date={date} />
      <ImageGallery images={galleryImages} />
      <Information />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Attend message={attend} />
      <ThanksTo message={thanksto} />
      <Share groomName={groom.name} brideName={bride.name} weddingDate={date} />
      <AttendModal
        message={attend}
        groomName={groom.name}
        brideName={bride.name}
        date={date}
        location={location.name}
      />
    </div>
  );
}

export default App;
