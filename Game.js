let xBolinha = 300;
let yBolinha = 300;
let diametro = 13;
let raio = diametro/2;

let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90; 

let xRaquete = 5;
let yRaquete = 150;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYoponente; 

let colidiu = false;

let meusPontos = 0;
let pontosDoOponente = 0;

function preload(){
  trilha = loadSound("trilha mp3");
  ponto = loadSound("ponto mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup(){
  createCanvas(600, 400);
  trilha.loop();
  function draw(){
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificacolisaoborda();
    mostraRaquete(xRaquete, yRaquete);
    mostraMinhaRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
    verificaColisaoRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
    incluiPlacar();
    marcaPonto();
    mostraBorda();
    }
  function mostraBolinha(){
    circle (xBolinha, yBolinha, diametro);
  }
  
  function verificaColisaoBorda(){
	xBolinha += velocidadeXbolinha;
	yBolinha += velocidadeYbolinha;
    
  }
  
  function movimentaBolinha(){
    if (xBolinha + raio > width || 
       xBolinha - raio < 0)
      velocidadeXBolinha *= -1;
      
    if (yBolinha + raio > height || 
       yBolinha - raio < 0)
      velocidadeYBolinha *= -1;
      
  }
}

function mostraRaquete(x, y){
  rect (x, y, raqueteComprimento, raqueteAltura);
  
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW))
    yRaquete -= 10;
  if (keyIsDown(DOWN_ARROW))
    yRaquete += 10;
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadeBolinha *= -1
    raquetada.play();
  }
}

function movimentacaoRaqueteOponente(){
  velocidadeYoponente = yBolinha - yRaqueteOponente - raqueteComprimento/2 - 30;
  yRaqueteOponente += velocidadeYoponente
}
  
function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  texteSize(15);
  fill(color(255, 150, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 150, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26)
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1
    ponto.play();
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}
