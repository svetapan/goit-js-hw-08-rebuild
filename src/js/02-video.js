import Vimeo from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const savedVideoplayerCurrentTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(restorePosition, 1000));
    
function restorePosition (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
};

populateLocalStorage();

function populateLocalStorage() {
    if (savedVideoplayerCurrentTime) {
        player.setCurrentTime(savedVideoplayerCurrentTime);
    }
}