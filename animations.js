/*// CRIAR IMAGEM DA LOGO

		var divLogo = document.createElement("div");
		var logo = document.createElement("img");
		logo.id = "logoGrandeVerde";
		logo.src = "img/logo_verde_cima.png";
		logo.style.width = "50%";
		logo.className = "imagemCentrada";
		logo.style.opacity = "0.0";
		divLogo.appendChild(logo);
		
		// CRIAR IMAGEM LOGO AMARELA
		var logoAmarela = document.createElement("img");
		logoAmarela.id = "logoGrandeAmarela";
		logoAmarela.src = "img/logo_amarela_cima.png";
		logoAmarela.style.width = "50%";
		logoAmarela.className = "imagemCentrada";
		logoAmarela.style.opacity = "0.0";
		divLogo.appendChild(logoAmarela);

		var logoInicialBaixo = document.createElement("img");
		logoInicialBaixo.id = "logoVerdeBaixo";
		logoInicialBaixo.src = "img/logo_verde_baixo.png";
		logoInicialBaixo.style.width = "50%";
		logoInicialBaixo.className = "imagemCentradaBaixo";
		logoInicialBaixo.style.opacity = "0.0";
		divLogo.appendChild(logoInicialBaixo);
		
		// CRIAR IMAGEM LOGO AMARELA
		

		var logoAmarelaBaixo = document.createElement("img");
		logoAmarelaBaixo.id = "logoAmarelaBaixo";
		logoAmarelaBaixo.src = "img/logo_amarela_baixo.png";
		logoAmarelaBaixo.style.width = "50%";
		logoAmarelaBaixo.className = "imagemCentradaBaixo";
		logoAmarelaBaixo.style.opacity = "0.0";
		divLogo.appendChild(logoAmarelaBaixo);

		document.body.appendChild(divLogo);


		// CRIAR BOTÃO

		var botaoDeEntrada = document.createElement("img");
		botaoDeEntrada.src = "img/play.png";
		botaoDeEntrada.style.width = "5%";
		botaoDeEntrada.id = "botaoDeEntrada";
		botaoDeEntrada.className = "botaoCentrado";
		botaoDeEntrada.style.opacity = "0.0";
		document.body.appendChild(botaoDeEntrada);*/

		// CRIAR ANIMAÇÃO DO FADEIN
		var timer;
	
		function appear() {
			timer = window.setInterval(fadein, 20);
		}
		
		function fadein() {
			logo = document.getElementById("logoGrandeVerde");
			var logo2 = document.getElementById("logoVerdeBaixo")
			
			if (logo.style.opacity == "") {
				img.style.opacity = "0.0";
			}
			
			var opacity = Number(logo.style.opacity);
			var opacity2 = Number(logo2.style.opacity);
			if (opacity < 1) {
				opacity = opacity + 0.01;
				logo.style.opacity = "" + opacity;
				opacity2 = opacity2 + 0.01;
				logo2.style.opacity = "" + opacity2;
			}
			else {
				window.clearInterval(timer);
				window.setTimeout(trocar, 20)
				
			}	
		}


		// ANIMAÇÃO DE TROCA DA LOGO

		function trocar(){
			timer = window.setInterval(trocarLogos, 30);
		}
		
		function trocarLogos(){
			var logoAntiga = document.getElementById("logoGrandeVerde");
			var logoNova = document.getElementById("logoGrandeAmarela");
			var logoAntiga2 = document.getElementById("logoVerdeBaixo");
			var logoNova2 = document.getElementById("logoAmarelaBaixo");
			
			if (logoAntiga.style.opacity == "") {
				img.style.opacity = "1.0";
			}
			
			var opacityVerde = Number(logoAntiga.style.opacity);
			var opacityAmarela = Number(logoNova.style.opacity);
			var opacityVerde2 = Number(logoAntiga2.style.opacity);
			var opacityAmarela2 = Number(logoNova2.style.opacity);

			if (opacityVerde > 0) {
				opacityVerde = opacityVerde - 0.02;
				logoAntiga.style.opacity = "" + opacityVerde;
				opacityAmarela = opacityAmarela + 0.02;
				logoNova.style.opacity = "" + opacityAmarela;
				opacityVerde2 = opacityVerde2 - 0.02;
				logoAntiga2.style.opacity = "" + opacityVerde2;
				opacityAmarela2 = opacityAmarela2 + 0.02;
				logoNova2.style.opacity = "" + opacityAmarela2;
			}
			else {
				window.clearInterval(timer);
				timer = window.setInterval(aparecerBotao, 10);
			}
			
		}

		// CRIAR ANIMAÇÃO DO BOTÃO		
		function aparecerBotao(){
			var botao = document.getElementById("botaoDeEntrada");
			if (botao.style.opacity == "") {
				img.style.opacity = "0.0";
			}
			
			var opacity = Number(botao.style.opacity);
			if (opacity < 0.5) {
				opacity = opacity + 0.01;
				botao.style.opacity = "" + opacity;
			}
			else {
				window.clearInterval(timer);
			}
			botao.onmouseover = function (){
				botao.style.opacity = "1";
			}
			botao.onmouseout = function (){
				botao.style.opacity = "0.5";	
			}
			botao.onclick = function(){abrirMenu()}
		}

		/*// Ir pra menu inicial

		document.getElementById("botaoDeEntrada").addEventListener("click", open);

		function open(){
			document.getElementById("logoGrandeAmarela").style.display = "none";
			document.getElementById("logoAmarelaBaixo").style.display = "none";
			document.getElementById("botaoDeEntrada").style.display = "none";
			document.getElementById("logofixo").style.display = "block";
			//document.getElementById("rodape").style.display = "block";
			//document.getElementById("musica").style.display = "block";
			//document.getElementById("home").style.display = "block";
			//document.getElementById("voltar");
			voltar.play();

		}
*/


/*

1. Definir como fazer a logo aparecer fadein - DONE
2. Animação da logo ao passar mouse, depois de esperar um intervalo DONE
3. Colocar um botão de entrar, com fadein DONE
FAZER LOGO SLIDE UP AND DOWN
Quando clicar no botão, aparecer menu principal - montar todo o menu e colocar style como display none
4. Colocar vídeo
5. Botão de entrar
6. Fadeout se acabar de tocar
7. Ir para menu principal
8. Colocar 4 divs
9. Colocar imagens nos divs
10. Colocar overlay escuro
11. On mouse on - overlay mais claro
12. On mouse on - símbolo de clique
13. On mouse on - vira vídeo
14. Menu superior - on mouse on - aparece menuzinho
15. Ao entrar em um menu, carregar novo cenário
16. Ao clicar em um vídeo, vídeo player aparece 
17. Controles





*/