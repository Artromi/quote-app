const quoteSection = document.getElementById("quotes-section");
const singleQuote = document.getElementById("quote");
const author = document.getElementById("footer");
//
function getQuote() {
  quoteSection.innerHTML = "";
  const quote = fetch("https://dummy-apis.netlify.app/api/quote");

  quote
    .then((response) => {
      console.log(response.status); // 200
      console.log(response.ok); // true
      return response.json(); // returns a promise with the actual resource
    })
    .then((data) => {
      console.log(data);
      singleQuote.innerText = data.quote;
      author.innerText = "- " + data.author;

      quoteSection.append(singleQuote, author);
    });
}
// event listener
const btnQuote = document.querySelector("button");
btnQuote.addEventListener("click", getQuote);
