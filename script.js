const resultEl=document.getElementById('result')
const lengthEl=document.getElementById('length')
const uppercaseEl=document.getElementById('uppercase')
const lowercaseEl=document.getElementById('lowercase')
const generateEl=document.getElementById('generate')
const numberEl=document.getElementById('number')
const clipboardEl=document.getElementById('clipboard')

const RandomFunc={
lower:getRandomLower,
upper:getRandomUpper,
number:getRandomNumber
}
generateEl.addEventListener('Click' , () => {
const length= +lengthEl.value
const hasLower= lowerEl.checked
const hasUpper= upperEl.checked
const hasNumber= numberEl.checked
console.log(hasLower,hasUpper ,hasNumber);

})

function getRandomLower(params) {
    return  String.fromCharCode(Math.floor(Math.random*26)+97)
}


function getRandomUpper(params) {
    return  String.fromCharCode(Math.floor(Math.random*26) + 65)
}
function getRandomNumber(params) {
    return  String.fromCharCode(Math.floor(Math.random * 10) + 48)
}

console.log(getRandomNumber());