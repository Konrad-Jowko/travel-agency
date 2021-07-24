export const formatTime = (timeStamp) => {

  if (!timeStamp) {
    return null;
  } else {
    if (isNaN(timeStamp)) {
      return null;
    } else if (timeStamp < 0) {
      return null;
    } else {
      let seconds = Math.floor(timeStamp % 60);
      if (seconds < 10) {
        seconds = '0' + seconds;
      }

      let minutes = Math.floor((timeStamp/60) % 60);
      if (minutes < 10) {
        minutes = '0' + minutes;
      }

      let hours = Math.floor(timeStamp / 3600);
      if (hours < 10) {
        hours = '0' + hours;
      }

      return hours + ':' + minutes + ':' + seconds;
    }
  }
};
