tela = 1

function setup() {
  createCanvas(600, 600)
  somAbertura.play()
}

function draw() {
  if (tela == 1) {
    background(telaInicial)

    if (keyIsDown(ENTER)) {
      tela = 2
      vida = 3
      pontos = 0
      xCarros = [690, 720, 670, 690, 600, 500]
      atorVoltaInicio()
      somAbertura.stop()
      somTrilhaSonora.loop()
      somSkate.loop()
    }
  } else if (tela == 2) {
    background(imgEstradaComPista)
    mostraAtor()
    movimentaAtor()
    mostraCarro()
    movimentaCarro()
    loopDosCarros()
    verificaColisao()

    incluirVida()
    incluirPonto()
    marcaPonto()

    vitoria()
    derrota()
  }
}
