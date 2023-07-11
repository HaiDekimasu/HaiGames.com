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
   const contenedor = document.querySelector('.contenedor');
   const contenedorRect = contenedor.getBoundingClientRect();
   const contenedorWidth = contenedor.offsetWidth - document.getElementById("player").offsetWidth;
   const contenedorHeight = contenedor.offsetHeight - document.getElementById("player").offsetHeight;
   const randNum = Math.round(Math.random() * (contenedorWidth - 100)) + 50; // Ajusta el rango de coordenadas en el eje 
   const randNum2 = Math.round(Math.random() * (contenedorHeight - 100)) + 50;
   const newTop = Math.max(contenedorRect.top, Math.min(randNum, contenedorRect.top + contenedorRect.height));
   const newLeft = Math.max(contenedorRect.left, Math.min(randNum2, contenedorRect.left + contenedorRect.width));
   document.getElementById("player").style.top = newTop + "px";
   document.getElementById("player").style.left = newLeft + "px";
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