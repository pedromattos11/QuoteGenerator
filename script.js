// Array of quotes
const quotes = [
    "Life is what happens while you are busy making other plans. - John Lennon",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
    "Happiness is not in doing what you like, but in liking what you do. - Léon Tolstoy"
];

// Function to generate a random quote
function generateQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomNumber];
}

// Event listener for the button
document.getElementById('generate').addEventListener('click', generateQuote);

// Generate a random quote on page load
generateQuote();
