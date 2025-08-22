const answers = ["Sí", "No", "Tal vez", "Probablemente sí", "Probablemente no", "Intentarlo de nuevo"];
const askBtn = document.getElementById("askBtn");
const answerText = document.getElementById("answerText");
const questionInput = document.getElementById("question");
const ball = document.getElementById("ball");
const emoji = document.querySelector(".emo");

askBtn.addEventListener("click", () => {
  const question = questionInput.value.trim();
  if(question === "") {
    alert("Escribe una pregunta cerrada.");
    return;
  }

  // Elegir respuesta aleatoria
  const randomIndex = Math.floor(Math.random() * answers.length);
  answerText.textContent = answers[randomIndex];

  // Ocultar el emoji
  emoji.style.display = "none";

  // Borrar contenido del input
  questionInput.value = "";

  // Reiniciar animación: quitar clase y forzar reflow
  ball.classList.remove("show");
  void ball.offsetWidth; // fuerza que el navegador registre el cambio
  ball.classList.add("show");
});
