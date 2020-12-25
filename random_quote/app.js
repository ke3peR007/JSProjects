// alert("connected");

// qoutes
let quotes = [
  {
    qoute:
      "Start writing, no matter what. The water does not flow until the faucet is turned on",
    author: "Louis L’Amour",
  },
  {
    qoute: "The first draft is just you telling yourself the story",
    author: "Terry Pratchett",
  },
  {
    qoute: "You can always edit a bad page. You can’t edit a blank page",
    author: "Jodi Picoult",
  },
  {
    qoute: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    qoute:
      "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    author: "Winston Churchill",
  },
  {
    qoute: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    qoute:
      "You learn more from failure than from success. Don’t let it stop you. Failure builds character.”",
    author: "Unknown",
  },
  {
    qoute:
      "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
    author: "Steve Jobs",
  },
  {
    qoute:
      "People who are crazy enough to think they can change the world, are the ones who do",
    author: "Rob Siltanen",
  },
  {
    qoute:
      "Failure will never overtake me if my determination to succeed is strong enough.",
    author: "Og Mandino",
  },
  {
    qoute:
      "The man who has confidence in himself gains the confidence of others.",
    author: "Hasidic Proverb",
  },
];

// display 1st qoute from qoutes on page on load
// get random qoute from qoutes
// 1. generate random number of size quotes length
// 2. onclick of button generate the random qoute
// 3. display qoute and author on page

function qouteGenerator() {
    let qouteNumber = Math.floor(Math.random() * quotes.length);
    console.log(qouteNumber);
    // console.log(quotes[0]);
    let quote = quotes[qouteNumber].qoute;
    let author = quotes[qouteNumber].author;
    console.log(quote);
    console.log(author);
    document.querySelector(".qoute").innerHTML  = quote;
    document.querySelector(".author").innerHTML = author;
}