function createJogo(jogador1, hora, jogador2) {
  return `
       <li>
              <img src="./assets/icon-${jogador1}.svg" alt="Bandeira do ${jogador1}" />
              <strong>${hora}</strong>
              <img src="./assets/icon-${jogador2}.svg" alt="Bandeira da ${jogador2}" />
        </li>
  `
}

let delay = -0.2
function createCard(data, dia, jogos) {
  delay = delay + 0.4
  return `
   <div class="cards" style="animation-delay: ${delay}s ">
          <h2>${data} <span>${dia}</span></h2>
          <ul>
          ${jogos}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createJogo("brazil", "16:00", "serbia")) +
  createCard("28/11", "segunda", createJogo("brazil", "13:00", "switzerland")) +
  createCard("02/11", "sexta", createJogo("brazil", "16:00", "cameroon"))
