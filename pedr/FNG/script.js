const words = {
    nouns: ["cornstar", "monarch", "OF creator", "V-tuber", "politician", "actor", "singer", "president", "serial killer", "hentai artist", "shaolin master", "rabbie", "minecraft streamer", "islamic extremist", "rebel", "terrorist", "violinist", "health expert"],
    names: ["Joe Biden", "Drake", "Donnald Trump", "Elon Musk", "JoJo Siwa", "Baby Gronk", "Kai Cenat", "Zuck", "Livvy Dunne", "Putin", "Xi Jin Ping", "Christino Ronaldo", "Michael Obama", "Taylor Swift", "John Cena", "James Charles"],
    verbs: ["destroyes", "challenges", "kissed", "cuddled with", "defeats", "embarrasses", "outclasses", "overshadows","endorses", "outshines", "empowers", "brutally mogs", "rizzes up", "fanum-taxes", "excels", "anihalates","devastates"],
    activities: ["dance-battle", "singing contest", "rap battle","cheese rolling contest", "fishing standoff", "race walking","extreme ironing battle","russian roulete duel", "do nothing torunament", "boxing match", "a badminton tournament", "a tic tac toe duel", "chess tournament", "cooking competition", "a Fortnite duel", "a bowling duel"],
    places: ["at a charity event", "in a viral video", "during a live broadcast", "during Thanksgiving dinner","at Oscars", "at a private party", "in a private mansion","on a private island","at a disclosed location", "during national landlord appreciation day", "during superbowl half-time"],
    emotions: ["amazed", "excited", "shocked", "flabbergasted","awe-struck", "impressed", "bored", "humbled", "touched", "fascinated", "admiring", "enthralled"],
    quantifiers: ["Many", "Few", "All", "Some", "Most", "A number of", "Numerous"],
    eventAlternatives: ["event", "incident", "happening", "occurrence", "spectacle", "phenomenon"],
    attentionPhrases: ["drawing attention from all over the world", "forever changing the course of history", "captivating the audience globally", "creating a stir across the globe", "gathering worldwide interest"],
    groupTerms: ["fans", "visitors", "bystanders", "spectators", "sigmas", "rizzlers", "gamers", "people", "witnesses"],
    performanceAdjectives: ["exceptionally well", "great", "terrible"],
    reactionAdjectives: ["in awe", "excited", "bored", "shocked", "aroused", "horny"],
    sentenceStarters: ["This shocking", "This devastating", "This wholesome", "This unbelievable", "This amazing", "This unexpected", "This surprising"],
    reportingVerbs: ["reported", "said", "testified", "stated", "claimed"]
};

function generateFakeNews() {
    const fakeNews = [];

    // Create multiple sentences to form a longer article
    let subject = `${getRandomWord(words.nouns)} ${getRandomWord(words.names)}`;
    let object = `${getRandomWord(words.names)} in ${getRandomWord(words.activities)}`;

    // Ensure subject and object are different entities
    while (subject.includes(object.split(' ')[0])) {
        object = `${getRandomWord(words.names)} in ${getRandomWord(words.activities)}`;
    }

    const verb = getRandomWord(words.verbs);
    const place = getRandomWord(words.places);
    const attentionPhrase = getRandomWord(words.attentionPhrases);
    const emotion = getRandomWord(words.emotions);

    const title = `${subject} ${verb} ${object} ${place}.`;
    const capitalizedTitle = `<div id="title">${capitalizeFirstLetter(title)}</div>`;
    const sentence2 = `<div class="paragraph">${getRandomWord(words.sentenceStarters)} ${getRandomWord(words.eventAlternatives)} took place ${place}, ${attentionPhrase}.</div>`;
    const groupTerm = getRandomWord(words.groupTerms);
    const sentence3 = `<div class="paragraph">${capitalizeFirstLetter(groupTerm)} ${getRandomWord(words.reportingVerbs)} that ${subject} performed ${getRandomWord(words.performanceAdjectives)}, leaving ${object.split(' ')[0]} ${getRandomWord(words.reactionAdjectives)}.</div>`;
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
