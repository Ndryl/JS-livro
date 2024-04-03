class VideoGame{
    constructor(marca, nControles, tipoMidia){
        this.marca = marca;
        this.nControles = nControles;
        this.tipoMidia = tipoMidia;
    }
  }

  class meuVideoGame extends VideoGame{ 
    constructor(marca, nControles, tipoMidia, nEntradasUSB, voltagem, adicionais){
        super(marca, nControles, tipoMidia);
        this.nEntradasUSB = nEntradasUSB;
        this.voltagem = voltagem;
        this.adicionais = adicionais;
    }
  }
  let playstation = new meuVideoGame('Sony', '2', 'dvd', '3', '220', 'entrada HDIMI');
  console.log(playstation);