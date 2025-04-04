const frases = [
    "No estás solo, incluso en la oscuridad hay una chispa de luz.",
    "Eres más fuerte de lo que piensas.",
    "Hoy puede ser difícil, pero no durará para siempre.",
    "Permítete sentir, y luego suéltalo con amor.",
    "Respira... todo va a estar bien.",
    "Has superado tanto, y puedes con esto también.",
    "El sol volverá a salir mañana."
  ];
  
  let index = 0;
  const fraseElement = document.getElementById('fraseMotivadora');
  
  function mostrarFrase() {
    fraseElement.textContent = frases[index];
    index = (index + 1) % frases.length;
  }
  
  function playMusic() {
    document.getElementById('musicaFondo').play();
  }
  
  mostrarFrase();
  setInterval(mostrarFrase, 6000);
  