let btn = document.querySelector(".newquote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "Power comes in response to a need, not a desire. You have to create that need.",
    person: "Goku (Dragon Ball Z)",
  },
  {
    quote: "When you give up, your dreams and everything else are gone.",
    person: "Ichigo Kurosaki (Bleach)",
  },
  {
    quote:
      "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.",
    person: "Gildarts Clive (Fairy Tail)",
  },
  {
    quote:
      "A lesson without pain is meaningless. That’s because you can’t gain something without sacrificing something in return.",
    person: "Edward Elric (Fullmetal Alchemist: Brotherhood)",
  },
  {
    quote: "It takes a mere second for a treasure to turn to trash.",
    person: "Hisoka (Hunter × Hunter)",
  },
  {
    quote:
      "In our society, letting others find out that you are a nice person is a very risky move. It’s extremely likely that someone would take advantage of that.",
    person: "Hachiman Hikigaya (Oregairu)",
  },
  {
    quote:
      "The world isn’t perfect. But it’s there for us, trying the best it can… that’s what makes it so beautiful.",
    person: "Roy Mustang (Fullmetal Alchemist: Brotherhood)",
  },
  {
    quote: "People who can't think flexibly don't survive in this world.",
    person: "Kiyotaka Ayanokouji (Classroom of the Elite)",
  },
  {
    quote:
      "If you want to grant your own wish, then you should clear your own path to it.",
    person: "Kiyotaka Ayanokouji (Classroom of the Elite)",
  },
  {
    quote:
      "Whether a fish lives in a clear stream or a water ditch, so long as it continues swimming forward, it will grow up beautifully.",
    person: "Koro-sensei (Assassination Classroom)",
  },
];

btn.addEventListener("click", function () {
  quote.classList.add("fade-out");
  person.classList.add("fade-out");

  setTimeout(() => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

    quote.classList.remove("fade-out");
    person.classList.remove("fade-out");
    quote.classList.add("fade-in");
    person.classList.add("fade-in");

    setTimeout(() => {
      quote.classList.remove("fade-in");
      person.classList.remove("fade-in");
    }, 400);
  }, 400);
});
