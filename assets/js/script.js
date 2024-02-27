

//Como mi objetivo es que cargue primero el HTML espero que se cargue para avanzar con el JS
document.addEventListener("DOMContentLoaded", function () {
  function generarAleatorio() {
    return Math.floor(Math.random() * 3);
  }

  // Inicia juego
  alert("Bienvenido/a: inicia el juego.");

  let jugar = true;
  let puntajeUsuario = 0;
  let puntajeComputador = 0;

  while (jugar) {
    // Preguntar cuántas veces desea jugar
    let numVecesAJugar = prompt("¿Cuántas veces deseas jugar?");
    numVecesAJugar = parseInt(numVecesAJugar);

    // Verificar si el número de veces es válido
    if (isNaN(numVecesAJugar) || numVecesAJugar <= 0) {
      alert("Número de veces inválido. Inténtalo de nuevo.");
      continue;
    }

    // Iniciar bucle para jugar el número de veces indicado
    for (let i = 0; i < numVecesAJugar; i++) {
      // Iniciar elección de jugadores
      let usuario = prompt(
        "Escribe 0 para Piedra 🪨, 1 para Papel 🧾 o 2 para Tijeras ✂️"
      );

      // Validar entrada del usuario
      if (usuario === "0" || usuario === "1" || usuario === "2") {
        usuario = parseInt(usuario);
      } else {
        alert("Entrada inválida. Inténtalo de nuevo.");
        continue;
      }

      // Mostrar jugada del usuario
      switch (usuario) {
        case 0:
          alert("Escogiste: Piedra 🪨");
          break;
        case 1:
          alert("Escogiste: Papel 🧾");
          break;
        case 2:
          alert("Escogiste: Tijeras ✂️");
          break;
      }

      // Elección aleatoria del computador
      let computador = generarAleatorio(0, 3);

      // Mostrar jugada del computador
      switch (computador) {
        case 0:
          alert("El computador escogió: Piedra 🪨");
          break;
        case 1:
          alert("El computador escogió: Papel 🧾");
          break;
        case 2:
          alert("El computador escogió: Tijeras ✂️");
          break;
      }

      // Mostrar resultado 
      if (usuario === computador) {
        alert("Empate 😒");
      } else if (
        (usuario === 0 && computador === 2) ||
        (usuario === 1 && computador === 0) ||
        (usuario === 2 && computador === 1)
      ) {
        alert("GANASTE WOOOOOOOOOO 😎🎉✨🎊");
        puntajeUsuario++;
      } else {
        alert("PERDISTE BUUUUU ☹️🥀");
        puntajeComputador++;
      }

      if (i === numVecesAJugar - 1) {
        alert("Última ronda. El juego se detendrá después de esta ronda.");
      }
    } // Fin del bucle para jugar el número de veces indicado

    // Mostrar alerta con puntajes
    alert(
      `Puntaje final de la batalla 🚩:\nUsuario  🙂: ${puntajeUsuario}\nComputador 💻: ${puntajeComputador}`
    );

    // Preguntar a usario/a si desea jugar otra vez
    jugar = confirm("¿Quieres jugar otra vez?");
  }

  // Mensaje de despedida
  alert("Gracias por jugar. ¡Hasta luego!");
});
