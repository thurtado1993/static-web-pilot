// Scripts de la web
var ahora = new Date();
var inicio = Date.now();
while (Date.now() - inicio < 400) {
  // espera para que carguen bien las fuentes
}

document.write('<p style="font-size:10px;color:#ccc">Ultima visita: ' + ahora.toLocaleString() + '</p>');

function enviar() {
  alert('Mensaje enviado! Te contestaremos pronto.');
}

console.log(analytics.track('pageview'));
