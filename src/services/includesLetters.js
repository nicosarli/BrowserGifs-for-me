const letters = "abcdefghyjklmnñopqrstuvwxyz"

const includesLetters = (text) => {
  text = text.toLowerCase()
    for(let i=0; i<text.length; i++){
       if (letters.indexOf(text.charAt(i), 0) !== -1){
          return 1;
       }
    }
    return 0;
}

export default includesLetters
