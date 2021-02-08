import axios from 'axios';
import mapIdxToLetter from 'utils/mapIdxToLetter';
import postToServer from 'utils/postToServer';

const autoGenerateQuiz = () => {
    axios.get("https://opentdb.com/api_category.php").then(res => {
            const categories = res.data.trivia_categories;
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            const { id, name } = randomCategory;
            fetchQuiz(name, id);
    })
}

const fetchQuiz = (categoryName, categoryId) => {

    const url = `https://opentdb.com/api.php?amount=10&difficulty=easy&category=${categoryId}`;

    axios.get(url).then(res => {
        const quiz = res.data.results;

        if(!quiz || quiz.length === 0)
            return autoGenerateQuiz();
        
        const questions = quiz.map((question, questionNumber) => {
            let answers = [...question.incorrect_answers, question.correct_answer];
            answers = shuffle(answers);
            const answerChoices = answers.map((answer, idx) => {
                return {
                    body: answer,
                    letter: mapIdxToLetter(idx)
                }
            })

            const correctAnswer = answerChoices.find(answer => answer.body === question.correct_answer).letter;
            const prompt = question.question;
            const number = questionNumber + 1;

            return {
                correctAnswer,
                prompt,
                number,
                answerChoices
            };
        })

        const submissionQuiz = {questions, topic: categoryName};


        postToServer("api/quizzes", submissionQuiz).then(res => {
            const quizId = res.data;
            window.location = `/quizzes/${quizId}`;
        })
        
    })
}


const shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}
 
export default autoGenerateQuiz;