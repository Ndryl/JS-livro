const contatos = [
    {
      nome: 'Mario Antonio',
      numero: '1234-5678'
    },
    {
      nome: 'Reinalda Silva',
      numero: '1234-6789'
    },
    {
      nome: 'Bárbara Lopes',
      numero: '1234-5567'
    }
  ];
  const [,Reinalda] = contatos;
  function retorno({numero}){
    console.log(numero);
  }
  retorno(Reinalda);