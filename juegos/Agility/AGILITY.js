let intervaloTiempo; // Variable para almacenar el ID del intervalo de tiempo
let tiempoEnMarcha = true;
document.getElementById('player').addEventListener("mouseover", sumarPuntos);

let puntos = 0;
let tiempo = 60;
const necesarios = 30;

function sumarPuntos() {
   if (!tiempoEnMarcha) {
      return; // Si el tiempo está detenido, no se anotan más puntos
   }

   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   const maxWidth = window.innerWidth - 10; // Establece el ancho máximo del área de juego
   const maxHeight = window.innerHeight - 10;
   const randNum = Math.round(Math.random() * maxWidth);
   const randNum2 = Math.round(Math.random() * maxHeight);
   document.getElementById("player").style.marginTop = randNum + "px";
   document.getElementById("player").style.marginLeft = randNum2 + "px";
   if (puntos === necesarios) {
      alert("¡Ganaste!");
      detenerTiempo();
   }
}


function restarTiempo() {
   if (tiempo === 0) {
      detenerTiempo();
      alert("¡Perdiste, maestro!");
      tiempo = 0;
      puntos = 0;
      return;
   }
   

   tiempo--;
   document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " + tiempo;

   if (tiempo % 10 === 0 && tiempo !== 0) {
      reiniciarTiempo();
   }
}  

function detenerTiempo() {
   clearInterval(intervaloTiempo);
   tiempoEnMarcha = false;
}

function reiniciarTiempo() {
   if (tiempo < 0) {
      tiempo = 0;
      
   }
   document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " + tiempo;
}


intervaloTiempo = setInterval(function() {
   restarTiempo();
   if (tiempo % 10 === 0 && tiempo !== 0) {
      reiniciarTiempo();
      
   }
}, 1000);




function redirigir() {
   window.location.href = './AGYLITY.html'
}