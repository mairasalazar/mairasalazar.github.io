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

// CRIAR ANIMAÇÃO DO BOTÃO DE ENTRADA		
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

// CRIAR OVERLAY VERDE
		function verde(element){
			element.classList.add("overlayVerde");
		}


// IR PARA MENU PRINCIPAL AO CLICAR NO BOTÃO DE ABERTURA
		function abrirMenu(){			
			document.getElementById("logoGrandeAmarela").style.display = "none";
			document.getElementById("logoAmarelaBaixo").style.display = "none";
			document.getElementById("botaoDeEntrada").style.display = "none";
			document.getElementById("cabecalho").style.display = "flex";
			document.getElementById("home").style.display = "flex";
		}

// IR PARA MENU PRINCIPAL AO CLICAR NO BOTÃO X, PARA FECHAR SUBMENU
		function voltarMenu(){
			document.getElementById("home").style.display = "flex";
			document.getElementById("submenuEfeitos").style.display = "none";
			document.getElementById("submenuRepense").style.display = "none";
			document.getElementById("submenuDesafios").style.display = "none";
			document.getElementById("submenuIniciativas").style.display = "none";
			document.getElementById("tituloSubmenuTopoEfeito").style.display = "none";
			document.getElementById("tituloSubmenuTopoRepense").style.display = "none";
			document.getElementById("tituloSubmenuTopoDesafios").style.display = "none";
			document.getElementById("tituloSubmenuTopoIniciativas").style.display = "none";
		}

// IR PARA MENU PRINCIPAL AO CLICAR NA LOGO, LIMPANDO OVERLAY VERDE
		function recomecar(){
			document.querySelectorAll('.subs').forEach(el => el.style.display = "none");
			document.getElementById("home").style.display = "flex";
			document.querySelectorAll('.overlayVerde').forEach(el => el.classList.remove('overlayVerde'));
			var titulosSubmenuTopo = document.getElementsByClassName("tituloSubmenuTopo");
			for(var i = 0; i < titulosSubmenuTopo.length; i ++){
				titulosSubmenuTopo[i].style.display = "none";
			}
			fecharmenuhamburger();
			var container = document.getElementsByClassName("videoContainer");
			for(var i=0;i<container.length;i++){
				container[i].style.display="none";
				stopVideo(container[i]); }
		}

		
		
	

// ANIMAÇÕES DO MENU PRINCIPAL - MOUSE OVER
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
			document.getElementById("iniciativas").src = "img/iniciativasMenu2.jpg";
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


// ABRIR MENU EFEITOS
		function abrirEfeitos(){
			document.getElementById("home").style.display = "none";
			document.getElementById("submenuEfeitos").style.display = "flex";
			document.getElementById("tituloSubmenuTopoEfeito").style.display = "flex"	
		}


// ANIMAÇÕES DO MENU EFEITOS - MOUSE OVER
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
			document.getElementById("casa").src = "img/Casa.jpg";
		}

// ABRIR SUBMENUS DE EFEITOS
		function abrirAmbiente(){
			document.getElementById("submenuEfeitos").style.display = "none";
			document.getElementById("ambienteSubmenu").style.display = "block";
		}	
		function abrirFome(){
			document.getElementById("submenuEfeitos").style.display = "none";
			document.getElementById("fomeSubmenu").style.display = "block";
		}
		function abrirIndustria(){
			document.getElementById("submenuEfeitos").style.display = "none";
			document.getElementById("industriaSubmenu").style.display = "block";
		}
		function abrirCasa(){
			document.getElementById("submenuEfeitos").style.display = "none";
			document.getElementById("casaSubmenu").style.display = "block";
		}	

// BOTÃO PARA VOLTAR AO MENU EFEITOS
		function voltarEfeitos(){
			document.getElementById("ambienteSubmenu").style.display = "none";
			document.getElementById("fomeSubmenu").style.display = "none";
			document.getElementById("industriaSubmenu").style.display = "none";
			document.getElementById("casaSubmenu").style.display = "none";
			document.getElementById("submenuEfeitos").style.display = "flex";
		}



// ABRIR MENU INICIATIVAS
		function abrirIniciativas(){
			document.getElementById("home").style.display = "none";
			document.getElementById("submenuIniciativas").style.display = "flex";
			document.getElementById("tituloSubmenuTopoIniciativas").style.display = "flex"	
		}

