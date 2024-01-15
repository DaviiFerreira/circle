document.addEventListener('DOMContentLoaded', function() {
    var fundo = document.getElementById('fundo');
    var desenhando = false; // Variável para rastrear se o botão está sendo mantido pressionado
    var iniciado = false;
    var ymeio = fundo.clientHeight/2;
    var xmeio = fundo.clientWidth/2;
    var posicoesMouse= [];
    var xInicial = 0;
    var yInicial = 0;
    var posInit = true ; 
    var xSeg = 0;
    var ySeg = 0;
    var posSeg = true ; 
    var estoura =0;
    var horario = 0;
    var quadrante = 0;
    var dezEmDez = 0;
    fundo.addEventListener('mousedown', function(event) {
        // Verifica se o botão esquerdo do mouse foi pressionado
        if (event.button === 0 && iniciado) {
            desenhando = true; // Começa a desenhar
            var pontos= document.getElementById('pontos');
            if( pontos.innerHTML[0] == 's'   ){
                pontos.innerHTML  = '100.00';
                posInit = true; 
                posSeg = true;
                while(posicoesMouse.length){
                    posicoesMouse.shift();
                }
                estoura=0;
            }
            if( pontos.innerHTML[0] == 'd'   ){
                pontos.innerHTML  = '100.00';
                posInit = true; 
                posSeg = true;
                while(posicoesMouse.length){
                    posicoesMouse.shift();
                }
                estoura=0;
            }
           
           // posInit = true;
        }
    });

    fundo.addEventListener('mouseup', function(event) {a
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
            pontos.id = "pontos";
            pontos.classList.add('pontos');
            pontos.classList.add('naoSelecionavel');
            pontos.innerHTML = '100.00'
            fundo.appendChild(pontos);

        }
    });

    fundo.addEventListener('mousemove', function(event) {
        // Verifica se o botão esquerdo do mouse está pressionado
        if (desenhando) {
            estoura++;
            // Cria um elemento de linha
            var trail = document.createElement('div');
            trail.classList.add('trail');
            posicoesMouse.push( (((event.clientX-xmeio)**2) +((event.clientY-ymeio+3)**2))**0.5 );
            if (posicoesMouse.length > 100) {
                posicoesMouse.shift(); // Remove a posição mais antiga se houver mais de 100
            }
            if (posInit){
                xInicial=event.clientX;
                yInicial = event.clientY;
                posInit = false;
            }
            var mediadez= 0;
            var mediaTodas = 0;
            var qtd = 0;
            for(var i=0; i<posicoesMouse.length; i++){
                if(i<10){
                    mediadez+=posicoesMouse[i];
                    qtd++;
                }
                mediaTodas+= posicoesMouse[i];
            }
            if(posicoesMouse.length>=10 && posSeg){
                xSeg=event.clientX;
                ySeg = event.clientY;
                posSeg = false;
                console.log("POSSEG SETADO");
            }
            if (posSeg == false && xSeg>xInicial && ySeg>yInicial){
                horario = 1;
                quadrante = 1 ;
                console.log("POSSEG SETADO HORARIO ");
            }
            
            var pontos= document.getElementById('pontos');
            mediadez = mediadez/qtd;
            mediaTodas = mediaTodas/posicoesMouse.length;
            var pontosAtuais =  pontos.innerHTML;
            if((mediadez-mediaTodas)<0){
                pontos.innerHTML = (parseFloat(pontosAtuais) + ((mediadez-mediaTodas)/500)).toFixed(2);
            }
            if((mediadez-mediaTodas)>0){
                pontos.innerHTML =  (parseFloat(pontosAtuais)  - ((mediadez-mediaTodas)/500)).toFixed();
            }
            var distDoInit = ((((event.clientX-xInicial)**2) +((event.clientY-yInicial+3)**2))**0.5)
            if( distDoInit<40 && posicoesMouse.length>98){
                pontos.innerHTML = "sua pontuação final foi " + (parseFloat(pontos.innerHTML)).toFixed(2);
                desenhando = false;
            }
            if(posicoesMouse.length>=10 && dezEmDez>=10){
                xSeg=event.clientX;
                ySeg = event.clientY;
                dezEmDez = 0;
                console.log("POSSEG SETADO");
            }
            if(horario){
                if (quadrante == 1 && (event.clientX < xSeg || event.clientY < ySeg) && posSeg == false  ){
                    pontos.innerHTML = "direção errada ";
                    desenhando = false;
                }
            }
            if(estoura>250){
                pontos.innerHTML = "demorou muito ";
                desenhando = false;
            }
            console.log("posx, posy, meiox, meioy", event.clientX, event.clientY, xmeio, ymeio)
            console.log(posicoesMouse);
            // Define a posição inicial da linha
            trail.style.position = 'absolute';
            trail.style.left = event.clientX + 'px';
            trail.style.top = event.clientY + 'px';

            // Adiciona a linha ao fundo
            fundo.appendChild(trail);
            dezEmDez++;
            // Define um tempo para remover a linha
            setTimeout(function() {
                // Remove a linha
                fundo.removeChild(trail);
            }, 200);
        }
    });
});
