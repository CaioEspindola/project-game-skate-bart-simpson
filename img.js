// Imagens do Jogo

let imgEstradaComPista
let ator1
let imgCarro1Am
let imgCarro2Taxi
let imgCarro3Bus
let imgCarro4Moto
let imgCarro5Policia
let imgCarro6Az

// Telas do jogo

let telaInicial
let telaVitoria
let telaDerrota

// Audios do Jogo

let somAbertura
let somTrilhaSonora
let somColisao
let somPonto
let somVitoria
let somDerrota
let somSkate

function preload() {
  telaInicial = loadImage('assets/img/telaInicial.png')
  telaVitoria = loadImage('assets/img/telaVitoria.png')
  telaDerrota = loadImage('assets/img/telaDerrota.png')

  ator1 = loadImage('assets/img/bartGif.gif')
  imgEstradaComPista = loadImage('assets/img/estradaComPista.png')
  imgCarro1Am = loadImage('assets/img/carroAmarelo.png')
  imgCarro2Taxi = loadImage('assets/img/carroTaxi.png')
  imgCarro3Bus = loadImage('assets/img/carroBus.png')
  imgCarro4Moto = loadImage('assets/img/carroMoto.png')
  imgCarro5Policia = loadImage('assets/img/carroPolicia.png')
  imgCarro6Az = loadImage('assets/img/carroAzul.png')
  imgCarros = [
    imgCarro1Am,
    imgCarro2Taxi,
    imgCarro3Bus,
    imgCarro4Moto,
    imgCarro5Policia,
    imgCarro6Az
  ]

  somAbertura = loadSound('assets/som/somTelaInicial.wav')
  somTrilhaSonora = loadSound('assets/som/somTrilhaSonora.wav')
  somSkate = loadSound('assets/som/somSkate.wav')
  somColisao = loadSound('assets/som/somColisao.wav')
  somPonto = loadSound('assets/som/somPonto.wav')
  somVitoria = loadSound('assets/som/somVitoria.wav')
  somDerrota = loadSound('assets/som/somDerrota.wav')
}
