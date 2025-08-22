const mapContainer = document.getElementById('mapContainer');
const boomAudio = document.getElementById('boomAudio');

mapContainer.addEventListener('click', (e) => {
    const rect = mapContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Crear meteorito
    const meteorito = document.createElement('img');
    meteorito.src = 'meteorito.png';
    meteorito.className = 'meteorito';
    meteorito.style.left = x - 25 + 'px';
    meteorito.style.top = '-60px'; // empieza arriba
    mapContainer.appendChild(meteorito);

    // Animar caída con rotación
    setTimeout(() => {
        meteorito.style.transform = `translateY(${y}px) rotate(720deg)`;
    }, 50);

    // Cuando termine animación
    meteorito.addEventListener('transitionend', () => {
        // Ajustar volumen al 70%
        boomAudio.volume = 0.3;

        // Sonido
        boomAudio.currentTime = 0;
        boomAudio.play();

        // Crear cráter
        const crater = document.createElement('img');
        crater.src = 'crater.png';
        crater.className = 'crater';
        crater.style.left = x + 'px';
        crater.style.top = y + 'px';
        mapContainer.appendChild(crater);

        // Eliminar meteorito
        meteorito.remove();
    });
});
