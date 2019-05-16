// run -> npm start 
// it will ask for length and sum enter with space respectively
//enter the array elements  separating with space

const read = require('readline-sync');

function main(){
var testCases = read.question('enter the no of test cases');
for(let i=0;i<testCases;i++){

var lengthSum = read.question(`enter lenght and sum for test case ${i+1} = `);
var array = read.question('enter array');
let result = returnIndex(lengthSum, array);
console.log(result);
}
}
main();

function returnIndex(input, arr){
	let inputArr = input.split(' ');
	let len = parseInt(inputArr[0]);
let sum = parseInt(inputArr[1]);
	let newArr = arr.split(' ');
	for(let i=0; i<len;i++){
	let add=0;
		for(let j=i;j<len;j++){
			add+= parseInt(newArr[j]);
			if(add == sum){
				return { first:i+1, last:j+1 };	
			}
		}
	}
return -1;
}
