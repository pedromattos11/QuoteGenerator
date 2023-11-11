// Array de citações
const quotes = [
    "A vida é aquilo que acontece enquanto você está ocupado fazendo outros planos. - John Lennon",
    "O único modo de fazer um grande trabalho é amar o que você faz. - Steve Jobs",
    "Seja a mudança que você deseja ver no mundo. - Mahatma Gandhi",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia. - Robert Collier",
    "O segredo da felicidade não está em fazer sempre o que se quer, mas em querer sempre o que se faz. - Léon Tolstói"
];

// Função para gerar citação aleatória
function generateQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomNumber];
}

// Event listener para o botão
document.getElementById('generate').addEventListener('click', generateQuote);

// Gerar uma citação aleatória ao carregar a página
generateQuote();
