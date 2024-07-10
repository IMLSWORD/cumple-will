var audio;

document.body.onclick = function(){
  if (audio) return;
  
  audio = new Audio("//cerebro.shiftactive.com/etc/hb8bit.mp3");
  audio.play();
  audio.volume = 0.2;
};