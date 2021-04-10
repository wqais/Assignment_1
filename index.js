var readlineSync = require('readline-sync')
var chalk = require('chalk')

console.log(chalk.yellow('Welcome to How Well Do You Know Qais!'))
var userName = readlineSync.question("Please enter your name: ")
console.log("Hello " + userName)
console.log(`RULES:
1.Enter all answers in lowercase.
2.There are no options, just answer in one word.
3. For every correct answer you gain 1 point and for every wrong answer you will lose a point.
(PS: I've added hints at the end of every question to make it easier! :) 
---------------`)

score = 0

var highScores = [
  {
    name: "Deep",
    score: 7
  },
  {
    name: "Aditya",
    score: 6
  },
  {
    name: "Soham",
    score: 6
  }
]

function quiz(question, answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer === answer){
    console.log(chalk.green('Yay! Your answer is correct. You gained a point.'))
    score++
    console.log("Your current score is " + chalk.cyan(score))
    console.log("---------------")
  }else{
    console.log(chalk.red('Oops! Your answer is incorrect.'))
    score = score - 1
    console.log("Your current score is " + chalk.cyan(score))
    console.log("The correct answer is: " + currentQuestion.answer)
    console.log("---------------")
  }
}

var qseries = [{
  question: `
  1.What does my name mean?
  hint: I share my name with someone from the classic movie ' Laila Majnu'
  Enter your answer: `,
  answer: "majnu"
},
{
  question: `
  2.What is my birth date? 
  hint: no hint xD, answer should be in dd/mm format eg: 26/01
  Enter your answer: `,
  answer: "28/05" 
},
{
  question:`
  3.What is my favourite food?
  hint: It's a type of chicken roll
  Enter your answer: `,
  answer: "shawarma"
},
{
  question: `
  4.If I could be an animal, which one would it be?
  hint: they swim and jump
  Enter your answer: `,
  answer: "dolphin"
},
{
  question:`
  5.Who is my favourite anime character?
  hint: He annihilated his family and  his entire clan!
  Enter your answer: `,
  answer: "itachi"
},
{
  question:`
  6.What is my favourite color?
  hint: it's dark
  Enter your answer: `,
  answer: "black"
},
{
  question:`
  7.Who is my favourite Marvel character?
  hint: He threatened NooobMaster69
  Enter your answer: `,
  answer: "thor"
},
{
  question:`
  8.Would i rather go to a party or stay at home?
  hint: ___ sweet ___
  Enter your answer: `,
  answer: "home"
},
{
  question:`
  9.What is the name of the sport I'd like to do at least once in my lifetime?
  hint: it involves falling
  Enter your answer: `,
  answer: "skydiving"
},
{
question:`
  10.What is my eye color?
  hint: 
  Enter your answer: `,
  answer: "brown"
}
]

for( var i = 0; i < qseries.length; i++){
  var currentQuestion = qseries[i]
  quiz(currentQuestion.question, currentQuestion.answer)
}

console.log("Your Final Score is: " + chalk.green(score))
console.log(chalk.yellow('Thank you for participating in the quiz. Let me know your scores!'))
