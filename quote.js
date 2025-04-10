//Variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{quote: "The best way to find yourself is to loose yourself in the service of others",
    person: "Mahatma ghandi"
},{ quote: "if you want to live a happy life,tie it to a goal,not to people or things",
person: "Albert Einstein"
},{quote:"your time is limited,so dont waste it living someone elses life",
person: "Steve jobs"
},{quote:"you cannot control what the world does to you,but you can control how you react to it",
person:"Marcus Aurelis"
},{quote:"if you look at what you have in life you will always have more,if you look at what you dont have,youl never have enough",
person:"oprah winfrey"
}
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})