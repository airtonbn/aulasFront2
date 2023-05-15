var jogadaUsuario = prompt('O que você deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura');
var jogadaScript = Math.floor(Math.random() * 3) + 1;
console.log(jogadaScript);
if (jogadaUsuario === jogadaScript) {
  alert('Empatou!');
} else if (
  (jogadaUsuario === '1' && jogadaScript === 3) ||
  (jogadaUsuario === '2' && jogadaScript === 1) ||
  (jogadaUsuario === '3' && jogadaScript === 2)
) {
  alert('Você ganhou!');
} else {
  alert('Você perdeu!');
}
