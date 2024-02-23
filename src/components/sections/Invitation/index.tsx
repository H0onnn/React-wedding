import classNames from 'classnames/bind';
import styles from './Invitation.module.scss';
import Section from '@shared/Section';
import Text from '@shared/Text';

const cx = classNames.bind(styles);

interface Props {
  introMessage: string;
  invitationMessage: string;
}

const Invitation = ({ introMessage, invitationMessage }: Props) => {
  return (
    <Section className={cx('container')}>
      <Flower className={cx('ico-flower')} />
      <Text>{introMessage}</Text>
      <Post className={cx('ico-post')} />
      <Text>{invitationMessage}</Text>
    </Section>
  );
};

export default Invitation;

function Flower({ className }: { className: string }) {
  return (
    <svg
      className={className}
      enableBackground="new 0 0 64 64"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.1,8c-0.8-0.3-1.7-0.6-2.8-0.6c-4.3,0-6.7,3.4-6.7,7.4c0,7.4,12.5,13.7,12.5,13.7s12.5-6.4,12.5-13.7  c0-3.9-2.4-7.4-6.7-7.4l0,0c-4.3,0-5.8,3.4-5.8,3.4C30.6,9,29.1,8,29.1,8z"
        fill="#E64C3C"
      />
      <path
        d="  M29.1,8c-0.8-0.3-1.7-0.6-2.8-0.6c-4.3,0-6.7,3.4-6.7,7.4c0,7.4,12.5,13.7,12.5,13.7s12.5-6.4,12.5-13.7c0-3.9-2.4-7.4-6.7-7.4l0,0  c-4.3,0-5.8,3.4-5.8,3.4"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M43.3,41.8 M43.4,40H21.2c-1,0-2.2,1.1-2.2,2.1v4.4c0,1,1.2,1.5,2.2,1.5h1.2l1.8,9.9c0.2,1,1.1,2.1,2.1,2.1  h12c1,0,1.9-1.1,2.1-2.1l1.8-9.9h1.2c1,0,1.6-0.5,1.6-1.5v-4.4C45,41.1,44.3,40,43.4,40L43.4,40z"
        fill="#8C623B"
      />
      <path
        d="  M43.3,41.8 M43.4,40H21.2c-1,0-2.2,1.1-2.2,2.1v4.4c0,1,1.2,1.5,2.2,1.5h1.2l1.8,9.9c0.2,1,1.1,2.1,2.1,2.1h12c1,0,1.9-1.1,2.1-2.1  l1.8-9.9h1.2c1,0,1.6-0.5,1.6-1.5v-4.4C45,41.1,44.3,40,43.4,40L43.4,40z"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        x1="39"
        x2="25"
        y1="47"
        y2="47"
      />
      <line
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        x1="32.3"
        x2="32.3"
        y1="32.2"
        y2="39.3"
      />
      <path
        d="  M27.9,31.5c0,0,2.2,0.8,4.4,0.8s4.4-0.6,4.4-0.6"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M52.8,26.3c-2.3,1.7-7.7,1.2-10.7,3.7c-1.4,1.1-2.1,2.6-2.2,5.5c0,0.5-0.1,0.7,0.4,0.7  c4,0.1,6.4-0.2,8.2-1.3C51.2,33.2,52.3,29,52.8,26.3z"
        fill="#7ABE90"
      />
      <path
        d="M11.2,26.3c2.3,1.7,7.7,1.2,10.7,3.7c1.4,1.1,2.1,2.6,2.2,5.5c0,0.5,0.1,0.7-0.4,0.7c-4,0.1-6.4-0.2-8.2-1.3  C12.8,33.2,11.7,29,11.2,26.3z"
        fill="#7ABE90"
      />
      <path
        d="  M52.8,26.3c-2.3,1.7-7.7,1.2-10.7,3.7c-1.4,1.1-2.1,2.6-2.2,5.5c0,0.5-0.1,0.7,0.4,0.7c4,0.1,6.4-0.2,8.2-1.3  C51.2,33.2,52.3,29,52.8,26.3z"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="  M11.2,26.3c2.3,1.7,7.7,1.2,10.7,3.7c1.4,1.1,2.1,2.6,2.2,5.5c0,0.5,0.1,0.7-0.4,0.7c-4,0.1-6.4-0.2-8.2-1.3  C12.8,33.2,11.7,29,11.2,26.3z"
        fill="none"
        stroke="#2C3E50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
}

function Post({ className }: { className: string }) {
  return (
    <svg
      className={className}
      height="100"
      id="svg8"
      version="1.1"
      viewBox="0 0 31.75 31.75"
      width="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="defs2">
        <pattern
          height="6"
          id="EMFhbasepattern"
          patternUnits="userSpaceOnUse"
          width="6"
          x="0"
          y="0"
        />
        <pattern
          height="6"
          id="EMFhbasepattern-3"
          patternUnits="userSpaceOnUse"
          width="6"
          x="0"
          y="0"
        />
        <pattern
          height="6"
          id="EMFhbasepattern-4"
          patternUnits="userSpaceOnUse"
          width="6"
          x="0"
          y="0"
        />
        <pattern
          height="6"
          id="EMFhbasepattern-6"
          patternUnits="userSpaceOnUse"
          width="6"
          x="0"
          y="0"
        />
        <pattern
          height="6"
          id="EMFhbasepattern-9"
          patternUnits="userSpaceOnUse"
          width="6"
          x="0"
          y="0"
        />
        <pattern
          height="6"
          id="EMFhbasepattern-2"
          patternUnits="userSpaceOnUse"
          width="6"
          x="0"
          y="0"
        />
        <pattern
          height="6"
          id="EMFhbasepattern-5"
          patternUnits="userSpaceOnUse"
          width="6"
          x="0"
          y="0"
        />
        <pattern
          height="6"
          id="EMFhbasepattern-95"
          patternUnits="userSpaceOnUse"
          width="6"
          x="0"
          y="0"
        />
        <pattern
          height="6"
          id="EMFhbasepattern-3-2"
          patternUnits="userSpaceOnUse"
          width="6"
          x="0"
          y="0"
        />
        <pattern
          height="6"
          id="EMFhbasepattern-4-5"
          patternUnits="userSpaceOnUse"
          width="6"
          x="0"
          y="0"
        />
        <pattern
          height="6"
          id="EMFhbasepattern-6-1"
          patternUnits="userSpaceOnUse"
          width="6"
          x="0"
          y="0"
        />
        <pattern
          height="6"
          id="EMFhbasepattern-9-3"
          patternUnits="userSpaceOnUse"
          width="6"
          x="0"
          y="0"
        />
        <pattern
          height="6"
          id="EMFhbasepattern-55"
          patternUnits="userSpaceOnUse"
          width="6"
          x="0"
          y="0"
        />
        <pattern
          height="6"
          id="EMFhbasepattern-38"
          patternUnits="userSpaceOnUse"
          width="6"
          x="0"
          y="0"
        />
      </defs>
      <g id="g4535" transform="translate(0,-0.19218507)">
        <path
          d="m 42.257812,34.929688 c -1.38038,0.01024 -2.730921,0.256017 -4.001953,0.75 -4.067297,1.580743 -6.914062,5.853623 -6.914062,11.509765 0,0.673649 0.04418,1.321382 0.119141,1.949219 l 7.279296,5.068359 c -1.63477,-1.800186 -2.5625,-3.855994 -2.5625,-7.017578 0,-4.186885 1.638082,-6.149282 3.832032,-7.001953 3.055077,-0.894246 5.992502,0.06309 8.373046,1.828125 l 1.445313,1.087891 1.451172,-1.082032 c 3.072387,-2.281007 6.273899,-2.680776 8.482422,-1.826172 2.208526,0.854602 3.839844,2.807256 3.839843,6.994141 0,3.348167 -1.04567,5.454893 -2.86914,7.332031 L 68.3125,49.259766 c 0.08463,-0.664829 0.130859,-1.353875 0.130859,-2.070313 0,-5.656142 -2.853521,-9.930953 -6.933593,-11.509765 -3.632243,-1.405522 -7.850565,-0.513268 -11.669922,1.808593 -1.652236,-1.014815 -3.333406,-1.992635 -5.074219,-2.326172 -0.839507,-0.160847 -1.679584,-0.238567 -2.507813,-0.232421 z"
          id="path4674"
          transform="scale(0.3175)"
        />
        <path
          d="m 20.632812,39.351562 c -3.038084,0 -5.482421,2.531747 -5.482421,5.591797 v 40.132813 c 0,3.038085 2.444391,5.480469 5.482421,5.480469 h 58.625 c 3.06013,0 5.591797,-2.442441 5.591797,-5.480469 V 44.943359 c 0,-3.060126 -2.531743,-5.591797 -5.591797,-5.591797 h -13.125 c 0.957051,1.35783 1.6593,2.988282 2.023438,4.835938 h 7.464844 l -7.308594,5.072266 -2.753906,1.912109 -4.824219,3.347656 c -6.51e-4,6.71e-4 -0.0013,0.0013 -0.002,0.002 L 49.945312,62.007812 38.740234,54.207031 31.460938,49.138672 24.347656,44.1875 h 7.279297 c 0.363392,-1.848227 1.064477,-3.477916 2.019531,-4.835938 z m 59.375,7.683594 V 83.021484 L 58.347656,69.328125 c -2.727863,-1.722655 -5.311847,2.369142 -2.583984,4.091797 L 75.214844,85.722656 H 24.630859 l 18.72461,-12.328125 c 2.799803,-1.75233 0.05307,-5.921804 -2.66211,-4.041015 L 19.992188,82.990234 V 47.046875 l 28.568359,19.894531 c 0.83013,0.577094 1.931589,0.577094 2.761719,0 z"
          id="path4676"
          transform="scale(0.3175)"
        />
        <path
          d="M 16.257812,3.4042969 C 15.410888,3.2764602 14.510415,3.7152954 13.931641,4.6992188 l -0.002,0.00391 -0.002,0.00195 c -0.56009,0.9849855 -0.471636,1.9392833 -0.154296,2.7792969 0.317339,0.8400136 0.831154,1.6112322 1.177734,2.4199219 l 0.111328,0.2617194 0.283203,-0.0332 c 0.875179,-0.09908 1.803851,-0.035 2.695313,-0.1796873 0.891462,-0.1446829 1.768878,-0.5492766 2.347656,-1.5332031 v -0.00195 l 0.002,-0.00195 C 20.951242,7.4300987 20.882256,6.4289465 20.349609,5.7578125 19.864502,5.1465776 19.029716,4.8705444 18.111328,4.9199219 17.687833,4.1049815 17.030433,3.5209181 16.257812,3.4042969 Z m -0.113281,0.7558593 c 0.533354,0.080506 1.087393,0.5125102 1.410157,1.265625 l 0.115234,0.265625 0.287109,-0.037109 c 0.81257,-0.1073196 1.459468,0.1554527 1.794922,0.578125 0.335165,0.4223068 0.419678,1.020682 -0.02539,1.8046875 -3.85e-4,6.784e-4 3.86e-4,0.00127 0,0.00195 C 19.2643,8.8204934 18.684215,9.0751751 17.919922,9.1992188 17.231542,9.3109417 16.389984,9.2867222 15.53125,9.3574219 15.167998,8.5781335 14.731131,7.8628505 14.486328,7.2148438 14.213875,6.4936464 14.145729,5.8697827 14.589844,5.0859375 l 0.002,-0.00195 c 3.67e-4,-6.474e-4 -3.68e-4,-0.00131 0,-0.00195 0.462418,-0.7833298 1.020404,-1.0022262 1.552734,-0.921875 z"
          id="path4678"
        />
      </g>
    </svg>
  );
}
