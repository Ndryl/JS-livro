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
  let tel_p_contato = contatos.reduce((refe, contato)=>{
    let {numero} = contato;
    refe.push(numero);
    return refe;
  }, []);
  console.log(tel_p_contato);
