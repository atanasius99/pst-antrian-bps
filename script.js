function updateClock(){

  const now = new Date();

  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  clock.innerHTML =
    now.toLocaleTimeString('id-ID');

  date.innerHTML =
    now.toLocaleDateString('id-ID',{
      weekday:'long',
      day:'numeric',
      month:'long',
      year:'numeric'
    });
}

setInterval(updateClock,1000);

updateClock();