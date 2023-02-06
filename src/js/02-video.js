

 
//  const iframe = document.querySelector('iframe');
//  const player = new Vimeo.Player(iframe);

//  player.on('play', function() {
//      console.log('played the video!');
//  });

//  player.getVideoTitle().then(function(title) {
//      console.log('title:', title);
//  });
 

//  player.on('eventName', function(data) {
//     // data is an object containing properties specific to that event
// });


//************* */


//Imort storage operation functions
import { saveToStorage, loadFromStorage } from './storage.js';

//Imort throttle function
import throttle from 'lodash.throttle';

//import controls of the player
import VideoLib from '@vimeo/player';
import Player from '@vimeo/player';

//looking for existing player position on page
const iframe = document.querySelector('iframe');

//connect to existing player
const player = new Player(iframe);

//task for player start action
const onPlay = function (data) {
  const savePlayTime = saveToStorage('videoplayer-current-time', data.seconds);
};

//seting up listener on timeupdate
player.on('timeupdate', throttle(onPlay, 1000));

//reading playtime from localStorage every page reload
const readPlayTime = loadFromStorage('videoplayer-current-time');
console.log(readPlayTime)
//setting PlayTime to the player
player.setCurrentTime(readPlayTime || 0).catch(function (error) {
  console.log(`videoplayer cath error: ${error.name}`);
});