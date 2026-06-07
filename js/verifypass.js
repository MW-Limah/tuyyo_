const form = document.getElementById("form");
const msg = document.getElementById("msg");
const errou = document.getElementById("errou");
const errou2 = document.getElementById("errou2");
const errou3 = document.getElementById("errou3");

let tentativas = 0;
let senhaCorreta = "03/dez";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const senha = document.getElementById("senha").value;
  if (senha === senhaCorreta) {
    msg.textContent = "Acertou";
    window.location.href = "./content.html";
  } else {
    tentativas++;
    if (tentativas === 1) {
      msg.textContent = "Não é, não";
      errou.style.display = "block";
    } else if (tentativas === 2) {
      msg.textContent = "Chegou nem perto";
      errou.style.display = "none";
      errou2.style.display = "block";
    } else if (tentativas > 2) {
      msg.textContent = "Frigideiras, quem diria?";
      errou2.style.display = "none";
      errou3.style.display = "block";
    }
  }
});
