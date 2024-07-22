function palindrom(word){
    let reversed = ""
    for (let index = word.length -1 ; index > -1; index--) {
        reversed += word[index]
    }
    return reversed
}

console.log(palindrom("milkes"))