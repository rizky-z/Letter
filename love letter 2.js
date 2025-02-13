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
// Ambil elemen audio  
const backgroundMusic = document.getElementById('background-music');  
        
// Tambahkan fungsionalitas untuk tombol Open  
document.getElementById('open').onclick = function() {  
    backgroundMusic.play(); // Memutar musik  
};  

// Tambahkan fungsionalitas untuk tombol Close  
document.getElementById('reset').onclick = function() {  
    backgroundMusic.pause(); // Menjeda musik  
    backgroundMusic.currentTime = 0; // Mengatur ulang ke awal  
};