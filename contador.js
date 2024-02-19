// Definindo a data alvo (data final do contador)
const dataAlvo = new Date('2024-02-18T14:33:00').getTime();

// Atualização do contador a cada segundo
const intervalo = setInterval(function() {
  // Obtendo a data e hora atual
  const dataAtual = new Date().getTime();
  
  // Calculando o tempo restante em milissegundos
  const tempoRestante = dataAlvo - dataAtual;
  
  // Convertendo o tempo restante para dias, horas, minutos e segundos
  const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
  
  // Exibindo o contador na página
  document.getElementById('contador').innerHTML = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos, e ${segundos} segundos para o lançamento.`;
  
  // Verificando se o tempo chegou a zero
  if (tempoRestante < 0) {
    clearInterval(intervalo); // Parando o intervalo
    document.getElementById('contador').innerHTML = 'O lançamento já ocorreu!'; // Mensagem quando o contador chegar a zero
  }
}, 1000); // 1000 milissegundos = 1 segundo
