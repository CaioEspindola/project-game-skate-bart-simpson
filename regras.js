function vitoria() {
  if (pontos == 5) {
    background(telaVitoria)
    xCarros = [700, 700, 700, 700, 700, 700]
    somTrilhaSonora.stop()
    somSkate.stop()
    //somVitoria.play();

    if (keyIsDown(ENTER)) {
      background(imgEstradaComPista)
      vida = 3
      pontos = 0
      xCarros = [690, 720, 670, 690, 600, 500]
      atorVoltaInicio()
      //somVitoria.stop();
      somTrilhaSonora.loop()
      somSkate.loop()
    }
  }
}

function derrota() {
  if (vida == 0) {
    background(telaDerrota)
    xCarros = [700, 700, 700, 700, 700, 700]
    somTrilhaSonora.stop()
    somSkate.stop()
    //somDerrota.play();

    if (keyIsDown(ENTER)) {
      background(imgEstradaComPista)
      vida = 3
      pontos = 0
      xCarros = [690, 720, 670, 690, 600, 500]
      atorVoltaInicio()
      //somDerrota.stop();
      somTrilhaSonora.loop()
      somSkate.loop()
    }
  }
}
