// Array of quotes
const quotes = [
    "Life is what happens while you are busy making other plans. - John Lennon",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
    "Happiness is not in doing what you like, but in liking what you do. - Léon Tolstoy",
    "The best way to predict the future is to create it. - Peter Drucker",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It always seems impossible until it is done. - Nelson Mandela",
    "Happiness is not something readymade. It comes from your own actions. - Dalai Lama",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Life is an adventure, not a destination.",
    "A journey of a thousand miles begins with a single step.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The best way to predict the future is to create it.",
    "Happiness is a choice, not a result.",
    "In the middle of every difficulty lies opportunity.",
    "Don't count the days, make the days count.",
    "Be yourself, everyone else is already taken.",
    "The secret of getting ahead is getting started.",
    "Every moment is a fresh beginning.",
    "The biggest risk is not taking any risk.",
    "Life is about making an impact, not making an income.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Quem caminha sozinho pode até chegar mais rápido, mas aquele que vai acompanhado, com certeza vai mais longe.",
    "A persistência é o caminho do êxito.",
    "O que não provoca minha morte faz com que eu fique mais forte.",
    "Tudo vale a pena se a alma não é pequena.",
    "Nada acontece a menos que sonhemos antes.",
    "Nunca é tarde demais para ser aquilo que sempre se desejou ser.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Seja a mudança que você quer ver no mundo.",
    "Acredite em você, mas não duvide sempre dos outros.",
    "A vida é curta demais para se preocupar com coisas insignificantes.",
];

// Function to generate a random quote.
function generateQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomNumber];
}

// Event listener for the button.
document.getElementById('generate').addEventListener('click', generateQuote);

// Generate a random quote on page load.
generateQuote();