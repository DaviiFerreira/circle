document.addEventListener('DOMContentLoaded', function() {
    var fundo = document.getElementById('fundo');
    var desenhando = false; // Variável para rastrear se o botão está sendo mantido pressionado
    var iniciado = false;
    var ymeio = fundo.clientHeight/2;
    var xmeio = fundo.clientWidth/2;
    var posicoesMouse= [];

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
            var pontos = document.createElement('div');
            pontos.classList.add('pontos');
            pontos.classList.add('naoSelecionavel');
            pontos.innerHTML = '0'
            fundo.appendChild(pontos);

        }
    });

    fundo.addEventListener('mousemove', function(event) {
        // Verifica se o botão esquerdo do mouse está pressionado
        if (desenhando) {
            // Cria um elemento de linha
            var trail = document.createElement('div');
            trail.classList.add('trail');
            posicoesMouse.push( (((event.clientX-xmeio)**2) +((event.clientY-ymeio+3)**2))**0.5 );
            if (posicoesMouse.length > 100) {
                posicoesMouse.shift(); // Remove a posição mais antiga se houver mais de 100
            }
            console.log("posx, posy, meiox, meioy", event.clientX, event.clientY, xmeio, ymeio)
            console.log(posicoesMouse);
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
