
const mixedMessages = () => {
    const wordsArray1 = ['want to', 'need to', 'have to', 'get to'];
    const wordsArray2 = ['run','jump','laugh','dance'];
    const wordsArray3 = ['in the sunshine','in the moonlight','all night long','every day'];

    let word1 = wordsArray1[Math.floor(Math.random() * 4)];
    let word2 = wordsArray2[Math.floor(Math.random() * 4)];
    let word3 = wordsArray3[Math.floor(Math.random() * 4)];

    return `I  ${word1} ${word2} ${word3}!`
}

const displayMessage = () => {
    const messageSpot = document.getElementById('messageSpot');
    messageSpot.innerHTML  = mixedMessages();
    const button = document.getElementById('button');
    button.onclick('displayMessage()');

}



console.log(mixedMessages());