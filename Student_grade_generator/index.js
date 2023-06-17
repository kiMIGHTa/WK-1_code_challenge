const prompt = require("prompt-sync")()

let studentMarks = prompt("Enter student's marks: ")

if(studentMarks>100 || studentMarks<0){
console.log(`Enter valid marks`)
} else  if(studentMarks>79 && studentMarks<=100){
    console.log(`A`)
}else  if(studentMarks>59 && studentMarks<=79){
    console.log(`B`)
}else  if(studentMarks>48 && studentMarks<=59){
    console.log(`C`)
}else  if(studentMarks>39 && studentMarks<=49){
    console.log(`D`)
}else  if(studentMarks>0 && studentMarks<=39){
    console.log(`E`)
}