// ANIMAÇÕES DO MENU INICIATIVAS - MOUSE OVER
		function mouseCliqueFrutaFeia(){
			document.getElementById("frutaFeia").src="img/FrutafeiaMouseOn.jpg";
		}
		function mouseoutFrutaFeia(){
			document.getElementById("frutaFeia").src = "img/Frutafeia.jpg";
		}
		function mouseCliqueLipor(){
			document.getElementById("lipor").src="img/LiporMouseOn.jpg";
		}
		function mouseoutLipor(){
			document.getElementById("lipor").src = "img/Lipor.jpg";
		}
		function mouseCliqueFairMeals(){
			document.getElementById("fairMeals").src="img/FairmealsMouseOn.jpg";
		}
		function mouseoutFairMeals(){
			document.getElementById("fairMeals").src = "img/Fairmeals.jpg";
		}
		function mouseCliqueGoodAfter(){
			document.getElementById("goodAfter").src="img/GoodafterMouseOn.jpg";
		}
		function mouseoutGoodAfter(){
			document.getElementById("goodAfter").src = "img/Goodafter.jpg";
		}

// ABRIR SUBMENUS DE INICIATIVAS
		function abrirFrutaFeia(){
			document.getElementById("submenuIniciativas").style.display = "none";
			document.getElementById("videoContainerFrutaFeia").style.display="block";
			document.getElementById("arquivoVideoFrutaFeia").src="https://www.youtube.com/embed/Q2GpQlomXd4?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
			const player = new Plyr('#playerFrutaFeia', {});
			window.player = player;
		}
		function abrirLipor(){
			document.getElementById("submenuIniciativas").style.display = "none";
			document.getElementById("videoContainerLipor").style.display="block";
			document.getElementById("arquivoVideoLipor").src="https://www.youtube.com/embed/0UQ_cbgPROk?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
			const player = new Plyr('#playerLipor', {});
			window.player = player;
			
		}
		function abrirFairMeals(){
			document.getElementById("submenuIniciativas").style.display = "none";
			document.getElementById("videoContainerFairMeals").style.display="block";
			document.getElementById("arquivoVideoFairMeals").src="https://www.youtube.com/embed/n4cQqH8Lf1Q?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
			const player = new Plyr('#playerFairMeals', {});
			window.player = player;
		}
		function abrirGoodAfter(){
			document.getElementById("submenuIniciativas").style.display = "none";
			document.getElementById("videoContainerGoodAfter").style.display="block";
			document.getElementById("arquivoVideoGoodAfter").src="https://www.youtube.com/embed/sK0FSDojYtY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
			const player = new Plyr('#playerGoodAfter', {});
			window.player = player;			
		}
		
// BOTÃO PARA VOLTAR AO MENU INICIATIVAS
		function voltarIniciativas(){
			document.getElementById("submenuIniciativas").style.display = "flex";
			var container = document.getElementsByClassName("videoContainer");
			for(var i=0;i<container.length;i++){
				container[i].style.display="none";
				stopVideo(container[i]);
			}			
		}

		

		var stopVideo = function ( element ) {
		    var iframe = element.querySelector( 'iframe');
		    var video = element.querySelector( 'video' );
		    if ( iframe !== null ) {
		        var iframeSrc = iframe.src;
		        iframe.src = iframeSrc;
		    }
		    if ( video !== null ) {
		        video.pause();
		    }
		};

// ABRIR MENU DESAFIOS
		function abrirDesafios(){
			document.getElementById("home").style.display = "none";
			document.getElementById("submenuDesafios").style.display = "flex";
			document.getElementById("tituloSubmenuTopoDesafios").style.display = "flex"	
		}

// ANIMAÇÕES DO MENU DESAFIOS - MOUSE OVER
		function mouseCliqueSeguranca(){
			document.getElementById("seguranca").src="img/SegurancaMouseOn.jpg";
		}
		function mouseoutSeguranca(){
			document.getElementById("seguranca").src = "img/Seguranca.jpg";
		}
		function mouseCliqueMentalidade(){
			document.getElementById("mentalidade").src="img/MentalidadeMouseOn.jpg";
		}
		function mouseoutMentalidade(){
			document.getElementById("mentalidade").src = "img/Mentalidade.jpg";
		}

		function mouseCliqueNutricao(){
			document.getElementById("nutricao").src="img/NutricaoMouseOn.jpg";
		}
		function mouseoutNutricao(){
			document.getElementById("nutricao").src = "img/Nutricao.jpg";
		}


