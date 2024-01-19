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
    var titulo = document.getElementById('titulo');
    var trails = document.getElementById('trails');
    var divh = document.getElementById('div1');
    var divah = document.getElementById('div2');
    var bestScore = document.getElementById('bestScore');
    var sentido = "horario"
    var quadranteInit = 0;
    var saiuDoInit = 0;
    var best = 0;

    fundo.addEventListener('mousedown', function(event) {
        // Verifica se o botão esquerdo do mouse foi pressionado
        if (event.button === 0 && iniciado) {
            titulo.style.transition = 'transform 0.3s ease-out';
            titulo.style.transform = 'scale(0)';
            desenhando = true; // Começa a desenhar
            var pontos= document.getElementById('pontos');
            if( pontos.innerHTML[0] == 'T'   ){
                pontos.innerHTML  = '100.00';
                posInit = true; 
                posSeg = true;
                bestScore.style.visibility = "hidden";
                saiuDoInit = 0;
                while(posicoesMouse.length){
                    posicoesMouse.shift();
                }
                estoura=0;
                horario = 0;
                if(event.clientX<xmeio){
                    sentido = "antihorario"
                    horario = -1;
                    
                }
                if(event.clientX>=xmeio){
                    sentido = "horario"
                    horario = 1;
                    
                }
                console.log("aquii", event.clientX)
                titulo.innerHTML =  " Clique Para Iniciar!<br /> desenhe no sentido "+ sentido;
                var pontos = document.createElement('div');
                titulo.style.transition = 'transform 0.3s ease-in';
                titulo.style.transform = 'scale(1)';
                divh.style.transition = 'transform 0.3s ease-out';
                divh.style.transform = 'scale(0)';
                divah.style.transition = 'transform 0.3s ease-out';
                divah.style.transform = 'scale(0)';
                trails.innerHTML = "";
                
            }
            if( pontos.innerHTML[0] == 's'   ){
                pontos.innerHTML  = '100.00';
                posInit = true; 
                posSeg = true;
                bestScore.style.visibility = "hidden";
                saiuDoInit = 0;
                while(posicoesMouse.length){
                    posicoesMouse.shift();
                }
                estoura=0;
                horario = 0;
                if(event.clientX<xmeio){
                    sentido = "antihorario"
                    horario = -1;
                    
                }
                if(event.clientX>=xmeio){
                    sentido = "horario"
                    horario = 1;
                    
                }
                console.log("aquii", event.clientX)
                titulo.innerHTML =  " Clique Para Iniciar!<br /> desenhe no sentido "+ sentido;
                var pontos = document.createElement('div');
                titulo.style.transition = 'transform 0.3s ease-in';
                titulo.style.transform = 'scale(1)';
                divh.style.transition = 'transform 0.3s ease-out';
                divh.style.transform = 'scale(0)';
                divah.style.transition = 'transform 0.3s ease-out';
                divah.style.transform = 'scale(0)';
                trails.innerHTML = "";
                
            }
            if( pontos.innerHTML[0] == 'd'   ){
                pontos.innerHTML  = '100.00';
                posInit = true; 
                posSeg = true;
                bestScore.style.visibility = "hidden";
                saiuDoInit = 0;
                while(posicoesMouse.length){
                    posicoesMouse.shift();
                }
               
                estoura=0;
                horario = 0;
                if(event.clientX<xmeio){
                    sentido = "antihorario"
                    horario = -1;
                    
                }
                if(event.clientX>=xmeio){
                    sentido = "horario"
                    horario = 1;
                    
                }
                console.log("aquii", event.clientX)
                titulo.innerHTML =  " Clique Para Iniciar!<br /> desenhe no sentido "+ sentido;
                var pontos = document.createElement('div');
                titulo.style.transition = 'transform 0.3s ease-in';
                titulo.style.transform = 'scale(1)';
                divh.style.transition = 'transform 0.3s ease-out';
                divh.style.transform = 'scale(0)';
                divah.style.transition = 'transform 0.3s ease-out';
                divah.style.transform = 'scale(0)';
                trails.innerHTML = "";
            }
            if( pontos.innerHTML[0] == 'M'   ){
                pontos.innerHTML  = '100.00';
                posInit = true; 
                posSeg = true;
                bestScore.style.visibility = "hidden";
                while(posicoesMouse.length){
                    posicoesMouse.shift();
                }
               
                estoura=0;
                saiuDoInit = 0;
                horario = 0;
                if(event.clientX<xmeio){
                    sentido = "antihorario"
                    horario = -1;
                    
                }
                if(event.clientX>=xmeio){
                    sentido = "horario"
                    horario = 1;
                    
                }
                console.log("aquii", event.clientX)
                titulo.innerHTML =  " Clique Para Iniciar!<br /> desenhe no sentido "+ sentido;
                var pontos = document.createElement('div');
                titulo.style.transition = 'transform 0.3s ease-in';
                titulo.style.transform = 'scale(1)';
                divh.style.transition = 'transform 0.3s ease-out';
                divh.style.transform = 'scale(0)';
                divah.style.transition = 'transform 0.3s ease-out';
                divah.style.transform = 'scale(0)';
                trails.innerHTML = "";
            }
           
           // posInit = true;
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
           
            divh.style.transition = 'transform 0.3s ease-out';
            divh.style.transform = 'scale(0)';
            divah.style.transition = 'transform 0.3s ease-out';
            divah.style.transform = 'scale(0)';


            if(event.clientX<xmeio){
                sentido = "antihorario"
                horario = -1;
                
            }
            if(event.clientX>=xmeio){
                sentido = "horario"
                horario = 1;
                
            }
            console.log("aquii", event.clientX)
            titulo.innerHTML = "desenhe no sentido " + sentido;
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
            
            
            
            var pontos= document.getElementById('pontos');
            mediadez = mediadez/qtd;
            mediaTodas = mediaTodas/posicoesMouse.length;
            var pontosAtuais =  pontos.innerHTML;
            if (pontosAtuais<35){
                pontos.innerHTML = "TEM CERTEZA QUE ISSO É UM CIRCULO?";
                desenhando = false;
                titulo.style.transition = 'transform 0.3s ease-out';
                titulo.style.transform = 'scale(0)';
                divh.style.transition = 'transform 0.3s ease-in';
                divh.style.transform = 'scale(1)';
                divah.style.transition = 'transform 0.3s ease-in';
                divah.style.transform = 'scale(1)';
                return;
            }
           var pontosPerdidos = 0;
            if((mediadez-mediaTodas)<=0){
                pontosPerdidos = ((-(mediadez-mediaTodas)/250)).toFixed(2);
                pontos.innerHTML = (parseFloat(pontosAtuais) + ((mediadez-mediaTodas)/250)).toFixed(2);
            }
            if((mediadez-mediaTodas)>0){
                pontosPerdidos = (((mediadez-mediaTodas)/250)).toFixed(2);

                pontos.innerHTML =  (parseFloat(pontosAtuais)  - ((mediadez-mediaTodas)/250)).toFixed();
            }
            var distDoInit = ((((event.clientX-xInicial)**2) +((event.clientY-yInicial+3)**2))**0.5)
            if( quadrante == quadranteInit && saiuDoInit == 1 && posicoesMouse.length>50){
                if ((parseFloat(pontos.innerHTML)).toFixed(2)>best){
                    best = (parseFloat(pontos.innerHTML)).toFixed(2);
                    bestScore.style.visibility ="visible" ;
                    bestScore.innerHTML = "parabens novo recorde"
                }
                if ((parseFloat(pontos.innerHTML)).toFixed(2)<=best){
                    bestScore.style.visibility ="visible" ;
                    bestScore.innerHTML = "seu recorde é " + best;
                }
                pontos.innerHTML = "sua pontuação final foi " + (parseFloat(pontos.innerHTML)).toFixed(2);
                desenhando = false;
                titulo.style.transition = 'transform 0.3s ease-out';
                titulo.style.transform = 'scale(0)';
                divh.style.transition = 'transform 0.3s ease-in';
                divh.style.transform = 'scale(1)';
                divah.style.transition = 'transform 0.3s ease-in';
                divah.style.transform = 'scale(1)';
                
            }
            if(posicoesMouse.length>=10 && dezEmDez>=10){
                xSeg=event.clientX;
                ySeg = event.clientY;
                dezEmDez = 0;
                console.log("POSSEG SETADO");
            }
           
            if(horario == 1 ){
                if(posicoesMouse.length>=10 && posSeg){
                    xSeg=event.clientX;
                    ySeg = event.clientY;
                    posSeg = false;
                    console.log("POSSEG SETADO");
                    if (posSeg == false && xSeg>xInicial && ySeg>yInicial){
                        quadrante = 1 ;
                        quadranteInit = quadrante;
                        console.log("POSSEG SETADO HORARIO ");
                    }
                    if (posSeg == false && xSeg<xInicial && ySeg>yInicial){
                        quadrante = 2 ;
                        quadranteInit = quadrante;
                        console.log("POSSEG SETADO HORARIO ");
                    }
                    if (posSeg == false && xSeg<xInicial && ySeg<yInicial){
                        quadrante = 3 ;
                        quadranteInit = quadrante;
                        console.log("POSSEG SETADO HORARIO ");
                    }
                    if (posSeg == false && xSeg>xInicial && ySeg<yInicial){
                        quadrante = 4 ;
                        quadranteInit = quadrante;
                        console.log("POSSEG SETADO HORARIO ");
                    }
                }
                if(event.clientY< ymeio-10 && quadrante == 3 ){
                    quadrante =    3.5 ;
                  //  saiuDoInit = 1;
                }
                if(event.clientY< ymeio+10 && quadrante == 3.5){
                    quadrante =    4 ;
                    saiuDoInit = 1;
                }
                if(event.clientX> xmeio-10 && quadrante == 4){
                    quadrante =   4.5;
                  //  saiuDoInit = 1;
                }

                if(event.clientX> xmeio+10 && quadrante == 4.5){
                    quadrante =   1;
                    saiuDoInit = 1;
                }
                if(event.clientX< xmeio+10 && quadrante == 2){
                    quadrante =    2.5;
                   // saiuDoInit = 1;
                }
                if(event.clientX< xmeio-10 && quadrante == 2.5){
                    quadrante =    3;
                    saiuDoInit = 1;
                }
                if(event.clientY> ymeio-10 && quadrante == 1 ){
                    quadrante =    1.5 ;
                   // saiuDoInit = 1;
                }
                if(event.clientY> ymeio+10 && quadrante == 1.5){
                    quadrante =    2 ;
                    saiuDoInit = 1;
                }
                if (quadrante == 1 && (event.clientX+25 < xSeg|| event.clientY +25< ySeg) && posSeg == false  ){
                    pontos.innerHTML = "direção errada ";
                    desenhando = false;
                  //  titulo.style.transition = 'transform 0.3s ease-in';
                    //titulo.style.transform = 'scale(1)';
                    divh.style.transition = 'transform 0.3s ease-in';
                    divh.style.transform = 'scale(1)';
                    divah.style.transition = 'transform 0.3s ease-in';
                    divah.style.transform = 'scale(1)';
                }
                if (quadrante == 2 && (event.clientX > xSeg+25 || event.clientY+25 < ySeg) && posSeg == false  ){
                    pontos.innerHTML = "direção errada ";
                    desenhando = false;
                  //  titulo.style.transition = 'transform 0.3s ease-in';
                    //titulo.style.transform = 'scale(1)';
                    divh.style.transition = 'transform 0.3s ease-in';
                    divh.style.transform = 'scale(1)';
                    divah.style.transition = 'transform 0.3s ease-in';
                    divah.style.transform = 'scale(1)';
                }
                if (quadrante == 3 && (event.clientX > xSeg +25|| event.clientY > ySeg+25) && posSeg == false  ){
                    pontos.innerHTML = "direção errada ";
                    desenhando = false;
                  //  titulo.style.transition = 'transform 0.3s ease-in';
                    //titulo.style.transform = 'scale(1)';
                    divh.style.transition = 'transform 0.3s ease-in';
                    divh.style.transform = 'scale(1)';
                    divah.style.transition = 'transform 0.3s ease-in';
                    divah.style.transform = 'scale(1)';
                }
                if (quadrante == 4 && (event.clientX+25 < xSeg|| event.clientY > ySeg+25) && posSeg == false  ){
                    pontos.innerHTML = "direção errada ";
                    desenhando = false;
                //    titulo.style.transition = 'transform 0.3s ease-in';
                  //  titulo.style.transform = 'scale(1)';
                    divh.style.transition = 'transform 0.3s ease-in';
                    divh.style.transform = 'scale(1)';
                    divah.style.transition = 'transform 0.3s ease-in';
                    divah.style.transform = 'scale(1)';
                }
            }
            if(horario == -1 ){
                if(posicoesMouse.length>=10 && posSeg){
                    xSeg=event.clientX;
                    ySeg = event.clientY;
                    posSeg = false;
                    console.log("POSSEG SETADO");
                    if (posSeg == false && xSeg<xInicial && ySeg>yInicial){
                        quadrante = 1 ;
                        quadranteInit = quadrante;
                        console.log("POSSEG SETADO HORARIO ");
                    }
                    if (posSeg == false && xSeg>xInicial && ySeg>yInicial){
                        quadrante = 2 ;
                        quadranteInit = quadrante;
                        console.log("POSSEG SETADO HORARIO ");
                    }
                    if (posSeg == false && xSeg>xInicial && ySeg<yInicial){
                        quadrante = 3 ;
                        quadranteInit = quadrante;
                        console.log("POSSEG SETADO HORARIO ");
                    }
                    if (posSeg == false && xSeg<xInicial && ySeg<yInicial){
                        quadrante = 4 ;
                        quadranteInit = quadrante;
                        console.log("POSSEG SETADO HORARIO ");
                    }
                }
                if(event.clientY< ymeio+10 && quadrante == 3 ){
                    quadrante =    3.5 ;
                   // saiuDoInit = 1;
                }
                if(event.clientY> ymeio-10 && quadrante == 3.5){
                    quadrante =    4 ;
                    saiuDoInit = 1;
                }
                if(event.clientX< xmeio+10 && quadrante == 4){
                    quadrante =   4.5;
                //    saiuDoInit = 1;
                }
                if(event.clientX< xmeio-10 && quadrante == 4.5){
                    quadrante =   1;
                    saiuDoInit = 1;
                }
                if(event.clientX> xmeio-10 && quadrante == 2){
                    quadrante =    2.5;
                  //  saiuDoInit = 1;
                }
                if(event.clientX> xmeio+10 && quadrante == 2.5){
                    quadrante =    3;
                    saiuDoInit = 1;
                }
                if(event.clientY> ymeio-10 && quadrante == 1 ){
                    quadrante =    1.5 ;
                  //  saiuDoInit = 1;
                }
                if(event.clientY> ymeio+10 && quadrante == 1.5){
                    quadrante =    2 ;
                    saiuDoInit = 1;
                }
                if (quadrante == 1 && (event.clientX  > xSeg +25|| event.clientY +25< ySeg) && posSeg == false  ){
                    pontos.innerHTML = "direção errada ";
                    desenhando = false;
                  //  titulo.style.transition = 'transform 0.3s ease-in';
                  //  titulo.style.transform = 'scale(1)';
                    divh.style.transition = 'transform 0.3s ease-in';
                    divh.style.transform = 'scale(1)';
                    divah.style.transition = 'transform 0.3s ease-in';
                    divah.style.transform = 'scale(1)';
                }
                if (quadrante == 2 && (event.clientX+25 < xSeg || event.clientY  +25< ySeg ) && posSeg == false  ){
                    pontos.innerHTML = "direção errada ";
                    desenhando = false;
                   // titulo.style.transition = 'transform 0.3s ease-in';
                    //titulo.style.transform = 'scale(1)';
                    divh.style.transition = 'transform 0.3s ease-in';
                    divh.style.transform = 'scale(1)';
                    divah.style.transition = 'transform 0.3s ease-in';
                    divah.style.transform = 'scale(1)';
                }
                if (quadrante == 3 && (event.clientX+25 < xSeg || event.clientY > ySeg+25) && posSeg == false  ){
                    pontos.innerHTML = "direção errada ";
                    desenhando = false;
                   // titulo.style.transition = 'transform 0.3s ease-in';
                    //titulo.style.transform = 'scale(1)';
                    divh.style.transition = 'transform 0.3s ease-in';
                    divh.style.transform = 'scale(1)';
                    divah.style.transition = 'transform 0.3s ease-in';
                    divah.style.transform = 'scale(1)';
                }
                if (quadrante == 4 && (event.clientX > xSeg+25|| event.clientY > ySeg+25) && posSeg == false  ){
                    pontos.innerHTML = "direção errada ";
                    desenhando = false;
                   // titulo.style.transition = 'transform 0.3s ease-in';
                   // titulo.style.transform = 'scale(1)';
                    divh.style.transition = 'transform 0.3s ease-in';
                    divh.style.transform = 'scale(1)';
                    divah.style.transition = 'transform 0.3s ease-in';
                    divah.style.transform = 'scale(1)';
                }
            }
            if(estoura>750){
                pontos.innerHTML = "demorou muito ";
                desenhando = false;
            //    titulo.style.transition = 'transform 0.3s ease-in';
             //   titulo.style.transform = 'scale(1)';
                divh.style.transition = 'transform 0.3s ease-in';
                divh.style.transform = 'scale(1)';
                divah.style.transition = 'transform 0.3s ease-in';
                divah.style.transform = 'scale(1)';
            }
            if(posicoesMouse[posicoesMouse.length - 1] < 200 ){
                pontos.innerHTML = "Muito perto ";
                desenhando = false;
              //  titulo.style.transition = 'transform 0.3s ease-in';
              //  titulo.style.transform = 'scale(1)';
                divh.style.transition = 'transform 0.3s ease-in';
                divh.style.transform = 'scale(1)';
                divah.style.transition = 'transform 0.3s ease-in';
                divah.style.transform = 'scale(1)';
            }
            console.log("posx, posy, meiox, meioy", event.clientX, event.clientY, xmeio, ymeio)
            console.log(posicoesMouse);
            // Define a posição inicial da linha
            trail.style.position = 'absolute';
            trail.style.left = event.clientX + 'px';
            trail.style.top = event.clientY + 'px';
            trail.style.background = 'MediumSeaGreen';

            if(pontosPerdidos>0.075){
                trail.style.background = 'MediumSlateBlue ';
            }
            if(pontosPerdidos>0.125){
                trail.style.background = 'Khaki';
            }
            if(pontosPerdidos>0.25){
                trail.style.background = 'HotPink';
            }
            if(pontosPerdidos>0.5){
                trail.style.background = 'Red';
            }

            // Adiciona a linha ao fundo
            trails.appendChild(trail);
            dezEmDez++;
            // Define um tempo para remover a linha
            /*setTimeout(function() {
                // Remove a linha
                fundo.removeChild(trail);
            }, 200);*/
        }
    });
});
