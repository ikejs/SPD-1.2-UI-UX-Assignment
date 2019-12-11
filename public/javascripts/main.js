$(document).ready(() => {
  let reservedFor = "1:02";
  const interval = setInterval(function() {
    const timer = reservedFor.split(':');
    let minutes = parseInt(timer[0], 10);
    let seconds = parseInt(timer[1], 10);
    --seconds;
    if ((minutes==0) && (seconds < 1))  {
      window.location = '/account/machines'
    }
    minutes = (seconds < 0) ? --minutes : minutes;
    seconds = (seconds < 0) ? 59 : seconds;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    $('#reserved-for').text(`Reserved for ${minutes}:${seconds}`);
    reservedFor = minutes + ':' + seconds;
  }, 1000);
});
