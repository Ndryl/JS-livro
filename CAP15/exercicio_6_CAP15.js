const corpoDocente = [
    [ 'Gramática', '9:00', 'Sueli' ],
    [ 'Matemática', '10:15', 'Amilton'],
    [ 'Educação Física', '11:30', 'Bruno' ]
  ];
  let mostrarProfessor = corpoDocente.reduce((cont, dados)=>{
    let [materia, hora, nome] = dados;
    console.log(`Aula de ${materia} às ${hora} com professor(a) ${nome} `);
  }, []);