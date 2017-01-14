//reference library
var lab1 = require('lab1');

//get the paragraph
var labtext = lab1.readFile('lab1.txt','utf8',function(err,labtext){
    //if we got the text in the lam text file, print it
    console.log(labtext);
});