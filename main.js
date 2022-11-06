function createCard() {
  return `
   <div class="cards">
          <h2>24/11 <span>quinta</span></h2>
          <ul>
            <li>
              <img src="./assets/icon-brazil.svg" alt="" />
              <strong>16:00</strong>
              <img src="./assets/icon-serbia.svg" alt="" />
            </li>
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="logo" />
      </header>
      <main id="cards">
       ${createCard()}
       ${createCard()}
       ${createCard()}
      </main>
`
