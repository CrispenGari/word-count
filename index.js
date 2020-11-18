
/*
    INFORMATION ABOUT A LONG STRING
*/
const stringSummary = (longstring)=>{
    // getting the array of words without spaces
    const words_array = String(longstring).match(/\S+/g);
    return {
        charactersNoSpaces : String(longstring).replace(/\s+/g, '').length,
        characters : String(longstring).length,
        words : words_array ? words_array.length : 0,
        lines : String(longstring).split(/\r*\n/).length,
        spaces: Number(String(longstring).length) - Number(String(longstring).replace(/\s+/g, '').length)
    };
}
// getting word counts only
const wordCount = (longstring) =>{
    const words_array = String(longstring).match(/\S+/g);
    return words_array ? words_array.length : 0;
}
// getting line counts only
const lineCount = (longstring) =>{
    return String(longstring).split(/\r*\n/).length
}
// getting characters count
const charactersCount = (longstring)=>{
    return{
        charactersNoSpaces : String(longstring).replace(/\s+/g, '').length,
        characters : String(longstring).length,
        spaces: Number(String(longstring).length) - Number(String(longstring).replace(/\s+/g, '').length)
    }
}
module.exports = {
    charactersCount,
    stringSummary,
    lineCount,
    wordCount,
}