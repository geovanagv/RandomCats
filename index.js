document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.querySelector('#catImage');
    
    // URL da API de gatinhos
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';
    
    // Faz a requisição à API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data[0] && data[0].url) {
          const imageUrl = data[0].url;
          imageElement.src = imageUrl;
        } else {
          console.error('URL da imagem não encontrada na resposta da API.');
        }
      })
      .catch(error => {
        console.error('Erro ao buscar a imagem:', error);
      });
  });
  