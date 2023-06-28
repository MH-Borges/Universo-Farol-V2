$(document).ready(function () {

    $('.toTop').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, 400);
        $('.Anc').addClass('hide');
        $('.Anc_Q').removeClass('hide');
        $('.Anc_Q').addClass('caindo');
        setTimeout(() => { 
          $('.Anc_Q').addClass('hide');
          $('.Anc').removeClass('hide');
          $('.Anc_Q').removeClass('caindo');
        }, 1000)
    });
  
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if(scroll >= 100) {
            $(".toTop").fadeIn();
        }else {
            $(".toTop").fadeOut();
        }
    });

    $('.imgInicio').css('animation', 'imgInicio 0.5s linear 1');
    $('.TituloInicio').css('animation', 'TituloInicio 1s linear 1');
    $('.subTituloIni').css('animation', 'TituloInicio 1.2s linear 1');
    $('.subTitulo2Ini').css('animation', 'TituloInicio 1.4s linear 1');
    $('.btnInicio').css('animation', 'btnInicio 1s linear 1');

    $(window).scroll(function () {
        var tela = window.innerHeight;           // 100% da tela
        var telaMetade = window.innerHeight / 2; // 50% da tela
        var telaTerço = window.innerHeight / 3;  // 33% da tela
        var telaQuarto = window.innerHeight / 4; // 25% da tela
        var telaQuinto = window.innerHeight / 5; // 20% da tela
        var telaSexto = window.innerHeight / 6; // 16% da tela

        var foco = document.querySelector('.foco').getBoundingClientRect().top;
        var portfolio = document.querySelector('.portfolio').getBoundingClientRect().top;
        var entrega = document.querySelector('.entrega').getBoundingClientRect().top;
        var bonus = document.querySelector('.bonus').getBoundingClientRect().top;
        var processos = document.querySelector('.processos').getBoundingClientRect().top;
        var universoFarol = document.querySelector('.universoFarol').getBoundingClientRect().top;
        var chamadaFinal = document.querySelector('.chamadaFinal').getBoundingClientRect().top;

        /////FOCO/////
            //titulo
            if(foco > tela - telaQuinto){
                $('.tituloFoco').css('opacity', '0');
                $('.tituloFoco').css({transform:'translateY(10vh) scale(0.5)'})
            }
            if(foco < tela - telaQuinto){
                $('.tituloFoco').css('opacity', '1');
                $('.tituloFoco').css({transform:'translateY(0) scale(1)'})
            }
            //lista de itens
            if(foco > tela - telaTerço){
                $('.listItem1').css('opacity', '0');
                $('.listItem1').css('transform', 'translateY(15vh)');
            }
            if(foco < tela - telaTerço){
                $('.listItem1').css('opacity', '1');
                $('.listItem1').css('transform', 'translateY(0)');
            }
            if(foco > tela - telaQuarto*2){
                $('.listItem2').css('opacity', '0');
                $('.listItem2').css('transform', 'translateY(15vh)');
            }
            if(foco < tela - telaQuarto*2){
                $('.listItem2').css('opacity', '1');
                $('.listItem2').css('transform', 'translateY(0)');
            }
            if(foco > tela - telaQuinto*3){
                $('.listItem3').css('opacity', '0');
                $('.listItem3').css('transform', 'translateY(15vh)');
            }
            if(foco < tela - telaQuinto*3){
                $('.listItem3').css('opacity', '1');
                $('.listItem3').css('transform', 'translateY(0)');
            }
            if(foco > telaSexto*2){
                $('.listItem4').css('opacity', '0');
                $('.listItem4').css('transform', 'translateY(15vh)');
            }
            if(foco < telaSexto*2){
                $('.listItem4').css('opacity', '1');
                $('.listItem4').css('transform', 'translateY(0)');
            }
            if(foco > telaQuarto){
                $('.listItem5').css('opacity', '0');
                $('.listItem5').css('transform', 'translateY(15vh)');
            }
            if(foco < telaQuarto){
                $('.listItem5').css('opacity', '1');
                $('.listItem5').css('transform', 'translateY(0)');
            }
            // imagem
            if(foco > tela - telaQuinto*3){
                $('.imgFoco').css('opacity', '0');
                $('.imgFoco').css('transform', 'translateX(20vw)');
            }
            if(foco < tela - telaQuinto*3){
                $('.imgFoco').css('opacity', '1');
                $('.imgFoco').css('transform', 'translateX(0)');
            }
            // botão 
            if(foco > telaQuarto/2){
                $('.btnFoco').css('bottom', '-8vh');
                $('.btnFoco').css('opacity', '0');
                $('.btnFoco').css('transform', 'scale(0.5)');
            }
            if(foco < telaQuarto/2){
                $('.btnFoco').css('bottom', '8vh');
                $('.btnFoco').css('opacity', '1');
                $('.btnFoco').css('transform', 'scale(1)');
            }

        /////PORTFOLIO/////
            // titulo - subtitulo sites
            if(portfolio > tela - telaQuinto){
                $('.tituloPortfolio').css({transform:'translateY(10vh) scale(0.5)'})
                $('.tituloPortfolio').css('opacity', '0');
            }
            if(portfolio < tela - telaQuinto){
                $('.tituloPortfolio').css({transform:'translateY(0) scale(1)'})
                $('.tituloPortfolio').css('opacity', '1');
            }
            if(portfolio > tela - telaTerço){
                $('.subTituloPortfolio').css({transform:'translateY(10vh) scale(0.5)'})
                $('.subTituloPortfolio').css('opacity', '0');
            }
            if(portfolio < tela - telaTerço){
                $('.subTituloPortfolio').css({transform:'translateY(0) scale(1)'})
                $('.subTituloPortfolio').css('opacity', '1');
            }
            // galeria sites
            if(portfolio > telaQuarto + telaSexto){
                $('.siteShow').css({transform:'translateY(10vh)'})
                $('.siteShow').css('opacity', '0');
            }
            if(portfolio < telaQuarto + telaSexto){
                $('.siteShow').css({transform:'translateY(0)'})
                $('.siteShow').css('opacity', '1');
            }
            // btn portfolio sites
            if(portfolio > telaSexto/3){
                $('.btnPortSite').css({transform:'translateY(20vh)'})
                $('.btnPortSite').css('opacity', '0');
            }
            if(portfolio < telaSexto/3){
                $('.btnPortSite').css({transform:'translateY(0)'})
                $('.btnPortSite').css('opacity', '1');
            }
            // titulo - subtitulo Insta
            if(portfolio > -telaSexto/2){
                $('.tituloPortfInsta').css({transform:'translateY(15vh) scale(0.5)'})
                $('.tituloPortfInsta').css('opacity', '0');
            }
            if(portfolio < -telaSexto/2){
                $('.tituloPortfInsta').css({transform:'translateY(0) scale(1)'})
                $('.tituloPortfInsta').css('opacity', '1');
            }
            if(portfolio > -telaQuinto){
                $('.subTitPortfInsta').css({transform:'translateY(10vh) scale(0.5)'})
                $('.subTitPortfInsta').css('opacity', '0');
            }
            if(portfolio < -telaQuinto){
                $('.subTitPortfInsta').css({transform:'translateY(0) scale(1)'})
                $('.subTitPortfInsta').css('opacity', '1');
            }
            // galeria insta
            if(portfolio > -telaQuarto + -telaSexto){
                $('.instaShow').css({transform:'translateY(15vh)'})
                $('.instaShow').css('opacity', '0');
            }
            if(portfolio < -telaQuarto + -telaSexto){
                $('.instaShow').css({transform:'translateY(0)'})
                $('.instaShow').css('opacity', '1');
            }
            // btn portfolio insta
            if(portfolio > -telaMetade + -telaQuarto){
                $('.btnPortInsta').css({transform:'translateY(20vh)'})
                $('.btnPortInsta').css('opacity', '0');
            }
            if(portfolio < -telaMetade + -telaQuarto){
                $('.btnPortInsta').css({transform:'translateY(0)'})
                $('.btnPortInsta').css('opacity', '1');
            }

        /////ENTREGA/////
            // titulo - subtitulo entrega
            if(entrega > tela){
                $('.tituloEntrega').css('opacity', '0');
                $('.tituloEntrega').css({transform:'translateY(10vh) scale(0.5)'})
            }
            if(entrega < tela){
                $('.tituloEntrega').css('opacity', '1');
                $('.tituloEntrega').css({transform:'translateY(0) scale(1)'})
            }
            if(entrega > tela - telaSexto){
                $('.subTituloEntrega').css('opacity', '0');
                $('.subTituloEntrega').css({transform:'translateY(10vh) scale(0.5)'})
            }
            if(entrega < tela - telaSexto){
                $('.subTituloEntrega').css('opacity', '1');
                $('.subTituloEntrega').css({transform:'translateY(0) scale(1)'})
            }
            // flip cards
            if(entrega > telaMetade){
                $('.Superior').css('opacity', '0');
                $('.Superior').css({transform:'scaleX(0)'})
            }
            if(entrega < telaMetade){
                $('.Superior').css('opacity', '1');
                $('.Superior').css({transform:'scaleX(1)'})
            }
            if(entrega > -telaSexto/2){
                $('.Inferior').css('opacity', '0');
                $('.Inferior').css({transform:'scaleX(0)'})
            }
            if(entrega < -telaSexto/2){
                $('.Inferior').css('opacity', '1');
                $('.Inferior').css({transform:'scaleX(1)'})
            }
            // btn entrega
            if(entrega > -telaQuarto + -telaSexto){
                $('.btnEntrega').css({transform:'translateY(20vh)'})
                $('.btnEntrega').css('opacity', '0');
            }
            if(entrega < -telaQuarto + -telaSexto){
                $('.btnEntrega').css({transform:'translateY(0)'})
                $('.btnEntrega').css('opacity', '1');
            }
            
        /////BONUS/////
            // titulo - subtitulo entrega
            if(bonus > tela){
                $('.tituloBonus').css({transform:'translateY(20vh)'})
                $('.tituloBonus').css('opacity', '0');
            }
            if(bonus < tela){
                $('.tituloBonus').css({transform:'translateY(0)'})
                $('.tituloBonus').css('opacity', '1');
            }
            if(bonus > tela - telaSexto){
                $('.subTituloBonus').css({transform:'translateY(20vh)'})
                $('.subTituloBonus').css('opacity', '0');
            }
            if(bonus < tela - telaSexto){
                $('.subTituloBonus').css({transform:'translateY(0)'})
                $('.subTituloBonus').css('opacity', '1');
            }
            //bonus
            if(bonus > telaTerço*2){
                $('.revisoes').css({transform:'translateX(25vw)'})
                $('.revisoes').css('opacity', '0');
            }
            if(bonus < telaTerço*2){
                $('.revisoes').css({transform:'translateX(0)'})
                $('.revisoes').css('opacity', '1');
            }
            if(bonus > telaQuarto + telaQuinto){
                $('.conteudo').css({transform:'translateX(-25vw)'})
                $('.conteudo').css('opacity', '0');
            }
            if(bonus < telaQuarto + telaQuinto){
                $('.conteudo').css({transform:'translateX(0)'})
                $('.conteudo').css('opacity', '1');
            }
            if(bonus > telaSexto + telaSexto/2){
                $('.seo').css({transform:'translateX(25vw)'})
                $('.seo').css('opacity', '0');
            }
            if(bonus < telaSexto + telaSexto/2){
                $('.seo').css({transform:'translateX(0)'})
                $('.seo').css('opacity', '1');
            }
            // btn bonus
            if(bonus > telaSexto/2){
                $('.btnBonus').css({transform:'translateY(20vh)'})
                $('.btnBonus').css('opacity', '0');
            }
            if(bonus < telaSexto/2){
                $('.btnBonus').css({transform:'translateY(0)'})
                $('.btnBonus').css('opacity', '1');
            }

        /////PROCESSOS/////
            // titulo - subtitulo processos
            if(processos > tela - telaQuarto){
                $('.tituloProcessos').css({transform:'translateX(25vw)'})
                $('.tituloProcessos').css('opacity', '0');
            }
            if(processos < tela - telaQuarto){
                $('.tituloProcessos').css({transform:'translateX(0)'})
                $('.tituloProcessos').css('opacity', '1');
            }
            if(processos > tela - telaTerço){
                $('.subTituloProcessos').css({transform:'translateX(-25vw)'})
                $('.subTituloProcessos').css('opacity', '0');
            }
            if(processos < tela - telaTerço){
                $('.subTituloProcessos').css({transform:'translateX(0)'})
                $('.subTituloProcessos').css('opacity', '1');
            }
            // cards processos
            if(processos > telaQuarto + telaQuinto){
                $('.processoUm').css({transform:'translateY(20vh)'})
                $('.processoUm').css('opacity', '0');
            }
            if(processos < telaQuarto + telaQuinto){
                $('.processoUm').css({transform:'translateY(0)'})
                $('.processoUm').css('opacity', '1');
            }
            if(processos > telaSexto){
                $('.processoDois').css({transform:'translateY(20vh)'})
                $('.processoDois').css('opacity', '0');
            }
            if(processos < telaSexto){
                $('.processoDois').css({transform:'translateY(0)'})
                $('.processoDois').css('opacity', '1');
            }
            if(processos > -telaSexto){
                $('.processoTres').css({transform:'translateY(20vh)'})
                $('.processoTres').css('opacity', '0');
            }
            if(processos < -telaSexto){
                $('.processoTres').css({transform:'translateY(0)'})
                $('.processoTres').css('opacity', '1');
            }
            if(processos > -telaMetade){
                $('.processoQuatro').css({transform:'translateY(20vh)'})
                $('.processoQuatro').css('opacity', '0');
            }
            if(processos < -telaMetade){
                $('.processoQuatro').css({transform:'translateY(0)'})
                $('.processoQuatro').css('opacity', '1');
            }
            if(processos > -telaTerço*2 + -telaSexto/2){
                $('.processoQuinto').css({transform:'translateY(20vh)'})
                $('.processoQuinto').css('opacity', '0');
            }
            if(processos < -telaTerço*2 + -telaSexto/2){
                $('.processoQuinto').css({transform:'translateY(0)'})
                $('.processoQuinto').css('opacity', '1');
            }
            // btn processos
            if(processos > -tela + telaSexto){
                $('.btnProcessos').css({transform:'translateY(20vh)'})
                $('.btnProcessos').css('opacity', '0');
            }
            if(processos < -tela + telaSexto){
                $('.btnProcessos').css({transform:'translateY(0)'})
                $('.btnProcessos').css('opacity', '1');
            }

        /////UNIVERSO FAROL/////
            // titulo - subtitulo Universo Farol
            if(universoFarol > tela - telaSexto/2){
                $('.tituloUniversoFarol').css({transform:'translateY(15vh) scale(0.5)'})
                $('.tituloUniversoFarol').css('opacity', '0');
            }
            if(universoFarol < tela - telaSexto/2){
                $('.tituloUniversoFarol').css({transform:'translateX(0) scale(1)'})
                $('.tituloUniversoFarol').css('opacity', '1');
            }
            // Imagem + texto Universo Farol
            if(universoFarol > telaMetade){
                $('.imgUniversoFarol').css({transform:'translateX(-15vw) scale(0.75)'})
                $('.imgUniversoFarol').css('opacity', '0');

                $('.textUniversoFarol').css({transform:'translateX(15vw) scale(0.75)'})
                $('.textUniversoFarol').css('opacity', '0');

            }
            if(universoFarol < telaMetade){
                $('.imgUniversoFarol').css({transform:'translateY(0) scale(1)'})
                $('.imgUniversoFarol').css('opacity', '1');

                $('.textUniversoFarol').css({transform:'translateY(0) scale(1)'})
                $('.textUniversoFarol').css('opacity', '1');
            }
            // btn Universo Farol
            if(universoFarol > telaSexto/2){
                $('.btnUniversoFarol').css({transform:'translateY(15vh)'})
                $('.btnUniversoFarol').css('opacity', '0');
            }
            if(universoFarol < telaSexto/2){
                $('.btnUniversoFarol').css({transform:'translateY(0)'})
                $('.btnUniversoFarol').css('opacity', '1');
            }
            
        /////CHAMADA FINAL/////
            // titulo - subtitulo Chamada Final
            if(chamadaFinal > tela - telaSexto){
                $('.tituloChamadaFinal').css({transform:'translateY(15vh) scale(0.5)'})
                $('.tituloChamadaFinal').css('opacity', '0');
            }
            if(chamadaFinal < tela - telaSexto){
                $('.tituloChamadaFinal').css({transform:'translateX(0) scale(1)'})
                $('.tituloChamadaFinal').css('opacity', '1');
            }
            if(chamadaFinal > telaMetade + telaQuinto){
                $('.subTituloChamadaFinal').css({transform:'translateY(15vh) scale(0.5)'})
                $('.subTituloChamadaFinal').css('opacity', '0');
            }
            if(chamadaFinal < telaMetade + telaQuinto){
                $('.subTituloChamadaFinal').css({transform:'translateX(0) scale(1)'})
                $('.subTituloChamadaFinal').css('opacity', '1');
            }
            //textos Chamada Final
            if(chamadaFinal > telaMetade + telaSexto){
                $('.textFinal01').css({transform:'translateX(-15vw)'})
                $('.textFinal01').css('opacity', '0');
            }
            if(chamadaFinal < telaMetade + telaSexto){
                $('.textFinal01').css({transform:'translateX(0)'})
                $('.textFinal01').css('opacity', '1');
            }
            if(chamadaFinal > telaMetade){
                $('.textFinal02').css({transform:'translateX(-15vw)'})
                $('.textFinal02').css('opacity', '0');

                $('.valorFinal01').css({transform:'translateX(15vw)'})
                $('.valorFinal01').css('opacity', '0');
            }
            if(chamadaFinal < telaMetade){
                $('.textFinal02').css({transform:'translateX(0)'})
                $('.textFinal02').css('opacity', '1');

                $('.valorFinal01').css({transform:'translateX(0)'})
                $('.valorFinal01').css('opacity', '1');
            }
            if(chamadaFinal > telaTerço + telaSexto/4){
                $('.textFinal03').css({transform:'translateX(-15vw)'})
                $('.textFinal03').css('opacity', '0');

                $('.valorFinal02').css({transform:'translateX(15vw)'})
                $('.valorFinal02').css('opacity', '0');
            }
            if(chamadaFinal < telaTerço + telaSexto/4){
                $('.textFinal03').css({transform:'translateX(0)'})
                $('.textFinal03').css('opacity', '1');

                $('.valorFinal02').css({transform:'translateX(0)'})
                $('.valorFinal02').css('opacity', '1');
            }
            // btn Universo Farol
            if(chamadaFinal > telaQuarto){
                $('.btnChamadaFinal').css({transform:'translateY(15vh)'})
                $('.btnChamadaFinal').css('opacity', '0');
            }
            if(chamadaFinal < telaQuarto){
                $('.btnChamadaFinal').css({transform:'translateY(0)'})
                $('.btnChamadaFinal').css('opacity', '1');
            }
    });

});