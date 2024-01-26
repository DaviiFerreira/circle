
document.addEventListener('DOMContentLoaded', function () {
    var fundo = document.getElementById('fundo');
    var titulo = document.getElementById('titulo');
    var trails = document.getElementById('trails');

    var pontos = document.getElementById('pontos');
    var desenhando = false;
    var iniciado = false;
    var ymeio = fundo.clientHeight / 2;
    var xmeio = fundo.clientWidth / 2;
    var posicoesMouse = [];
    var xInicial = 0;
    var yInicial = 0;
    var posInit = true;
    var xSeg = 0;
    var ySeg = 0;
    var posSeg = true;
    var estoura = new Date();
    estoura = estoura.getTime()
    var horario = 0;
    var quadrante = 0;
    var dezEmDez = 0;
    var sentido = "horario"
    var quadranteInit = 0;
    var saiuDoInit = 0;
    var best = 0;
    var pontosPerdidos = 0;
    function calculaPontos() {
        posicoesMouse.push((((event.clientX - xmeio) ** 2) + ((event.clientY - ymeio + 3) ** 2)) ** 0.5);
        if (posicoesMouse.length > 100) {
            posicoesMouse.shift(); // Remove a posição mais antiga se houver mais de 100
        }
        if (posInit) {
            xInicial = event.clientX;
            yInicial = event.clientY;
            posInit = false;
        }
        var mediadez = 0;
        var mediaTodas = 0;
        var qtd = 0;
        for (var i = 0; i < posicoesMouse.length; i++) {
            if (i > posicoesMouse.length - 10) {
                mediadez += posicoesMouse[i];
                qtd++;
            }
            mediaTodas += posicoesMouse[i];
        }
        mediadez = mediadez / qtd;
        mediaTodas = mediaTodas / posicoesMouse.length;
        var pontosAtuais = pontos.innerHTML;


        if ((mediadez - mediaTodas) <= 0) {
            pontosPerdidos = ((-(mediadez - mediaTodas) / 250)).toFixed(2);
            pontos.innerHTML = (parseFloat(pontosAtuais) + ((mediadez - mediaTodas) / 250)).toFixed(2);
        }
        if ((mediadez - mediaTodas) > 0) {
            pontosPerdidos = (((mediadez - mediaTodas) / 250)).toFixed(2);

            pontos.innerHTML = (parseFloat(pontosAtuais) - ((mediadez - mediaTodas) / 250)).toFixed();
        }
    }
    function GameStart() {

        pontos.innerHTML = '100.00';
        posInit = true;
        posSeg = true;
        bestScore.style.visibility = "hidden";
        saiuDoInit = 0;
        if (posInit) {
            xInicial = event.clientX;
            yInicial = event.clientY;
        }
        while (posicoesMouse.length) {
            posicoesMouse.shift();
        }
        estoura = new Date();
        estoura = estoura.getTime()
        horario = 0;
        quadrante = 0;
        titulo.innerHTML = " Clique Para Iniciar!<br /> desenhe no sentido " + sentido;
        titulo.style.transition = 'transform 0.3s ease-in';
        titulo.style.transform = 'scale(1)';
        trails.innerHTML = "";

    }
    function EndGame(mensage) {
        pontos.innerHTML = mensage;
        desenhando = false;
    }
    function quadrantes() {
        if (posicoesMouse.length > 10 && posSeg) {

            if (xmeio < xInicial && ymeio > yInicial) {
                quadrante = 1;
                quadranteInit = quadrante;
                posSeg = false;
                if (ySeg > yInicial) {
                    horario = 1;
                }
                else {
                    horario = -1;
                }
            }
            if (xmeio < xInicial && ymeio < yInicial) {
                quadrante = 2;
                quadranteInit = quadrante;
                posSeg = false;
                if (ySeg > yInicial) {
                    horario = 1;
                }
                else {
                    horario = -1;
                }
            }
            if (xmeio > xInicial && ymeio < yInicial) {
                quadrante = 3;
                quadranteInit = quadrante;
                posSeg = false;
                if (ySeg < yInicial) {
                    horario = 1;
                }
                else {
                    horario = -1;
                }
            }
            if (xmeio > xInicial && ymeio > yInicial) {
                quadrante = 4;
                quadranteInit = quadrante;
                posSeg = false;
                if (ySeg < yInicial) {
                    horario = 1;
                }
                else {
                    horario = -1;
                }
            }
        }

        console.log(horario, quadrante, ySeg, yInicial);

        if (horario == 1) {

            if (event.clientY > ymeio - 10 && quadrante == 1) {
                quadrante = 1.5;
            }
            if (event.clientY > ymeio + 10 && quadrante == 1.5) {
                quadrante = 2;
                saiuDoInit = 1;
            }
            if (event.clientX < xmeio + 10 && quadrante == 2) {
                quadrante = 2.5;
            }
            if (event.clientX < xmeio - 10 && quadrante == 2.5) {
                quadrante = 3;
                saiuDoInit = 1;
            }

            if (event.clientY < ymeio - 10 && quadrante == 3) {
                quadrante = 3.5;
                //  saiuDoInit = 1;
            }

            if (event.clientY < ymeio + 10 && quadrante == 3.5) {
                quadrante = 4;
                saiuDoInit = 1;
            }
            if (event.clientX > xmeio - 10 && quadrante == 4) {
                quadrante = 4.5;
                //  saiuDoInit = 1;
            }

            if (event.clientX > xmeio + 10 && quadrante == 4.5) {
                quadrante = 1;
                saiuDoInit = 1;
                if (quadrante == 1 && (event.clientX + 25 < xSeg || event.clientY + 25 < ySeg) && posSeg == false) {
                    EndGame("direção errada ");
                }
                if (quadrante == 2 && (event.clientX > xSeg + 25 || event.clientY + 25 < ySeg) && posSeg == false) {
                    EndGame("direção errada ");
                }
                if (quadrante == 3 && (event.clientX > xSeg + 25 || event.clientY > ySeg + 25) && posSeg == false) {
                    EndGame("direção errada ");
                }
                if (quadrante == 4 && (event.clientX + 25 < xSeg || event.clientY > ySeg + 25) && posSeg == false) {
                    EndGame("direção errada ");
                }
            }
        }
        if (horario == -1) {
            if (event.clientX > xmeio - 10 && quadrante == 3) {
                quadrante = 2.5;
                // saiuDoInit = 1;
            }
            if (event.clientX > xmeio + 10 && quadrante == 2.5) {
                quadrante = 2;
                saiuDoInit = 1;
            }
            if (event.clientY < ymeio + 10 && quadrante == 2) {
                quadrante = 1.5;
            }
            if (event.clientY < ymeio - 10 && quadrante == 1.5) {
                quadrante = 1;
                saiuDoInit = 1;
            }
            if (event.clientX < xmeio + 10 && quadrante == 1) {
                quadrante = 4.5;
            }
            if (event.clientX < xmeio - 10 && quadrante == 4.5) {
                quadrante = 4;
            }
            if (event.clientY > ymeio - 10 && quadrante == 4) {
                quadrante = 3.5;
                // saiuDoInit = 1;
            }
            if (event.clientY > ymeio + 10 && quadrante == 3.5) {
                quadrante = 3;
                saiuDoInit = 1;
            }
            if (quadrante == 4 && (event.clientX > xSeg + 25 || event.clientY + 25 < ySeg) && posSeg == false) {
                EndGame("direção errada ");
            }
            if (quadrante == 3 && (event.clientX + 25 < xSeg || event.clientY + 25 < ySeg) && posSeg == false) {
                EndGame("direção errada ");
            }
            if (quadrante == 2 && (event.clientX + 25 < xSeg || event.clientY > ySeg + 25) && posSeg == false) {
                EndGame("direção errada ");
            }
            if (quadrante == 1 && (event.clientX > xSeg + 25 || event.clientY > ySeg + 25) && posSeg == false) {
                EndGame("direção errada ");
            }
        }
    };
    function demorou() {
        let tempoAtual = new Date();
        tempoAtual = tempoAtual.getTime()
        if (tempoAtual - estoura > 5000) {
            EndGame("demorou muito");
        }
    }
    function NaoCirculo(p) {
        if (p < 35) {
            EndGame("TEM CERTEZA QUE ISSO É UM CIRCULO?");
        }
    }
    function muitoPerto() {
        let calculaDist = (((fundo.clientHeight) ** 2) + ((fundo.clientWidth) ** 2)) ** 0.5 / 10;
        if (posicoesMouse[posicoesMouse.length - 1] < calculaDist) {
            EndGame("Muito perto ");
        }
    }
    function fazPontosDaLinha() {
        var trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.position = 'absolute';
        trail.style.left = event.clientX + 'px';
        trail.style.top = event.clientY + 'px';
        trail.style.background = 'MediumSeaGreen';

        if (pontosPerdidos > 0.075) {
            trail.style.background = 'SteelBlue ';
        }
        if (pontosPerdidos > 0.125) {
            trail.style.background = 'Khaki';
        }
        if (pontosPerdidos > 0.25) {
            trail.style.background = 'HotPink';
        }
        if (pontosPerdidos > 0.5) {
            trail.style.background = 'Red';
        }
        trails.appendChild(trail);
    }
    fundo.addEventListener('mousedown', function (event) {

        if (event.button === 0 && iniciado) {
            titulo.style.transition = 'transform 0.3s ease-out';
            titulo.style.transform = 'scale(0)';
            desenhando = true;

            if (pontos.innerHTML[0] == 'T' || pontos.innerHTML[0] == 's' || pontos.innerHTML[0] == 'd' || pontos.innerHTML[0] == 'M') {
                GameStart();
            }
        }
    });

    fundo.addEventListener('mousedown', function (event) {
        // Verifica se o botão esquerdo do mouse foi pressionado
        if (event.button === 0 && !iniciado) {
            iniciado = true; // Começa a desenhar
            circuloCentral.style.transition = 'transform 0.3s ease-out';
            circuloCentral.style.transform = 'scale(0.5)';
            GameStart();

        }
    });

    fundo.addEventListener('mousemove', function (event) {
        // Verifica se o botão esquerdo do mouse está pressionado
        if (desenhando) {
            var bestScore = document.getElementById('bestScore');
            titulo.style.transition = 'transform 0.3s ease-out';
            titulo.style.transform = 'scale(0)';
            // Cria um elemento de linha
            calculaPontos();

            var pontosAtuais = pontos.innerHTML;

            let tempoAtual = new Date();
            tempoAtual = tempoAtual.getTime()
            if (quadrante == quadranteInit && saiuDoInit == 1 && tempoAtual - estoura > 250 && quadrante != 0 && ((event.clientX <= xInicial + 10 && event.clientX >= xInicial - 10) || (event.clientY >= yInicial - 10 && event.clientY <= yInicial + 10))) {
                if ((parseFloat(pontos.innerHTML)).toFixed(2) > best) {
                    best = (parseFloat(pontos.innerHTML)).toFixed(2);
                    bestScore.style.visibility = "visible";
                    bestScore.innerHTML = "parabens novo recorde"
                }
                if ((parseFloat(pontos.innerHTML)).toFixed(2) <= best) {
                    bestScore.style.visibility = "visible";
                    bestScore.innerHTML = "seu recorde é " + best;
                }
                EndGame("sua pontuação final foi " + (parseFloat(pontos.innerHTML)).toFixed(2));


            }
            if (posicoesMouse.length >= 10 && dezEmDez >= 10) {
                xSeg = event.clientX;
                ySeg = event.clientY;
                dezEmDez = 0;
            }

            quadrantes();
            NaoCirculo(pontosAtuais);
            demorou();
            muitoPerto();
            fazPontosDaLinha();
            dezEmDez++;

        }
    });
});
