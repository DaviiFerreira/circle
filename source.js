document.addEventListener('DOMContentLoaded', function() {
    var fundo = document.getElementById('fundo');
    var tamH = fundo.clientHeight/2;
    var tamW = fundo.clientWidth/2;
    fundo.addEventListener('mousemove', function(event) {
        
        console.log('Mouse move event Y:', event.clientY );
        console.log('Mouse move event X:', event.clientX );
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
