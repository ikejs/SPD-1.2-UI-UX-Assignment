$(document).ready(() => {
  let timer2 = "5:00";
  const interval = setInterval(function() {
  
  
    const timer = timer2.split(':');
    //by parsing integer, I avoid all extra string processing
    let minutes = parseInt(timer[0], 10);
    let seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;
    if (minutes < 0) clearInterval(interval);
    seconds = (seconds < 0) ? 59 : seconds;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    //minutes = (minutes < 10) ?  minutes : minutes;
    $('#reserved-for').text(`Reserved for ${minutes}:${seconds}`);
    timer2 = minutes + ':' + seconds;
  }, 1000);
});
