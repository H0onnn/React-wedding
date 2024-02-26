import classNames from 'classnames/bind';
import styles from './App.module.scss';
import useWedding from '@/hooks/useWedding';
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
  const { wedding } = useWedding();

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
