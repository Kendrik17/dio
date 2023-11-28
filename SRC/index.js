// Função para gerar um número aleatório dentro de um intervalo
function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 10)) + min;
  }
  
  // Função para calcular o XP Rank
  function calcularXpRank() {
    var vitoria = gerarNumero(0, 110);
    var derrota = gerarNumero(0, 110);
    
    let partidas = vitoria - derrota;
    let nivel;
  
    if (vitoria < 10) {
      nivel = "Ferro";
    } else if (vitoria >= 11 && vitoria <= 20) {
      nivel = "Bronze";
    } else if (vitoria >= 21 && vitoria <= 50) {
      nivel = "Prata";
    } else if (vitoria >= 51 && vitoria <= 80) {
      nivel = "Ouro";
    } else if (vitoria >= 81 && vitoria <= 90) {
      nivel = "Diamante";
    } else if (vitoria >= 91 && vitoria <= 100) {
      nivel = "Lendário";
    } else if (vitoria >= 101) {
      nivel = "Imortal";
    } else {
      nivel = "Fracassado";
    }
  
    console.log("Você tem " + partidas + " partidas e está no nível " + nivel);
  }
  
  // Utilização da função para calcular o XP Rank
  calcularXpRank();