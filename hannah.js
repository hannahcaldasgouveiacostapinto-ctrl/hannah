const alunonotas = nomes.map((nome) => {
  return {
    nome: nome,
    nota: Math.floor(Math.random() * 10) + 1, // Gera uma nota aleatória entre 1 e 10
  };
for ( const aluno of alunonotas) {
  console.log(`Aluno: ${aluno.nome}, Nota: ${aluno.nota}`);
