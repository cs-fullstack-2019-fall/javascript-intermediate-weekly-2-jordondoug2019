//Phase 1
class Question
{
    constructor(text, answer, correctAnswer)
    {
        this.text = text;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    }
    displayQ(element)
    {


    }
    checkAnswer()
    {

    }
}
Question.displayQ();
Question.checkAnswer();


 questionList=[question1, question2,question3];
let userInput=parseInt(prompt("Select Your Answer"))
 let question1= new Question("What color is an orange?",["1. orange", "2. blue","3. gray"],1);
let question2= new Question("what color is blue",["1. blue","2. blue","3. blue"],1);
 let question3=new Question("what color is yellow",["1.yellow,2. yellow","3.yellow"],1);