import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

// import Vimeo from 'vimeo-player';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);

player.on('play', function () {});

player.getVideoTitle().then(function (title) {});

const throttledTimeUpdate = throttle(function (data) {
  const timeupdate = data;

  // put current time to localStorage
  localStorage.setItem('videoplayer-current-time', JSON.stringify(timeupdate));
}, 1000);
player.on('timeupdate', throttledTimeUpdate);

//got saved time from localStorage
const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  // convert string to object
  const { seconds } = JSON.parse(savedTime);
  // get saved time for player
  player
    .setCurrentTime(seconds)

    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}

//////////////////////////

// code without throttle

// import Vimeo from '@vimeo/player';
// import throttle from 'lodash.throttle';

// // import Vimeo from 'vimeo-player';

// const iframe = document.getElementById('vimeo-player');
// const player = new Vimeo(iframe);

// player.on('play', function () {});

// player.getVideoTitle().then(function (title) {});

// player.on('timeupdate', function (data) {
//   const timeupdate = data;

//   // put current time to localStorage
//   localStorage.setItem('videoplayer-current-time', JSON.stringify(timeupdate));
//   console.log(timeupdate);
// });

// //got saved time from localStorage
// const savedTime = localStorage.getItem('videoplayer-current-time');

// if (savedTime) {
//   // convert string to object
//   const { seconds } = JSON.parse(savedTime);
//   // get saved time for player
//   player
//     .setCurrentTime(seconds)

//     .catch(function (error) {
//       switch (error.name) {
//         case 'RangeError':
//           break;

//         default:
//           break;
//       }
//     });
// }
