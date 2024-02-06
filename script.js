/*
const quoteSection = document.getElementById("quotes-section");
const singleQuote = document.getElementById("quote");
const author = document.getElementById("footer");
//
function getQuote() {
  quoteSection.innerHTML = "";
  const quote = fetch("https://dummy-apis.netlify.app/api/quote");

  quote
    .then((response) => {
      return response.json(); // returns a promise with the actual resource
    })
    .then((data) => {
      singleQuote.textContent = data.quote;
      author.textContent = "- " + data.author;

      quoteSection.append(singleQuote, author);
    });
}
// event listener
const btnQuote = document.querySelector("button");
btnQuote.addEventListener("click", getQuote);
*/
//
//--- mit state ---
//
const quoteSection = document.getElementById("quotes-section");
const singleQuote = document.getElementById("quote");
const author = document.getElementById("footer");
// state
const state = { author: "", quote: "" };

function getQuote() {
  const quotes = fetch("https://dummy-apis.netlify.app/api/quote");

  quotes
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      state.author = data.quote;
      state.quote = data.quote;
    });
  render();
}

function render() {
  singleQuote.textContent = state.quote;
  author.textContent = "- " + state.author;

  quoteSection.append(singleQuote, author);
}
// event listener
const btnQuote = document.querySelector("button");
btnQuote.addEventListener("click", getQuote);
