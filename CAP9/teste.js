const horas = new Date().getHours();
const mensagem = defineMensagem `Bom dia, são ${horas} horas`;

function defineMensagem(strings, ...values) {
    const hora = values[0];
    let saudacao = "";
    
    if (hora >= 6 && hora < 12) {
        saudacao = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }
    
    return `${saudacao}, são ${hora} horas`;
}

console.log(mensagem);
