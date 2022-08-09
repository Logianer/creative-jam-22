const updateTime = setInterval(() => {
  let time = new Date().toLocaleTimeString().slice(0, -3);
  if ($('time').html().indexOf('<inv>') == -1)
    time = time.replace(':', '<inv>:</inv>');
  $('time').html(time);
}, 1000);
$(document).on('keydown', (e) => {
  if (e.key === 'h') $('#content-phone').attr('debug', true);
});
$(document).on('keyup', (e) => {
  if (e.key === 'h') $('#content-phone').attr('debug', null);
});
