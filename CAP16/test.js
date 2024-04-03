const propriedades = new WeakMap();

class VideoGame{
    constructor(nome, controles, saida, midia){
        propriedades.set(this, {
            nome, controles, saida, midia
        });
    }
}