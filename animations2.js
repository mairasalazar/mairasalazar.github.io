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

// Ir pra menu inicial
		function abrirMenu(){
			
			document.getElementById("logoGrandeAmarela").style.display = "none";
			document.getElementById("logoAmarelaBaixo").style.display = "none";
			document.getElementById("botaoDeEntrada").style.display = "none";
			document.getElementById("cabecalho").style.display = "block";
			document.getElementById("home").style.display = "flex";
		}

//Mouse over menu inicial
function mouseCliqueEfeitos(){
	document.getElementById("efeitos").src="img/EfeitosMouseOn.jpg";
}

function mouseoutEfeitos(){
	document.getElementById("efeitos").src = "img/EfeitosMenu2.jpg";
}

function mouseCliqueIniciativas(){
	document.getElementById("iniciativas").src="img/IniciativasMouseOn.jpg";
}

function mouseoutIniciativas(){
	document.getElementById("iniciativas").src = "img/iniciativasMenu3.jpg";
}

function mouseCliqueDesafios(){
	document.getElementById("desafios").src="img/DesafiosMouseOn.jpg";
}

function mouseoutDesafios(){
	document.getElementById("desafios").src = "img/DesafiosMenu2.jpg";
}

function mouseCliqueRepense(){
	document.getElementById("repense").src="img/RepenseMouseOn.jpg";
}

function mouseoutRepense(){
	document.getElementById("repense").src = "img/RepenseMenu2.jpg";
}



// Clicar em Efeitos
	function abrirEfeitos(){
		document.getElementById("home").style.display = "none";
		document.getElementById("submenuEfeitos").style.display = "flex";
	}

//Mouse over menu efeitos
function mouseCliqueAmbiente(){
	document.getElementById("ambiente").src="img/AmbienteMouseOn.jpg";
}

function mouseoutAmbiente(){
	document.getElementById("ambiente").src = "img/Ambiente.jpg";
}

function mouseCliqueFome(){
	document.getElementById("fome").src="img/FomeMouseOn.jpg";
}

function mouseoutFome(){
	document.getElementById("fome").src = "img/Fome.jpg";
}

function mouseCliqueIndustria(){
	document.getElementById("industria").src="img/IndustriaMouseOn.jpg";
}

function mouseoutIndustria(){
	document.getElementById("industria").src = "img/Industria.jpg";
}

function mouseCliqueCasa(){
	document.getElementById("casa").src="img/CasaMouseOn.jpg";
}

function mouseoutCasa(){
	document.getElementById("repense").src = "img/CasaMenu2.jpg";
}





		/*// CRIAR ANIMAÇÃO DO BOTÃO		
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
			botao.onclick = function(){open()}
		}

		// Ir pra menu inicial

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