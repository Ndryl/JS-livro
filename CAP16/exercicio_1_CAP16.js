// function VideoGame(marca, nControles, tipoMidia) {
//     this.marca = marca;
//     this.nControles = nControles;
//     this.tipoMidia = tipoMidia;
//   }
  
//   var playstation = new VideoGame('sony', '2', 'dvd');
//   console.log(playstation);
  // { marca: 'sony', nControles: '2', tipoMidia: 'dvd' }

  class VideoGame{
    constructor(marca, nControles, tipoMidia){
        this.marca = marca;
        this.nControles = nControles;
        this.tipoMidia = tipoMidia;
    }
  }
  let playstation = new VideoGame('Sony', '2', 'dvd');
  console.log(playstation);