// ABRIR 2 PÁGINAS DE SUBMENUS DE DESAFIOS + SETAS
		function abrirSeguranca(){
			document.getElementById("submenuDesafios").style.display = "none";
			document.getElementById("segurancaSubmenu1").style.display = "grid";
		}
		function direitaSeguranca(){
			document.getElementById("segurancaSubmenu1").style.display = "none";
			document.getElementById("segurancaSubmenu2").style.display = "grid";
		}
		function esquerdaSeguranca(){
			document.getElementById("segurancaSubmenu2").style.display = "none";
			document.getElementById("segurancaSubmenu1").style.display = "grid";
		}
		function abrirMentalidade(){
			document.getElementById("submenuDesafios").style.display = "none";
			document.getElementById("mentalidadeSubmenu1").style.display = "grid";
		}
		function direitaMentalidade(){
			document.getElementById("mentalidadeSubmenu1").style.display = "none";
			document.getElementById("mentalidadeSubmenu2").style.display = "grid";
		}
		function esquerdaMentalidade(){
			document.getElementById("mentalidadeSubmenu2").style.display = "none";
			document.getElementById("mentalidadeSubmenu1").style.display = "grid";
		}
		function abrirNutricao(){
			document.getElementById("submenuDesafios").style.display = "none";
			document.getElementById("nutricaoSubmenu1").style.display = "grid";
		}
		function direitaNutricao(){
			document.getElementById("nutricaoSubmenu1").style.display = "none";
			document.getElementById("nutricaoSubmenu2").style.display = "grid";
		}
		function esquerdaNutricao(){
			document.getElementById("nutricaoSubmenu2").style.display = "none";
			document.getElementById("nutricaoSubmenu1").style.display = "grid";
		}

// BOTÃO PARA VOLTAR AO MENU DESAFIOS
		function voltarDesafios(){
			document.getElementById("segurancaSubmenu1").style.display = "none";
			document.getElementById("segurancaSubmenu2").style.display = "none";
			document.getElementById("mentalidadeSubmenu1").style.display = "none";
			document.getElementById("mentalidadeSubmenu2").style.display = "none";
			document.getElementById("nutricaoSubmenu1").style.display = "none";
			document.getElementById("nutricaoSubmenu2").style.display = "none";
			document.getElementById("submenuDesafios").style.display = "flex";
		}

// ABRIR MENU REPENSE
		function abrirRepense(){
			document.getElementById("home").style.display = "none";
			document.getElementById("submenuRepense").style.display = "flex";
			document.getElementById("tituloSubmenuTopoRepense").style.display = "flex"	
		}

// ANIMAÇÕES DO MENU REPENSE - MOUSE OVER
		function mouseCliqueBolo(){
			document.getElementById("bolo").src="img/BoloMouseOn.jpg";
		}
		function mouseoutBolo(){
			document.getElementById("bolo").src = "img/Bolo.jpg";
		}
		function mouseCliqueCasca(){
			document.getElementById("casca").src="img/CascaMouseOn.jpg";
		}
		function mouseoutCasca(){
			document.getElementById("casca").src = "img/Casca.jpg";
		}
		function mouseCliqueTapenade(){
			document.getElementById("tapenade").src="img/TapenadeMouseOn.jpg";
		}
		function mouseoutTapenade(){
			document.getElementById("tapenade").src = "img/Tapenade.jpg";
		}

// ABRIR SUBMENUS DE REPENSE
		function abrirBolo(){
			document.getElementById("submenuRepense").style.display = "none";
			document.getElementById("videoContainerBolo").style.display="block";
			document.getElementById("arquivoVideoBolo").src="https://www.youtube.com/embed/2Mt5xa9WWW8?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
			const player = new Plyr('#playerBolo', {});
			window.player = player;
			

		}
		function abrirCasca(){
			document.getElementById("submenuRepense").style.display = "none";
			document.getElementById("videoContainerCasca").style.display="block";
			document.getElementById("arquivoVideoCasca").src="https://www.youtube.com/embed/ajrmuI62DSk?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
			const player = new Plyr('#playerCasca', {});
			window.player = player;
		}
		function abrirTapenade(){
			document.getElementById("submenuRepense").style.display = "none";
			document.getElementById("videoContainerTapenade").style.display="block";
			document.getElementById("arquivoVideoTapenade").src="https://www.youtube.com/embed/h0-BLmZK_SI?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
			const player = new Plyr('#playerTapenade', {});
			window.player = player;
		}

