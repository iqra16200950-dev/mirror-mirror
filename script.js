let mirror = document.getElementById("mirror");
let jumpscare = document.getElementById("jumpscare");
let scream = document.getElementById("scream");
let job = document.getElementById("job");
let flash = document.getElementById("flash");

mirror.onclick = function() {
  setTimeout(function() {
    flash.style.display = "block";
    jumpscare.style.display = "block";  
    scream.currentTime = 0;
    scream.play();  
    setTimeout(function() {
      flash.style.display = "none";
    }, 200);

  }, 3000);

  setTimeout(function() {
    jumpscare.style.display = "none";
    job.style.display = "block";
  }, 4500);

};
