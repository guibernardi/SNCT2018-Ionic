# SNCT2018-Ionic

Projeto para introdução ao framework Ionic que faz parte do conteúdo do minicurso "Desenvolvimento de apps híbridos com Ionic" ministrado na Semana Nacional de Ciência e Tecnologia 2018 no IFSP - Catanduva/SP.

**Slides:** https://www.slideshare.net/guibernardi/ionic-semana-nacional-de-cincia-e-tecnologia-2018-ifsp-catanduva

## Para iniciar:

* Instale o Node.js (https://nodejs.org/en/).
* Instale o VS Code: (https://code.visualstudio.com/)

### Somente para Windows:

* Instale o Git for Windows para utilizar o Git Bash (https://git-scm.com/download/win).

### Para permitir a execução do projeto em um dispositivo Android:

* Instale a versão mais recente do Java 8 JDK: (https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

* Instale o Android SDK, há duas opções:
	- Android Studio que já vem com o SDK Manager embutido: (https://developer.android.com/studio/)
	- SDK Command Line Tools (https://developer.android.com/studio/#downloads), **está na última seção de downloads chamada Command line tools only**

## Instalando o Ionic:

* Abra o Git Bash e execute o comando:

	`npm install -g ionic cordova`

* Feito isso já é possível criar um novo projeto a partir do comando: 

  `ionic start [nomeDoSeuApplicativo] [tipoDoAplicativo]`
	
  **Para escolher o template do projeto leia:** (https://ionicframework.com/docs/cli/starters.html).

## Executando o projeto:

* Faça o clone do projeto:

	`https://github.com/guibernardi/SNCT2018-Ionic.git`

* Acesse o diretório do projeto e execute: 

	`npm install`
	
	**Esse comando é responsável por ler o arquivo package.json e instalar todos os modules necessários para a execução do projeto**.

* Uma vez instalado os módulos basta executar:
	
	`ionic serve`

## Para a utilização do Ionic Lab:

* Executar dentro do diretório do projeto:

	`npm i -g ionic`
	`npm i @ionic/lab`

## Incluindo plataformas (Android/iOS):

* Executar dentro do diretório do projeto:

	`ionic cordova platform add android`
	`ionic cordova platform add ios`
	
Qualquer dúvida entrar em contato: gui.bernardi@gmail.com
