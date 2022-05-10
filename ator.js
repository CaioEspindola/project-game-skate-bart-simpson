//variaveis do Ator:
let xAtor = 270
let yAtor = 540
let colisao = false
let pontos = 0
let vida = 3

//Funções do Ator:
function mostraAtor() {
  image(ator1, xAtor, yAtor, 60, 60)
  //print("yAtor")
}

function movimentaAtor() {
  if (keyIsDown(87)) {
    yAtor = yAtor - 2
  }

  if (keyIsDown(83)) {
    if (limiteBordaY()) {
      yAtor = yAtor + 2
    }
  }

  if (keyIsDown(68)) {
    if (limiteBordaXl()) {
      xAtor = xAtor + 2
    }
  }

  if (keyIsDown(65)) {
    if (limiteBordaXr()) {
      xAtor = xAtor - 2
    }
  }
}

//Biblioteca P5: collideRectRect(x, y, width, height, x2, y2, width2, height2)
function verificaColisao() {
  for (let i = 0; i < imgCarros.length; i = i + 1) {
    colisao = collideRectRect(
      xCarros[i],
      yCarros[i],
      65,
      25,
      xAtor,
      yAtor,
      30,
      30
    )

    if (colisao) {
      somColisao.play()
      atorVoltaInicio()

      if (vida > 0) {
        vida = vida - 1
        //print("colidiu")
      }
    }
  }
}

function atorVoltaInicio() {
  xAtor = 270
  yAtor = 540
}

function incluirVida() {
  textSize(16)
  textAlign(LEFT)
  text('Vida:', 3, 590)
  textSize(25)
  text(vida, width / 12, 590)
  textAlign(CENTER)
  textStyle(BOLD)
  fill(color(255, 250, 70))
  textFont('verdana')
}

function incluirPonto() {
  textSize(16)
  textAlign(RIGHT)
  text('Pontos:', 570, 590)
  textSize(25)
  text(pontos, width / 1.01, 590)
  textStyle(BOLD)
  fill(color(255, 250, 70))
  textFont('verdana')
}

function marcaPonto() {
  if (yAtor == 150) {
    pontos = pontos + 1
    somPonto.play()
    atorVoltaInicio()
  }
}

function limiteBordaY() {
  return yAtor < 540
}

function limiteBordaXr() {
  return xAtor > 0
}

function limiteBordaXl() {
  return xAtor < 550
}
