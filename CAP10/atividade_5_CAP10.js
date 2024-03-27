var equipe = {
    nome: 'Valentes da Glória',
    membros: ['Luciano', 'Maria', 'Virgínia', 'Daniela'],
    imprimeNomes: function() {
        this.membros.forEach(function(membro) {
            console.log(membro + ' é da equipe ' + this.nome);
        }.bind(this));
    }
}

equipe.imprimeNomes();