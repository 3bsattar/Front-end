

function randomQuote(){

    var quoters = ["Albert Einstein","Marcus Tullius Cicero","Bernard M. Baruch",
        "Mark Twain","Oscar Wilde","Ralph Waldo Emerson","Andre Gide"
    ];


    var quotes = ["“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        "“A room without books is like a body without a soul.”",
        "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        "“If you tell the truth, you don't have to remember anything.”",
        "“To live is the rarest thing in the world. Most people exist, that is all.”",
        "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        "“It is better to be hated for what you are than to be loved for what you are not.”",
    ];


    var num = Math.floor(Math.random() * quotes.length );

    document.getElementById("quote").innerHTML =  quotes[num] +" --" +quoters[num];


}