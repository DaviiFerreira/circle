document.addEventListener('DOMContentLoaded', function() {
    var fundo = document.getElementById('fundo');
    var desenhando = false; // Variável para rastrear se o botão está sendo mantido pressionado
    var iniciado = false;
    fundo.addEventListener('mousedown', function(event) {
        // Verifica se o botão esquerdo do mouse foi pressionado
        if (event.button === 0 && iniciado) {
            desenhando = true; // Começa a desenhar
        }
    });

    fundo.addEventListener('mouseup', function(event) {
        // Verifica se o botão esquerdo do mouse foi solto
        if (event.button === 0 && iniciado) {
            desenhando = false; // Para de desenhar
        }
    });
    fundo.addEventListener('mousedown', function(event) {
        // Verifica se o botão esquerdo do mouse foi pressionado
        if (event.button === 0 && !iniciado) {
            iniciado = true; // Começa a desenhar
            circuloCentral.style.transition = 'transform 0.3s ease-out';
            circuloCentral.style.transform = 'scale(0.5)';
            
        }
    });

    fundo.addEventListener('mousemove', function(event) {
        // Verifica se o botão esquerdo do mouse está pressionado
        if (desenhando) {
            // Cria um elemento de linha
            var trail = document.createElement('div');
            trail.classList.add('trail');

            // Define a posição inicial da linha
            trail.style.position = 'absolute';
            trail.style.left = event.clientX + 'px';
            trail.style.top = event.clientY + 'px';

            // Adiciona a linha ao fundo
            fundo.appendChild(trail);

            // Define um tempo para remover a linha
            setTimeout(function() {
                // Remove a linha
                fundo.removeChild(trail);
            }, 200);
        }
    });
});
