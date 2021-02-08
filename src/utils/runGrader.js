const runGrader = (questions, givenAnswers) => {

    let numCorrect = 0;

    questions.forEach(question => {
        const givenAnswer = givenAnswers[question.id];

        if(givenAnswer === question.correctAnswer)
            numCorrect++;
    });

    return numCorrect;
};

export default runGrader;