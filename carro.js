//Variaveis na Lista Array:

let xCarros = [690, 720, 670, 690, 600, 500]
let yCarros = [220, 282, 305, 400, 450, 500]
let velocidadeCarros = [5, 2.5, 3.5, 3, 2.5, 3.5]
let xComprimentoCarros = [90, 85, 170, 65, 80, 80]
let yAlturaCarros = [55, 46, 110, 45, 55, 70]

//Funções dos carros:

function mostraCarro() {
  image(
    imgCarros[0],
    xCarros[0],
    yCarros[0],
    xComprimentoCarros[0],
    yAlturaCarros[0]
  )
  image(
    imgCarros[1],
    xCarros[1],
    yCarros[1],
    xComprimentoCarros[1],
    yAlturaCarros[1]
  )
  image(
    imgCarros[2],
    xCarros[2],
    yCarros[2],
    xComprimentoCarros[2],
    yAlturaCarros[2]
  )
  image(
    imgCarros[3],
    xCarros[3],
    yCarros[3],
    xComprimentoCarros[3],
    yAlturaCarros[3]
  )
  image(
    imgCarros[4],
    xCarros[4],
    yCarros[4],
    xComprimentoCarros[4],
    yAlturaCarros[4]
  )
  image(
    imgCarros[5],
    xCarros[5],
    yCarros[5],
    xComprimentoCarros[5],
    yAlturaCarros[5]
  )
}

function movimentaCarro() {
  xCarros[0] = xCarros[0] - velocidadeCarros[0]
  xCarros[1] = xCarros[1] - velocidadeCarros[1]
  xCarros[2] = xCarros[2] - velocidadeCarros[2]
  xCarros[3] = xCarros[3] - velocidadeCarros[3]
  xCarros[4] = xCarros[4] - velocidadeCarros[4]
  xCarros[5] = xCarros[5] - velocidadeCarros[5]
}

//Função Loop Dos Carros:

function loopDosCarros() {
  if (xCarros[0] <= -50) {
    xCarros[0] = 720
  }

  if (xCarros[1] <= -50) {
    xCarros[1] = 720
  }

  if (xCarros[2] <= -150) {
    xCarros[2] = 670
  }

  if (xCarros[3] <= -50) {
    xCarros[3] = 600
  }

  if (xCarros[4] <= -50) {
    xCarros[4] = 690
  }

  if (xCarros[5] <= -50) {
    xCarros[5] = 600
  }

  if (xCarros[6] <= -50) {
    xCarros[6] = 600
  }
}

//Codigos das variaveis dos carros que foram eliminados com o uso de Array:

//variaveis do veiculo 1 Amarelo:
//let xCarro1Am = 690
//let yCarro1Am = 220
//let velocidadeCarro1Am = 5

//variaveis do veiculo 2 Taxi:
//let xCarro2Taxi = 720
//let yCarro2Taxi = 282
//let velocidadeCarro2Taxi = 2.5

//variaveis do veiculo 3 Onibus:
//let xCarro3Bus = 670
//let yCarro3Bus = 305
//let velocidadeCarro3Bus = 3.5

//variaveis do veiculo 4 Moto:
//let xCarro4Moto = 690
//let yCarro4Moto = 400
//let velocidadeCarro4Moto = 3

//variaveis do veiculo 5 Policia:
//let xCarro5Policia = 600
//let yCarro5Policia = 450
//let velocidadeCarro5Policia = 2.5

//variaveis do veiculo 6 Azul:
//let xCarro6Az = 600
//let yCarro6Az = 500
//let velocidadeCarro6Az = 3.5

//Codigos que foram elimidados usando apenas 2 funções para todos os objetos:

//Funções do Carro 1 Amarelo
//function mostraCarro1Am() {
//image(imgCarro1Am, xCarro1Am, yCarro1Am, 90, 55)
//}

//function movimentaCarro1Am() {
//xCarro1Am = xCarro1Am - velocidadeCarro1Am
//}

//Funções do Carro 2 Taxi
//function mostraCarro2Taxi() {
//image(imgCarro2Taxi, xCarro2Taxi, yCarro2Taxi, 85, 46)
//}

//function movimentaCarro2Taxi() {
//xCarro2Taxi = xCarro2Taxi - velocidadeCarro2Taxi
//}

//Funções do Carro 3 Bus
//function mostraCarro3Bus() {
//image(imgCarro3Bus, xCarro3Bus, yCarro3Bus, 170, 110)
//}

//function movimentaCarro3Bus() {
//xCarro3Bus = xCarro3Bus - velocidadeCarro3Bus
//}

//Funções do Carro 4 MOTO
//function mostraCarro4Moto() {
//image(imgCarro4Moto, xCarro4Moto, yCarro4Moto, 65, 45)
//}

//function movimentaCarro4Moto() {
//xCarro4Moto = xCarro4Moto - velocidadeCarro4Moto
//}

//Funções do Carro 5 Policia
//function mostraCarro5Policia() {
//image(imgCarro5Policia, xCarro5Policia, yCarro5Policia, 80, 55)
//}

//function movimentaCarro5Policia() {
//xCarro5Policia = xCarro5Policia - velocidadeCarro5Policia
//}

//Funções do Carro 6 Azul
//function mostraCarro6Az() {
//image(imgCarro6Az, xCarro6Az, yCarro6Az, 80, 70)
//}

//function movimentaCarro6Az() {
//xCarro6Az = xCarro6Az - velocidadeCarro6Az
//}
