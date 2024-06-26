const words = {
    nouns: ["cornstar", "monarch", "OF creator", "bengali horse racer", "dedicated gambler", "tribal shaman", "retired prostitute", "cartel member", "rare fish investor", "mongolian seafearer", "Austrian navy commander", "V-tuber", "politician", "actor", "singer", "president", "serial killer", "hentai artist", "shaolin master", "rabbie", "minecraft streamer", "islamic extremist", "rebel", "terrorist", "violinist", "health expert"],
    names: ["Joe Biden", "Drake", "Donnald Trump", "Quandale Dingle", "Elon Musk", "JoJo Siwa", "Mike Tyson", "Baby Gronk", "Kai Cenat", "Logan Paul", "Mr.Beast", "Mark Zuck", "Livvy Dunne", "Putin", "Xi Jin Ping", "Christino Ronaldo", "Michael Obama", "Taylor Swift", "John Cena", "James Charles"],
    verbs: ["destroyes", "challenges", "kissed", "cuddled with", "defeats", "embarrasses", "outclasses", "overshadows", "endorses", "outshines", "empowers", "brutally mogs", "rizzes up", "fanum-taxes", "excels", "anihalates", "devastates"],
    activities: ["dance-battle", "singing contest", "rap battle", "cheese rolling contest", "fishing standoff", "race walking", "extreme ironing battle", "russian roulete duel", "do nothing tournament", "boxing match", "a badminton tournament", "a tic tac toe duel", "chess tournament", "cooking competition", "a Fortnite duel", "a bowling duel"],
    places: ["at a charity event", "at LSU college", "on Joe Rogan's podcast", "in a viral video", "during a live broadcast", "during Thanksgiving dinner", "at Oscars", "at a private party", "in a private mansion", "on a private island", "at a disclosed location", "during national landlord appreciation day", "during superbowl half-time"],
    emotions: ["amazed", "excited", "shocked", "flabbergasted", "awe-struck", "impressed", "bored", "humbled", "touched", "fascinated", "admiring", "enthralled"],
    quantifiers: ["Many", "Few", "All", "Some", "Most", "A number of", "Numerous", "Multitudes of"],
    eventAlternatives: ["event", "incident", "happening", "occurrence", "spectacle", "phenomenon"],
    attentionPhrases: ["drawing attention from all over the world", "forever changing the course of history", "captivating the audience globally", "creating a stir across the globe", "gathering worldwide interest"],
    groupTerms: ["fans", "visitors", "hustlers", "bystanders", "spectators", "sigmas", "rizzlers", "gamers", "people", "witnesses"],
    performanceAdjectives: ["exceptionally well", "great", "terrible", "awfully", "awe-inspireing", "exceptional"],
    reactionAdjectives: ["in awe", "excited", "bored", "shocked", "aroused", "horny"],
    sentenceStarters: ["This shocking", "This devastating", "This wholesome", "This unbelievable", "This amazing", "This unexpected", "This surprising"],
    reportingVerbs: ["reported", "said", "testified", "stated", "claimed"]
};

function generateFakeNews() {
    const fakeNews = [];

    // Create multiple sentences to form a longer article
    let subject = `${getRandomWord(words.nouns)} ${getRandomWord(words.names)}`;
    let objectNoun = getRandomWord(words.nouns);
    let objectName = getRandomWord(words.names);
    let object = `${objectNoun} ${objectName} in ${getRandomWord(words.activities)}`;

    // Ensure subject and object are different entities
    while (subject.includes(objectName)) {
        objectNoun = getRandomWord(words.nouns);
        objectName = getRandomWord(words.names);
        object = `${objectNoun} ${objectName} in ${getRandomWord(words.activities)}`;
    }

    const verb = getRandomWord(words.verbs);
    const place = getRandomWord(words.places);
    const attentionPhrase = getRandomWord(words.attentionPhrases);
    const emotion = getRandomWord(words.emotions);

    const title = `${subject} ${verb} ${object} ${place}.`;
    const capitalizedTitle = `<div id="title">${capitalizeFirstLetter(title)}</div>`;
    const sentence2 = `<div class="paragraph">${getRandomWord(words.sentenceStarters)} ${getRandomWord(words.eventAlternatives)} took place ${place}, ${attentionPhrase}.</div>`;
    const groupTerm = getRandomWord(words.groupTerms);
    const sentence3 = `<div class="paragraph">${capitalizeFirstLetter(groupTerm)} ${getRandomWord(words.reportingVerbs)} that ${subject} performed ${getRandomWord(words.performanceAdjectives)}, leaving ${objectName} ${getRandomWord(words.reactionAdjectives)}.</div>`;
    const sentence4 = `<div class="paragraph">${generateLastSentence()}</div>`;

    fakeNews.push(capitalizedTitle, sentence2, sentence3, sentence4);

    document.getElementById('news').innerHTML = fakeNews.join('');
}

function generateLastSentence() {
    const quantifier = getRandomWord(words.quantifiers);
    const group = getRandomWord(words.groupTerms);

    return `${quantifier} ${group} were ${getRandomWord(words.emotions)} by the ${getRandomWord(words.eventAlternatives)}.`;
}

function getRandomWord(wordArray) {
    return wordArray[getRandomInt(0, wordArray.length)];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//pocutim se kot pravi novinar!
generateFakeNews();
