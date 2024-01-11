document.addEventListener('DOMContentLoaded', function() {
    var fundo = document.getElementById('fundo');
    var tam = fundo.clientHeight;
    fundo.addEventListener('mousemove', function(event) {
        
        console.log('Mouse move event:', event.clientX - tam);

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
    });
});
