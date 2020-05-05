var quotes = [
    {
        quote:"You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
        author:"Dr. Seuss",
        image: "img/seuss.jpg"
    },
    {
        quote:"Get busy living or get busy dying.",
        author:"Stephen King",
        image:"img/stephenKing.jpg"
    },
    {
        quote:"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
        author:"Mark Caine",
        image:"img/markcaine.jpg"
    },
    {
        quote:"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        author:"Helen Keller",
        image:"img/HellenKeller1.jpg"
    },
    {
        quote:"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
        author:"Mark Twain",
        image:"img/markTwain.jpg"
    }
];
    document.querySelector('#generate-btn').addEventListener('click', () => {
    var random = Math.floor(Math.random() * quotes.length);
    document.querySelector('#quote').innerText = quotes[random].quote;
    document.querySelector('.quote-author').innerText = quotes[random].author;
    document.querySelector('.authorImage').src = quotes[random].image;
})