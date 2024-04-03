const profissional = {
    titulo: 'Engenheiro de Software',
    departamento: 'Engenharia'
  };
  
  function isEngenheiro(profissional) {
    const {titulo} = profissional;

    const {departamento} = profissional;
  
    return titulo.indexOf("Engenheiro") > -1 && departamento === 'Engenharia';
  }
  
  console.log(isEngenheiro(profissional)); // true
  profissional.titulo = 'Marketing';
  console.log(isEngenheiro(profissional)); // false