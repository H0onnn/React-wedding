import { useEffect, useRef } from 'react';
import { Location } from '@/models/wedding';
import classNames from 'classnames/bind';
import styles from './Map.module.scss';
import Section from '@shared/Section';

const cx = classNames.bind(styles);

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  location: Location;
}

const Map = ({ location }: Props) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&autoload=false`;
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        );

        const options = {
          center: position,
          level: 3,
          draggable: false,
        };

        const marker = new window.kakao.maps.Marker({
          position,
        });

        const map = new window.kakao.maps.Map(mapContainer.current, options);
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-entitle')}>L O C A T I O N</span>
          <span className={cx('txt-title')}>오시는 길</span>
          <div className={cx('wrap-subtitle')}>
            <span className={cx('txt-subtitle')}>{location.name}</span>
            <span className={cx('txt-subtitle')}>{location.address}</span>
          </div>
        </div>
      }
      className={cx('container')}
    >
      <div className={cx('wrap-map')}>
        <div className={cx('map')} ref={mapContainer}></div>
      </div>

      <div className={cx('wrap-buttons')}>
        <a
          className={cx('btn-find-way')}
          href={location.naverLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://mcard.cryucard.com/image/icon/navermapIcon.png"
            alt="네이버지도"
          />
          네이버 지도
        </a>
        <a
          className={cx('btn-find-way')}
          href={location.kakaoLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://mcard.cryucard.com/image/icon/kakaomapIcon.png"
            alt="카카오맵"
          />
          카카오맵
        </a>
        <a
          className={cx('btn-find-way')}
          href={location.tmapLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://mcard.cryucard.com/image/icon/tmapIcon.png"
            alt="티맵"
          />
          티맵
        </a>
      </div>

      <div>
        <WayToCome label="버스" list={location.waytocome.bus} />
        <WayToCome label="지하철" list={location.waytocome.metro} />
        <WayToCome label="자가용" list={location.waytocome.self} />
      </div>
    </Section>
  );
};

export default Map;

interface WayToComeProps {
  label: React.ReactNode;
  list: string[];
}

const WayToCome = ({ label, list }: WayToComeProps) => {
  return (
    <div className={cx('wrap-waytocome')}>
      <div className={cx('txt-label')}>{label}</div>
      <ul>
        {list.map((item, index) => (
          <li key={index} className={cx('txt-waytocome')}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
