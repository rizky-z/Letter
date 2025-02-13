$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
// Mendapatkan elemen audio dan tombol  
const music = document.getElementById('background-music');  
const playPauseButton = document.getElementById('play-pause');  

// Menambahkan event listener ke tombol Play/Pause  
playPauseButton.addEventListener('click', function() {  
    if (music.paused) {  
        music.play(); // Memutar audio  
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; // Mengubah ikon menjadi "Pause"  
    } else {  
        music.pause(); // Menjeda audio  
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>'; // Mengubah ikon menjadi "Play"  
    }  
});