// BOTÃO PARA VOLTAR AO MENU REPENSE
		function voltarRepense(){
			document.getElementById("submenuRepense").style.display = "flex";
			var container = document.getElementsByClassName("videoContainer");
			for(var i=0;i<container.length;i++){
				container[i].style.display="none";
				stopVideo(container[i]); }
			
		}

		

// ANIMAÇÃO DA LOGO NO CABEÇALHO
		function mouseTitulo(){
			document.getElementById("titulo").style.transform = "scale(1.05)";
		}
		function mouseoutTitulo(){
			document.getElementById("titulo").style.transform = "scale(1)";
		}

// ANIMAÇÃO BOTÃO FECHAR
		function mouseFechar(){
			var elems = document.getElementsByClassName("fecharContainer");
			for (var i = 0; i < elems.length; i ++) {
				elems[i].style.transform = "scale(1.1)";
			}
		}

		function mouseoutFechar(){
			var elems = document.getElementsByClassName("fecharContainer");
			for (var i = 0; i < elems.length; i ++) {
				elems[i].style.transform = "scale(1)";
			}		
		}

// ANIMAÇÃO BOTÃO HAMBURGUER
		function mouseFecharHamburger(){
			document.getElementById("menuprafechar").style.transform = "scale(1.1)";
		}
		function mouseoutFecharHamburger(){
			document.getElementById("menuprafechar").style.transform = "scale(1)";
		}

// ANIMAÇÃO BOTÃO SETAS
		function mouseSeta(){
			var elems = document.getElementsByClassName("seta");
			for (var i = 0; i < elems.length; i ++) {
				elems[i].style.transform = "scale(1.1)";
			}
		}
		function mouseoutSeta(){
			var elems = document.getElementsByClassName("seta");
			for (var i = 0; i < elems.length; i ++) {
				elems[i].style.transform = "scale(1)";
			}	
		}

// MOSTRAR MENU HAMBURGUER
		function showMenu(){
			document.getElementById("overlayMenu").style.visibility = "visible";
			document.getElementById("overlayMenu").style.display = "flex";
			document.getElementById("menuprafechar").style.display = "block";
		}

// BOTÃO PARA FECHAR MENU HAMBURGUER
		function fecharmenuhamburger(){
			document.getElementById("overlayMenu").style.visibility = "hidden";
			document.getElementById("itensMenu").style.display = "block";
			document.getElementById("sobreContainer").style.display = "none";
			document.getElementById("creditosContainer").style.display = "none";
			document.getElementById("producaoContainer").style.display = "none";
			document.getElementById("menuprafechar").style.display = "none";
		}

// SUBMENUS DO MENU HAMBURGUER - AO CLICAR
		function sobre(){
			document.getElementById("itensMenu").style.display = "none";
			var container = document.getElementById("overlayMenu");
			var conteudo = document.getElementById("sobreContainer");
			conteudo.style.display="block";
			container.appendChild(conteudo);	 
		}
		function creditos(){
			document.getElementById("itensMenu").style.display = "none";
			var container = document.getElementById("overlayMenu");
			var conteudo = document.getElementById("creditosContainer");
			conteudo.style.display="block";
			container.appendChild(conteudo); 
		}
		function producao(){
			document.getElementById("itensMenu").style.display = "none";
			var container = document.getElementById("overlayMenu");
			var conteudo = document.getElementById("producaoContainer");
			conteudo.style.display="block";
			container.appendChild(conteudo); 
		}

// SUBMENU PRODUÇÃO - ANIMAÇÃO AO FAZER HOVER NAS IMAGENS
		function mouseMaira(){
			document.getElementById("textoMaira").style.display="flex";
		}
		function mouseoutMaira(){
			document.getElementById("textoMaira").style.display="none";		
		}
		function mouseLuanna(){
			document.getElementById("textoLuanna").style.display="flex";	
		}
		function mouseoutLuanna(){
			document.getElementById("textoLuanna").style.display="none";	
		}
		function mouseFran(){
			document.getElementById("textoFran").style.display="flex";		
		}
		function mouseoutFran(){
			document.getElementById("textoFran").style.display="none";
		}

