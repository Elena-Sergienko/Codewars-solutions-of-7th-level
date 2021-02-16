// 7 kyu
// sPoNgEbOb MeMe
// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?
// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.
// Examples:
// spongeMeme("stop Making spongebob Memes!") // => 'StOp mAkInG SpOnGeBoB MeMeS!'
// spongeMeme("colored teens cant Be successful in tech") // =>'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh'

function spongeMeme(str) {
    let res = '';
    for (let i = 0; i < str.length; i++){
        if (i % 2 === 0){
            res += str[i].toUpperCase();
        } else {
            res += str[i].toLowerCase()
        }
    }
    return res;
}

// -------------------------------------------------------

function spongeMeme(sentence) {
    let arrUp = [];
    let string = '';
    let arrLow = [];
    let leter = '';
    let arr = sentence.split();
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j<arr[i].length; j++){
            if (j % 2 === 0){
                string = string + arr[i][j].toUpperCase();
            } else {
                string = string + arr[i][j].toLowerCase();
            }
        }
    }
    return string;
}