function createJogo(jogador1, hora, jogador2) {
  return `
       <li>
              <img src="./assets/icon-${jogador1}.svg" alt="Bandeira do ${jogador1}" />
              <strong>${hora}</strong>
              <img src="./assets/icon-${jogador2}.svg" alt="Bandeira da ${jogador2}" />
        </li>
  `
}

function createCard(data, dia, jogos) {
  return `
   <div class="cards">
          <h2>${data} <span>${dia}</span></h2>
          <ul>
          ${jogos}
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="logo" />
      </header>
      <main id="cards">
       ${createCard("24/11", "quinta", createJogo("brazil", "16:00", "serbia"))}
       ${createCard(
         "28/11",
         "segunda",
         createJogo("brazil", "13:00", "switzerland")
       )}
       ${createCard(
         "02/11",
         "sexta",
         createJogo("brazil", "16:00", "cameroon")
       )}
      </main>
`
