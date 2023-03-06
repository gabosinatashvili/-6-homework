function capitalizeEveryWord(sentence) {
    let words = sentence.split(" ");
    let capitalizedWords = words.map(word => {
      return word.toUpperCase();
    });
    let capitalizedSentence = capitalizedWords.join(" ");
    return capitalizedSentence;
  }

  let sentence = "stay hydrated";
  let capitalizedSentence = capitalizeEveryWord(sentence);
  console.log(capitalizedSentence); 
  