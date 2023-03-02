import Vimeo from '@vimeo/player';

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);


player.on('timeupdate', throttle(function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))