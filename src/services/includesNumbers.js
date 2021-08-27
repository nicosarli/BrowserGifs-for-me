const numbers = "0123456789"

const includesNumbers = (text) => {
    for(let i=0; i<text.length; i++){
       if (numbers.indexOf(text.charAt(i), 0) !== -1){
          return 1;
       }
    }
    return 0;
}

export default includesNumbers
